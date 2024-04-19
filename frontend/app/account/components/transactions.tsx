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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from "react";

interface Transaction {
  id: string;
  account: string;
  amount: GLfloat;
  ttype: string;
  timestamp: Date;
}

interface TransactionsList {
  transactions: Transaction[];
}

export default function Transactions({ transactions }: TransactionsList) {
  // Function to format the timestamp
  const formatTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp);
    // Example: "April 18, 2024 12:30 PM"
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <Card className="flex-grow lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="lg:h-[700px] md:h-[575px] h-[400px] w-flex rounded-md border">
          <Accordion type="single" collapsible className="w-full">
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction) => (
                <AccordionItem key={transaction.id} value={transaction.id} className="w-full p-1 ">
                  <AccordionTrigger className={`border rounded-md px-3 py-2 justify-between ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'}`}>
                    <div className="text-lg">
                      AGILE-{transaction.ttype.toUpperCase()} {transaction.id}
                    </div>
                    <div>{formatTimestamp(transaction.timestamp)}</div>
                    <div className={`p-2 text-lg ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'} border rounded-md`}>
                      {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    No additional Information
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <AccordionItem value="noTransactions" className="w-full p-1">
                <AccordionTrigger className="border border-blue-500 rounded-md px-3 py-2 justify-between">
                  <div className="text-lg">NO TRANSACTIONS FOUND</div>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  Select an account or make a transaction
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
