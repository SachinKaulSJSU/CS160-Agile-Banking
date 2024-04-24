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

interface RecurringPayment {
  id: string;
  account: string;
  amount: GLfloat;
  frequency: string;
  receiver: string | null;
  timestamp: Date;
}

interface RecurringPaymentsList {
  recurrings: RecurringPayment[];
}

export default function RecurringPayments({
  recurrings,
}: RecurringPaymentsList) {
  // Function to format the timestamp
  const formatDetailedTimestamp = (timestamp: Date) => {
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

  const formatSimpleTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp);
    // Example: "April 18, 2024 12:30 PM"
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="flex-grow lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Recurring Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="lg:h-[296px] h-[250px] w-flex rounded-md border">
          <Accordion type="single" collapsible className="w-full">
            {recurrings && recurrings.length > 0 ? (
              recurrings
                .slice()
                .sort(
                  (a, b) =>
                    new Date(b.timestamp).getTime() -
                    new Date(a.timestamp).getTime()
                )
                .map((recurring) => (
                  <AccordionItem
                    key={recurring.id}
                    value={recurring.id}
                    className="w-full p-1 flex flex-col"
                  >
                    <AccordionTrigger className="border rounded-md px-3 py-2 flex justify-between border-violet-500">
                      <div className="flex items-center">
                        <div className="text-md sm:text-lg mr-2">
                          AB-{recurring.frequency.toUpperCase()} {recurring.id}
                        </div>
                        <div className="text-sm hidden xl:block">
                          {formatSimpleTimestamp(recurring.timestamp)}
                        </div>
                      </div>
                      <div className="p-2 text-md sm:text-lg border rounded-md">
                        ${recurring.amount}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                      {recurring.receiver !== "" && recurring.receiver ? (
                        <div>
                          <div>Recurring ID: {recurring.id}</div>
                          <div>
                            Time: {formatDetailedTimestamp(recurring.timestamp)}
                          </div>
                          <div>Sends to: {recurring.receiver.toUpperCase()}</div>
                        </div>
                      ) : (
                        <div>
                          <div>Transaction ID: {recurring.id}</div>
                          <div>
                            Time: {formatDetailedTimestamp(recurring.timestamp)}
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))
            ) : (
              <AccordionItem value="noTransactions" className="w-full p-1">
                <AccordionTrigger className="border border-violet-500 rounded-md px-3 py-2 justify-between">
                  <div className="text-lg">NO RECURRING PAYMENTS</div>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  Select an account or make a recurring payment
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
