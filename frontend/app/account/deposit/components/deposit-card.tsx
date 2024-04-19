import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card";
import DepositForm from "./deposit-form";


export default function DepositCard() {
  
  
  return (
    <Card className="flex-grow file:lg:flex-grow md:w-[500px] sm:w-flex">
      <CardHeader>
        <CardTitle>Manage Funds</CardTitle>
      </CardHeader>
      <CardContent>
        <DepositForm />
      </CardContent>
    </Card>
  );
}
