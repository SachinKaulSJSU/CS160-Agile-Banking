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
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `Account ${a.length - i}`
);

export default function Accounts() {
  return (
    <Card className="lg:w-[500px] md:w-[400px] sm:w-flex">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>Open a account dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72 w-flex rounded-md border">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-5" />
              </>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-800 p-5">
              Open a Account
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Open Bank Account</DialogTitle>
              <DialogDescription>
                Select a Checking or Savings account
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className="bg-blue-600 hover:bg-blue-800" type="submit">
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
