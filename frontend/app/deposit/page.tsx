import Header from "../components/header";
import Footer from "../components/footer";
import DepositContainer from "./components/deposit-container";

//following this tutorial???? https://www.bezkoder.com/upload-image-react-typescript/

export default function Deposit() {
  return (
    <main>
      <Header />
        <DepositContainer />
      <Footer />
    </main>
  );
}