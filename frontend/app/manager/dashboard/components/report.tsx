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
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState, useEffect, ChangeEvent } from "react";
import Transactions from "./transactions";
import Recurrings from "./recurrings";

interface Transaction {
  id: string;
  account: string;
  amount: GLfloat;
  ttype: string;
  receiver: string | null;
  timestamp: Date;
}

interface Address {
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  address: Address | null;
}

interface RecurringPayment {
  id: string;
  account: string;
  amount: GLfloat;
  frequency: string;
  receiver: string | null;
  timestamp: Date;
}

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}
interface Props {
  transactions: Transaction[];
  recurrings: RecurringPayment[];
  account: BankAccount | undefined;
  user: User | undefined;
}

export default function Report({
  transactions,
  recurrings,
  account,
  user,
}: Props) {
  const [accountID, setAccountID] = useState<string>("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountID(e.target.value);
  };

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[600px] max-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={60}>
            <div className="flex flex-grow h-full p-3">
              {account ? (
                <ul>
                  <li>
                    <span className="font-semibold text-md">
                      Account Information
                    </span>
                  </li>
                  <li className="text-sm">Account ID: {account.id}</li>
                  <li className="text-sm">Account Type: {account.type}</li>
                  <li className="text-sm">
                    Status: {account.status ? "Closed" : "Open"}
                  </li>
                  <li className="font-semibold text-lg">
                    Balance: ${account.balance}
                  </li>
                </ul>
              ) : null}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div className="flex flex-grow h-full p-3">
              {user ? (
                <ul>
                  <li>
                    <span className="font-semibold text-md">
                      User Information
                    </span>
                  </li>
                  <li className="text-sm">First Name: {user.first_name.toUpperCase()}</li>
                  <li className="text-sm">Last Name: {user.last_name.toUpperCase()}</li>
                  <li className="text-sm">Email: {user.email}</li>
                  {user.address && user.address.city ? (
                    <li className="text-sm">Address: {user.address.street_address.toUpperCase()}, {user.address.city.toUpperCase()}, {user.address.state.toUpperCase()} {user.address.postal_code}</li>
                  ) : null}
                </ul>
              ) : null}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={75}>
            <div className="flex flex-grow h-full p-1">
              <Transactions transactions={transactions} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex flex-grow h-full p-1">
              <Recurrings recurrings={recurrings} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
