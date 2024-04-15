"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { get_accounts_by_user } from "../../api/account-service";
import AccountDialog from "./account-dialog";
import { account_status } from "../.././api/account-service";
import { FaWrench } from "react-icons/fa6";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

interface CardInfo {
  account: BankAccount;
  accountStatus: (account_id: string) => Promise<void>;
}

function SelectableCard({
  account,
  accountStatus,
  selectedCard,
  setSelectedCard,
}: {
  account: BankAccount;
  accountStatus: (account_id: string) => Promise<void>;
  selectedCard: CardInfo | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardInfo | null>>;
}) {
  const toggleSelection = () => {
    if (!selectedCard || selectedCard.account !== account) {
      setSelectedCard({ account, accountStatus });
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <TabsContent
      value={`${account.status ? "closed" : "open"}`}
      key={account.id}
    >
      <div key={account.id}>
        <Card
          className={`cursor-pointer ${
            selectedCard?.account === account
              ? " bg-blue-500 text-white"
              : "hover:bg-blue-200"
          }`}
          onClick={toggleSelection}
        >
          <CardContent className="p-4 grid">
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span
                className={`flex h-2 w-2 translate-y-1 rounded-full ${
                  account.status ? "bg-red-500" : "bg-green-500"
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
                    <p className="text-xl font-medium">${account.balance}</p>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-green-500 hover:text-green-800">
                        <FaWrench />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => accountStatus(account.id)}
                        >
                          {`${account.status ? "Open" : "Close"} Account`}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}

export default function Accounts() {
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);
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

  const accountStatus = async (account_id: string) => {
    try {
      const response = await account_status(account_id);
      fetchAccounts();
    } catch (error) {
      console.error("Error changing status:", error);
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
        <Tabs defaultValue="open" className="w-flex">
          <TabsList>
            <TabsTrigger value="open">Open Accounts</TabsTrigger>
            <TabsTrigger value="closed">Closed Accounts</TabsTrigger>
          </TabsList>
          <ScrollArea className="lg:h-[220px] h-[250px] w-flex rounded-md border">
            <div className="p-3 grid xl:grid-cols-2 lg:grid-cols-1 gap-3">
              {accounts && accounts.length > 0 ? (
                accounts.map((account) => (
                  <SelectableCard
                    account={account}
                    accountStatus={accountStatus}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                  />
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
        </Tabs>
      </CardContent>
    </Card>
  );
}
