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
import AccountDialog from "./account-dialog";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function Accounts() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <Card className="lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
      </CardHeader>
      <CardContent className="items-center justify-center">
        <ScrollArea className="lg:h-[300px] h-[250px] w-flex rounded-md border">
          <div className="p-3 grid xl:grid-cols-2 lg:grid-cols-1 gap-3">
            {accounts && accounts.length > 0 ? (
              accounts.map((account) => (
                <div key={account.id}>
                  <Card className="cursor-pointer hover:shadow-lg">
                    <CardContent className="p-4 grid">
                      <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span
                          className={`flex h-2 w-2 translate-y-1 rounded-full ${
                            account.status ? "bg-red-500" : "bg-blue-500"
                          }`}
                        />

                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-medium leading-none">
                                Agile Bank {account.type} {account.id}
                              </p>
                              <p className="text-md font-medium leading-none">
                                Current Balance
                              </p>
                              <p className="text-xl font-medium">
                                ${account.balance}
                              </p>
                            </div>
                            <div>
                              <p className="font-light text-sm ">
                                Status: {account.status ? "Closed" : "Open"}
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
                  <CardTitle>No Bank Account Found</CardTitle>
                  <CardDescription>
                    Open a bank account to continue.
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </ScrollArea>
        <div className="flex items-center justify-center">
          <AccountDialog refreshAccounts={fetchAccounts} />
        </div>
      </CardContent>
    </Card>
  );
}
