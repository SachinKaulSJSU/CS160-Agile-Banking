export default function TermsCard() {
    return (
      <div className="lg:max-w-none lg:mx-auto ms-auto justify-center">
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800">Terms & Conditions </h1>
            <p className="mt-2 text-sm text-gray-600">
              Agile Banking
            </p>
          </div>
  
          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Our Guarantee
          </div>
          <div className="w-100">
          At Agile Banking, we will keep your money safe, even from yourself. 
          </div>
          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Disclaimers
          </div>
          <div className="w-100">
            <p> We are not FDIC insured. </p> 
            <br></br>
            <p> You might never see your money again. </p> 
            <br></br>
            <p> We are not responsible for keeping your information safe. Please see our <a href="../privacypolicy" className="text-blue-500 transition hover:opacity-75 underline">privacy policy</a> for more information. </p>
            <br></br>
            <p> The $0.02 bonus offer is only valid on deposits of $1,000,000,000 or more, and the account must maintain a balance of at least $700,000 at all times for 3 months.</p>
            <br></br>
            <p> For more information on how we use cookies, see our <a href="../cookies" className="text-blue-500 transition hover:opacity-75 underline">cookies policy</a>. </p>
          </div>
        </div>
      </div>
    );
  }