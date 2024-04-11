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
import React, { useState, useEffect } from "react";
import  { create_account }  from "../../api/account-service";


interface CardInfo {
  title: string;
  picture: string;
}

interface Refresh {
  refreshAccounts: ()=>Promise<void>;
}

function SelectableCard({
  title,
  picture,
  selectedCard,
  setSelectedCard,
}: {
  title: string;
  picture: string;
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
      setSelectedCard({ title, picture });
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <Card
      className={`cursor-pointer ${
        selected ? "shadow-2xl bg-slate-100" : "hover:shadow-xl"
      } ${selected ? "selected" : ""}`}
      onClick={toggleSelection}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex aspect-square items-center justify-center">
        <img className="w-auto" src={picture} alt={title} />
      </CardContent>
    </Card>
  );
}

export default function AccountDialog({ refreshAccounts } : Refresh) {
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);

  const submitSelection = async() => {
    if (selectedCard) {
      await create_account(selectedCard.title);
      refreshAccounts();
    } else {
      alert("Please select an option before submitting.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-800 p-5">
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

        <div className="flex justify-between">
          <SelectableCard
            title="Checking"
            picture="./checking.png"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <SelectableCard
            title="Savings"
            picture="./savings.png"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
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
