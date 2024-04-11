export default function CookiesCard() {
    return (
      <div className="lg:max-w-none lg:mx-auto ms-auto justify-center">
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800">Cookies Policy </h1>
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
            <p> By using this site, you consent to the use of cookies. </p>
            <br></br>
            <p> We are not responsible for keeping your information safe. Please see our <a href="../privacypolicy" className="text-blue-500 transition hover:opacity-75 underline">privacy policy</a> for more information. </p>
          </div>
        </div>
      </div>
    );
  }