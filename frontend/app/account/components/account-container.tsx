"use client";
import Accounts from "./accounts";
import Transactions from "./transactions";
import RecurringPayments from "./recurring-payments";
import React, { useState, useEffect } from "react";
import {
  account_transactions,
  account_recurrings,
} from "../../api/transaction-service";

interface Transaction {
  id: string;
  account: string;
  amount: GLfloat;
  ttype: string;
  receiver: string | null;
  timestamp: Date;
}

interface RecurringPayment {
  id: string;
  account: string;
  amount: GLfloat;
  frequency: string;
  receiver: string | null;
  timestamp: Date;
}

export default function AccountContainer() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recurrings, setRecurrings] = useState<RecurringPayment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTransactions = async (id: string | null) => {
    try {
      const response = await account_transactions(id);
      console.log(response);
      setTransactions(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
  };

  const fetchRecurrings = async (id: string | null) => {
    try {
      const response = await account_recurrings(id);
      console.log(response);
      setRecurrings(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recurring payments:", error);
      setLoading(false);
    }
  };

  const handleSelection = async (account_id: string | null) => {
    setSelectedAccount(account_id);
    fetchTransactions(account_id);
    fetchRecurrings(account_id);
  };

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          {/* <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
          <p className="text-2xl text-gray-400 ">
            <svg
              aria-hidden="true"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1v16M1 9h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
          <p className="text-2xl text-gray-400 ">
            <svg
              aria-hidden="true"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1v16M1 9h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              aria-hidden="true"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1v16M1 9h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </p>
        </div>
      </div> */}
          {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1v16M1 9h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </p>
      </div> */}
          <div className="grid 2xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center 2xl:col-span-1 lg:col-span-2 sm:col-span-1 ">
              <Accounts selectedAccount={handleSelection} />
            </div>
            <div className="flex items-center justify-center 2xl:col-span-1 lg:col-span-1 sm:col-span-1 ">
              <RecurringPayments recurrings={recurrings} />
            </div>
            <div className="flex items-center justify-center 2xl:col-span-2 lg:col-span-3 sm:col-span-1">
              <Transactions transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
