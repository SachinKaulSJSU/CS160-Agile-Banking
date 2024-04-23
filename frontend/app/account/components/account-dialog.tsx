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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { create_account } from "../../api/account-service";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { FaMoneyCheck, FaPiggyBank } from "react-icons/fa6";
import { Input } from "@/components/ui/input";


interface CardInfo {
  title: string;
}

interface Refresh {
  refreshAccounts: () => Promise<void>;
}

function SelectableCard({
  title,
  selectedCard,
  setSelectedCard,
}: {
  title: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardInfo | null>>;
  selectedCard: CardInfo | null;
}) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Check if this card is the selected card and set the selected state accordingly
    setSelected(selectedCard?.title === title);
  }, [selectedCard, title]);

  const toggleSelection = () => {
    setSelected(!selected);
    if (!selected) {
      setSelectedCard({ title });
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <Card
      className={`w-[180px] cursor-pointer ${
        selected ? "bg-blue-500 text-white" : "hover:bg-blue-200"
      } ${selected ? "selected" : ""}`}
      onClick={toggleSelection}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        {title === "Savings" ? (
          <FaPiggyBank className="w-10 h-10" />
        ) : (
          <FaMoneyCheck className="w-10 h-10" />
        )}
      </CardContent>
    </Card>
  );
}

export default function AccountDialog({ refreshAccounts }: Refresh) {
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);
  const [balance, setBalance] = useState<string>("");
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === '') {
      setBalance(inputValue);
    }
  };

  const submitSelection = async () => {
    if (selectedCard) {
      try {
        const initialBalance = parseFloat(balance);
        if (initialBalance < 200){
          throw new Error("Initial deposit must be at least 200.");
        }
        if (initialBalance > 1000000000){
          throw new Error("Initial deposit is to large.");
        }
        await create_account(selectedCard.title, initialBalance);
        refreshAccounts();
        toast({
          title: "Success! Opened bank account.",
          description: "A bank account has been opened.",
          variant: "constructive",
        });
      } catch (err) {
        toast({
          title: "Uh oh! Unable to open bank account.",
          description: "" + err,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Uh oh! Unable to open bank account.",
        description: "There was a problem opening a bank account.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <Toaster />
      <DialogTrigger asChild>
        <Button className="flex span bg-blue-600 hover:bg-blue-800 p-5 w-[100%]">
          Open Bank Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Open Bank Account</DialogTitle>
          <DialogDescription>
            Select a Checking or Savings account
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-flow-col">
          <SelectableCard
            title="Checking"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <SelectableCard
            title="Savings"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </div>

        <div>
          <label className="text-sm" htmlFor="balance">Inital deposit must be at least $200.</label>
          <Input
            id="balance"
            name="balance"
            type="number"
            placeholder="Initial Deposit"
            value={balance}
            onChange={handleChange}
            step="200"
          />
        </div>
        <DialogFooter className="p-3">
          <DialogClose asChild>
            
            <Button
              className="bg-blue-600 hover:bg-blue-800"
              type="submit"
              onClick={submitSelection}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
