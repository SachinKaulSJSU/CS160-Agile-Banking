"use client";
import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
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
import { deposit } from "../../../api/transaction-service"
import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const formSchema = z.object({
//   account: z.string(),
//   amount: z.string().refine(
//     (value) => {
//       const regex = /^\d+(\.\d{1,2})?$/;
//       return regex.test(value);
//     },
//     {
//       message: "Invalid deposit amount",
//     }
//   ),
// });

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function DepositForm() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [accountID, setAccountID] = useState<string>(" ");
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
    console.log(account_id)
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const submitSelection = async () => {
    try {
      const depositAmount = parseFloat(amount);
      if (depositAmount > 1000000000) {
        throw new Error("Deposit is too large.");
      }
      await deposit(depositAmount, accountID)
      toast({
        title: "Success! Deposited into account.",
        description: "Amount: " + depositAmount,
        variant: "constructive",
      });
    } catch (err) {
      toast({
        title: "Uh oh! Unable to depost.",
        description: "" + err,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-3">
      <Toaster />
      <div>
        <p className="text-sm">
          Select Account
        </p>
        <Select name="account" onValueChange={handleAccountChange} defaultValue="">
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
                <SelectItem value="account_id">
                  No open bank accounts
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="text-sm">
          Deposit Amount
        </p>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Initial Deposit"
          value={amount}
          onChange={handleChange}
          step="200"
        />
      </div>
      <Button type="submit" onClick={submitSelection}>
        Submit
      </Button>
    </div>
  );
}
