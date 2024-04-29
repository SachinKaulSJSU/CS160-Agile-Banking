export default function PrivacyCard() {
  return (
    <div className="lg:max-w-none lg:mx-auto ms-auto justify-center">
      <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="block text-3xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent uppercase">Privacy Policy </h1>
          <p className="mt-2 text-sm text-gray-600">
            @Agile Banking
          </p>
        </div>

        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Our Guarantee
        </div>
        <div className="w-100 text-center">
          <div className="lg:max-w-fit lg:mx-auto ms-auto justify-center">
            <div className="p-4 sm:p-7 flex flex-col bg-white border border-violet-200 rounded-2xl shadow-lg shadow-indigo-400/40">
              <div className="text-lg bold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent uppercase lg:px-20">
                <p>At Agile Banking,</p><p className="font-bold text-2xl"> we will keep your money safe,</p> <p>even from yourself.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Disclaimers
        </div>
        <div className="lg:max-w-fit lg:mx-auto mx-auto justify-center">
          <div className="p-4 sm:p-7 flex flex-col">
            <p> We are not responsible for keeping your personal information safe.
              Any information you provide is voluntary, and may be subject to identity theft. </p>
            <br></br>
            <p> For more information on how we use cookies, see our <a href="../cookies" className="text-blue-500 transition hover:opacity-75 underline">cookies policy</a>. </p>
          </div>
        </div>

        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Sign Up
        </div>
        <p className="text-center block text-3xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent uppercase"> Ready to sign up? Click to enroll now! </p>
        <br></br>
        <a href="/enroll"
          className="w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold uppercase rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Enroll
        </a>
      </div>
    </div>
  );
}