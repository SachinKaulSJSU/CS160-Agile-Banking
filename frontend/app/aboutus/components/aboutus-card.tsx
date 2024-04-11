export default function AboutUsCard() {
    return (
      <div className="lg:max-w-none lg:mx-auto ms-auto justify-center">
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800">About Us </h1>
            <p className="mt-2 text-sm text-gray-600">
              Agile Banking
            </p>
          </div>
  
          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Our Mission
          </div>
          <div className="w-100">
          At Agile Banking, we strive to revolutionize the financial landscape by embracing adaptability, innovation, and customer-centricity. Our mission is to empower individuals and businesses with seamless, personalized financial solutions that evolve alongside their needs. Through agile methodologies, cutting-edge technology, and a relentless commitment to excellence, we aim to deliver superior value, efficiency, and trust in every interaction. Together, we're building a future where banking is not just a service, but a dynamic partnership that fosters growth, prosperity, and financial well-being for all.
          </div>
          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Our Team
          </div>
          <div className="w-100">
            <div className="flex items-center text-xs text-black-400 uppercase underline">Group 1</div> 
            <p>Irene</p>
            <p>Brian</p>
            <p>Sachin</p>
            <p>Alicia</p>
            <p>Nathan</p>
          </div>


          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            More Policies
          </div>
          <p> For more information on our policies, see our <a href="../terms&conditions" className="text-blue-500 transition hover:opacity-75 underline">Terms & Conditions</a>. </p>
          <br></br>
          <p> We are not responsible for keeping your information safe. Please see our <a href="../privacypolicy" className="text-blue-500 transition hover:opacity-75 underline">privacy policy</a> for more information. </p>
          <br></br>
          <p> For more information on how we use cookies, see our <a href="../cookies" className="text-blue-500 transition hover:opacity-75 underline">cookies policy</a>. </p>

          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Sign Up
          </div>
            <p> Ready to sign up? Click to enroll now! </p>
            <br></br>
            <a href="/enroll" 
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Enroll
            </a>

        </div>
      </div>
    );
  }