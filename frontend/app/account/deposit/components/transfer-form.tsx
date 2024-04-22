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
import { transfer } from "../../../api/transaction-service";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

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

export default function TransferForm({ fetchAccounts, accounts }: Props) {
  const [accountID, setAccountID] = useState<string | null>();
  const [balance, setBalance] = useState<string>(" ");
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

  useEffect(() => {
    fetchAccounts();
  }, []);

  const submitTransfer = async () => {
    try {
      const transferAmount = parseFloat(amount);

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

      if (transferAmount > sendingAccountBalance) {
        throw new Error("Insufficient balance in sending account.");
      }

      if (isNaN(transferAmount) || transferAmount <= 0) {
        throw new Error("Invalid transfer amount.");
      }

      if (transferAmount > 1000000000) {
        throw new Error("Transfer amount is too large.");
      }

      // Assuming recipientID is set somewhere in your code
      const response = await transfer(transferAmount, accountID, recipientID);
      console.log(response.error)
      if (response.error){
        throw new Error("Backend error: " + response.error);
      }

      // Display success message
      toast({
        title: "Success! Transferred to recipient account.",
        description: `Amount: ${transferAmount}`,
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
                  ) : (
                    null
                  )
                )
              ) : (
                <SelectItem value="account_id" disabled>
                  No open bank accounts
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

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
              {accounts && accounts.length > 0 ? (
                accounts.map((account) =>
                  account.status === false && account.id !== accountID ? (
                    <SelectItem key={account.id} value={account.id}>
                      {account.type} {account.id} Balance: ${account.balance}
                    </SelectItem>
                  ) : (
                    null
                  )
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

        <Button type="submit" onClick={submitTransfer} className="bg-blue-600 hover:bg-blue-800">
          Submit
        </Button>
      </div>
    </div>
  );
}
