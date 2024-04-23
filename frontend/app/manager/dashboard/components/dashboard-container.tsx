"use client";

import React, { useState, useEffect } from "react";
import DashboardCard from "./dashboard-card";
import Report from "./report";
import {
  account_transactions,
  account_recurrings,
} from "@/app/api/transaction-service";
import { get_account_by_id, get_user_by_account } from "@/app/api/account-service";

interface Transaction {
  id: string;
  account: string;
  amount: GLfloat;
  ttype: string;
  receiver: string | null;
  timestamp: Date;
}
interface Address{
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  address: Address | null;
}

interface RecurringPayment {
  id: string;
  account: string;
  amount: GLfloat;
  frequency: string;
  receiver: string | null;
  timestamp: Date;
}

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function DashboardContainer() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [account, setAccount] = useState<BankAccount>();
  const [user, setUser] = useState<User>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recurrings, setRecurrings] = useState<RecurringPayment[]>([]);

  const fetchTransactions = async (id: string | null) => {
    try {
      const response = await account_transactions(id);
      setTransactions(response);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchUser = async (id: string | null) => {
    try {
      const response = await get_user_by_account(id);
      setUser(response);
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  };

  const fetchAccount = async (id: string | null) => {
    try {
      const response = await get_account_by_id(id);
      setAccount(response);
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  };

  const fetchRecurrings = async (id: string | null) => {
    try {
      const response = await account_recurrings(id);
      setRecurrings(response);
    } catch (error) {
      console.error("Error fetching recurring payments:", error);
    }
  };

  const handleSelection = async (account_id: string | null) => {
    console.log("account "+ account)
    setSelectedAccount(account_id);
    fetchAccount(account_id);
    fetchTransactions(account_id);
    fetchRecurrings(account_id);
    fetchUser(account_id);
  };

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center 2xl:col-span-1 lg:col-span-1 sm:col-span-1 ">
              <DashboardCard selectedAccount={handleSelection} />
            </div>
            <div className="flex items-center justify-center 2xl:col-span-2 lg:col-span-1 sm:col-span-1 ">
              {account && account.id ? (
                <Report
                  transactions={transactions}
                  recurrings={recurrings}
                  account={account}
                  user={user}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
