"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState, useEffect, ChangeEvent } from "react";

interface Props {
  selectedAccount: (account_id: string | null) => Promise<void> | void;
}

export default function DashboardCard({ selectedAccount }: Props) {
  const [accountID, setAccountID] = useState<string>("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountID(e.target.value);
  };
  const handleSubmit = async () => {
    selectedAccount(accountID);
  };
  return (
    <Card className="flex-grow lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Generate Report</CardTitle>
        <CardDescription>
          Search via account ID to generate a report.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="accountid">Search Account</Label>
        <div className="relative ml-auto flex-1 md:grow-0">
          <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            name="accountid"
            id="accountid"
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8"
            onChange={handleSearchChange}
            value={accountID}
          ></Input>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="flex flex-grow bg-blue-600 hover:bg-blue-800" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </CardFooter>
    </Card>
  );
}
