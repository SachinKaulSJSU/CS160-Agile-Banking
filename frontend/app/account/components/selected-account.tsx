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
import Link from "next/link";

interface BankAccount {
  id: string;
  balance: string;
  type: string;
  status: boolean;
}

export default function SelectedAccount() {

  return (
    <Card className="lg:flex-grow md:w-[500px] sm:w-flex lg:h-[380px] sm:h-[250px]">
      <CardHeader>
        <CardTitle>Selected Account</CardTitle>
      </CardHeader>
      <CardContent className="items-center justify-center">
        <h1>
            
        </h1>
       
      </CardContent>
    </Card>
  );
}
