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
  account_id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function Accounts() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
    fetchAccounts();
  }, []);

  return (
    <Card className="lg:w-[500px] md:w-[400px] sm:w-flex">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>Open a account dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80 w-flex rounded-md border">
          <div className="p-3">
            {
              accounts && accounts.length > 0 ? (
                accounts.map((account) => (
                  <div key={account.account_id}>
                    <Link href="/customerdash">
                      <Card className="cursor-pointer hover:shadow-lg">
                        <CardContent className="p-4 grid">
                          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span
                              className={`flex h-2 w-2 translate-y-1 rounded-full ${
                                account.status ? "bg-blue-500" : "bg-red-500"
                              }`}
                            />

                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <div>
                                  <p className="text-lg font-medium leading-none">
                                    {account.type} Account
                                  </p>
                                  <p className="font-light">
                                    Status: {account.status ? "Open" : "Closed"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-lg font-medium leading-none">
                                    Current Balance
                                  </p>
                                  <p className="text-2xl font-medium">
                                    ${account.balance}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                    <Separator className="my-5" />
                  </div>
                ))
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Searching for accounts...</CardTitle>
                  </CardHeader>
                </Card>
              ) // Do not render anything if accounts are empty initially
            }

            {!loading &&
              accounts.length === 0 && ( // Render No Bank Account Found card if not loading and accounts are empty
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
      </CardContent>
      <CardFooter className="flex justify-center">
        <AccountDialog />
      </CardFooter>
    </Card>
  );
}
