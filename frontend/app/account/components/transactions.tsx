"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { get_accounts_by_user } from "../../api/account-service";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAccounts = async () => {
    try {
      const response = await get_accounts_by_user();
      setTransactions(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <Card className="lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="lg:h-[700px] md:h-[575px] h-[400px] w-flex rounded-md border">
          <div className="p-3 grid grid-cols-1 gap-3">
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction) => (
                <div key={transaction.id}>
                    <Card className="cursor-pointer hover:shadow-lg">
                      <CardContent className="p-4 grid">
                        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                          <span
                            className={`flex h-2 w-2 translate-y-1 rounded-full ${
                                transaction.status ? "bg-red-500" : "bg-blue-500"
                            }`}
                          />

                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-medium leading-none">
                                  Agile Bank {transaction.type} {transaction.id}
                                </p>
                                <p className="text-sm font-medium leading-none">
                                  Current Balance
                                </p>
                                <p className="text-sm font-medium">
                                  ${transaction.balance}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                </div>
              ))
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Transactions Found</CardTitle>
                  <CardDescription>
                    You have no transaction history.
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
