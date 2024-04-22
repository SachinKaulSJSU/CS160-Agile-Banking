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
import { internal_payment } from "../../../api/transaction-service";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { get_accounts_by_username } from "../../../api/account-service";

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

export default function InternalForm({ fetchAccounts, accounts }: Props) {
  const [recipientAccounts, setRecipientAccounts] = useState<BankAccount[]>([]);
  const [accountID, setAccountID] = useState<string | null>();
  const [balance, setBalance] = useState<string>(" ");
  const [receiver, setReceiver] = useState<string>("");
  const [recipientID, setRecipientID] = useState<string | null>();
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handleAccountChange = (account_id: string) => {
    if (account_id == recipientID) {
        setRecipientID("");
    }
    setAccountID(account_id);
    console.log(account_id);
  };

  const handleRecipientChange = (account_id: string) => {
    setRecipientID(account_id);
    console.log(account_id);
  };

  const handleReceiverChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
  };

  const fetchRecipientAccounts = async (username: string | null) => {
    try {
      const response = await get_accounts_by_username(username);
      
      setRecipientAccounts(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipient accounts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const findAccounts = async () => {
    try {
      if (!receiver) {
        throw new Error("Please enter a username");
      }
      const response = fetchRecipientAccounts(receiver);

      // Display success message
      toast({
        title: "Searching for user...",
        description: "Username: " + receiver,
        variant: "constructive",
      });
    } catch (err) {
      toast({
        title: "Uh oh! Unable to find accounts for user.",
        description: "" + err,
        variant: "destructive",
      });
    }
  };

  const internalPayment = async () => {
    try {
      const paymentAmount = parseFloat(amount);

      if (!accountID) {
        throw new Error("Please select a sending account.");
      }

      if (!recipientID) {
        throw new Error("Please select a recipient account.");
      }

      const sendingAccount = accounts.find(
        (account) => account.id === accountID
      );

      if (!sendingAccount) {
        throw new Error("Sending account not found.");
      }

      const sendingAccountBalance = parseFloat(sendingAccount.balance);

      if (paymentAmount > sendingAccountBalance) {
        throw new Error("Insufficient balance in sending account.");
      }

      if (isNaN(paymentAmount) || paymentAmount <= 0) {
        throw new Error("Invalid transfer amount.");
      }

      if (paymentAmount > 1000000000) {
        throw new Error("Transfer amount is too large.");
      }

      // Assuming recipientID is set somewhere in your code
      const response = await internal_payment(paymentAmount, accountID, recipientID);
      console.log(response.error);
      if (response.error) {
        throw new Error("Backend error: " + response.error);
      }

      // Display success message
      toast({
        title: "Success! Payment sent to recipient account.",
        description: `Amount: ${paymentAmount}`,
        variant: "constructive",
      });

      // Fetch accounts again to update the list
      fetchAccounts();
    } catch (err) {
      toast({
        title: "Uh oh! Unable to transfer.",
        description: "" + err,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Toaster />
      <div className="space-y-3 border border-zinc-200 rounded p-4">
        <p className="text-sm">Select Sending Account</p>
        <Select
          name="account"
          onValueChange={handleAccountChange}
          defaultValue=""
        >
          <SelectTrigger>
            <SelectValue placeholder="Select sending account" />
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
                <SelectItem value="account_id" disabled>
                  No open bank accounts
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        <p className="text-sm">Internal Recipient</p>
        <Input
          id="receiver"
          name="receiver"
          type="text"
          placeholder="Enter external recipient"
          value={receiver}
          onChange={handleReceiverChange}
        />
        <Button
          type="submit"
          onClick={findAccounts}
          className="bg-blue-600 hover:bg-blue-800"
        >
          Find Accounts
        </Button>

        <p className="text-sm">Select Recipient Account</p>
        <Select
          name="account"
          onValueChange={handleRecipientChange}
          defaultValue=""
          disabled={accountID === ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select recipient account" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Bank Accounts</SelectLabel>
              {recipientAccounts && recipientAccounts.length > 0 ? (
                recipientAccounts.map((account) =>
                  account.status === false && account.id !== accountID ? (
                    <SelectItem key={account.id} value={account.id}>
                      {account.type} {account.id}
                    </SelectItem>
                  ) : null
                )
              ) : (
                <SelectItem value="account_id" disabled>
                  No open bank accounts
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        <p className="text-sm">Transfer Amount</p>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
          step="200"
        />

        <Button
          type="submit"
          onClick={internalPayment}
          className="bg-blue-600 hover:bg-blue-800"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
