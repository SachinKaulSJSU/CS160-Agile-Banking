import Header from "../components/header";
import Footer from "../components/footer";
import DepositContainer from "./components/deposit-container";

export default function Deposit() {
  return (
    <main>
      <Header />
        <DepositContainer />
      <Footer />
    </main>
  );
}