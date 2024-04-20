"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import ExternalForm from "./external-form"


export default function PaymentsCard() {

  return (
    <Card className="flex-grow lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>External or Internal Payment</CardTitle>
        <CardDescription>Make an external payment or an internal payment to another AGILE account.</CardDescription>
      </CardHeader>
      <CardContent>
          <ExternalForm />
      </CardContent>
    </Card>
  );
}
