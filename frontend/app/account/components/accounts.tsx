import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `Account ${a.length - i}`
  )

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
        <Button className="bg-blue-600 p-5">Open a Account</Button>
      </CardFooter>
    </Card>
  );
}
