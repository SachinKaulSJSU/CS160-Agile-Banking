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
import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { recurring_payment } from "../../../api/transaction-service";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
  user: string;
}

interface Props {
  fetchAccounts: () => Promise<void>;
  accounts: BankAccount[];
}

export default function RecurringForm({ fetchAccounts, accounts }: Props) {
  const [accountID, setAccountID] = useState<string | null>();
  const [amount, setAmount] = useState<string>("");
  const [receiver, setReceiver] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handlePaymentIntervalChange = (interval: string) => {
    setFrequency(interval)
  }

  const handleAccountChange = (account_id: string) => {
    setAccountID(account_id);
    console.log(account_id);
  };

  const handleReceiverChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
  };

  const recurringPayment = async () => {
    try {
      const paymentAmount = parseFloat(amount);
      console.log(accountID);
      if (!accountID) {
        throw new Error("Please select an account.");
      }
      if (isNaN(paymentAmount)) {
        throw new Error("Invalid payment amount.");
      }

      if (paymentAmount <= 0) {
        throw new Error("Invalid payment amount.");
      }

      const sendingAccount = accounts.find(
        (account) => account.id === accountID
      );

      if (!sendingAccount) {
        throw new Error("Sending account not found.");
      }

      const sendingAccountBalance = parseFloat(sendingAccount.balance);

      if (paymentAmount > sendingAccountBalance) {
        throw new Error("Insufficient balance in account.");
      }

      if (isNaN(paymentAmount) || paymentAmount <= 0) {
        throw new Error("Invalid payment amount.");
      }

      const response = await recurring_payment(
        paymentAmount,
        accountID,
        receiver,
        frequency,
      );
      console.log(response.error);
      if (response.error) {
        throw new Error("Backend error: Bad Request");
      }

      toast({
        title: "Success! Payment sent.",
        description: "Amount: " + paymentAmount,
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

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div>
      <Toaster />
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
                      {account.type} {account.id} Balance: ${account.balance}
                    </SelectItem>
                  ) : null
                )
              ) : (
                <SelectItem value="noAccount" className="disabled" disabled>
                  No open bank accounts
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        <p className="text-sm">Payment Amount</p>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
          step="200"
        />

        <p className="text-sm">Recipient</p>
        <Input
          id="receiver"
          name="receiver"
          type="text"
          placeholder="Enter recipient"
          value={receiver}
          onChange={handleReceiverChange}
        />

        <p className="text-sm">Payment Interval</p>
        <Select
          name="paymentInterval"
          onValueChange={handlePaymentIntervalChange}
          defaultValue=""
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a payment interval" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Payment Intervals</SelectLabel>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="annually">Annually</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          onClick={recurringPayment}
          className="bg-blue-600 hover:bg-blue-800"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
