"use client";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { get_accounts_by_user } from "../../../api/account-service";
import { deposit } from "../../../api/transaction-service";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransferForm from "./transfer-form";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function DepositForm() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [accountID, setAccountID] = useState<string | null>();
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const fetchAccounts = async () => {
    try {
      const response = await get_accounts_by_user();
      setAccounts(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handleAccountChange = (account_id: string) => {
    setAccountID(account_id);
    console.log(account_id);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const submitDeposit = async () => {
    try {
      const depositAmount = parseFloat(amount);
      console.log(accountID);
      if (!accountID) {
        throw new Error("Please select an account.");
      }
      if (isNaN(depositAmount)) {
        throw new Error("Invalid deposit amount.");
      }

      if (depositAmount <= 0) {
        throw new Error("Invalid deposit amount.");
      }

      if (depositAmount > 1000000000) {
        throw new Error("Deposit amount is too large.");
      }

      const response = await deposit(depositAmount, accountID);
      console.log(response.error)
      if (response.error){
        throw new Error("Backend error: Bad Request");
      }

      toast({
        title: "Success! Deposited into account.",
        description: "Amount: " + depositAmount,
        variant: "constructive",
      });
      fetchAccounts();
    } catch (err) {
      toast({
        title: "Uh oh! Unable to deposit.",
        description: "" + err,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Toaster />
      <Tabs defaultValue="deposit" className="w-flex">
        <TabsList>
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="transfer">Transfer Funds</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit">
          <div className="space-y-3 border border-zinc-200 rounded p-4">
            <p className="text-sm">Select Account</p>
            <Select
              name="account"
              onValueChange={handleAccountChange}
              defaultValue=""
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a bank account" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Bank Accounts</SelectLabel>
                  {accounts && accounts.length > 0 ? (
                    accounts.map((account) =>
                      account.status === false ? (
                        <SelectItem key={account.id} value={account.id}>
                          {account.type} {account.id} Balance: $
                          {account.balance}
                        </SelectItem>
                      ) : (
                        <SelectItem value="noAccount" disabled>
                          No open bank accounts
                        </SelectItem>
                      )
                    )
                  ) : (
                    <SelectItem value="noAccount" className="disabled" disabled>
                      No open bank accounts
                    </SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>

            <p className="text-sm">Deposit Amount</p>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleChange}
              step="200"
            />

            <Button type="submit" onClick={submitDeposit} className="bg-blue-600 hover:bg-blue-800">
              Submit
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="transfer">
          <TransferForm fetchAccounts={fetchAccounts} accounts={accounts} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
