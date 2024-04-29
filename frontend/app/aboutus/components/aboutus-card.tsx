export default function AboutUsCard() {
  return (
    <div className="lg:max-w-none lg:mx-auto ms-auto justify-center">
      <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="block text-3xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent uppercase">About Us </h1>
          <p className="mt-2 text-sm text-gray-600">
            @Agile Banking
          </p>
        </div>

        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Our Mission
        </div>
        <div className="w-100 text-center">
          <div className="lg:max-w-fit lg:mx-auto ms-auto justify-center">
            <div className="p-4 sm:p-7 flex flex-col bg-white border border-violet-200 rounded-2xl shadow-lg shadow-indigo-400/40">
              <p className="text-lg bold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent uppercase">At Agile Banking, <br></br>we strive to revolutionize the financial landscape by embracing <br></br>adaptability, innovation, and customer-centricity.</p>
            </div>
          </div>
          <br></br>
          <div className="lg:max-w-fit lg:mx-auto ms-auto justify-center">
            <div className="p-4 sm:p-7 flex flex-col">
              <p>Our mission is to empower individuals and businesses with seamless, personalized financial solutions that evolve alongside their needs.
                Through agile methodologies, cutting-edge technology, and a relentless commitment to excellence, we aim to deliver superior value, efficiency, and trust in every interaction.
                Together, we're building a future where banking is not just a service, but a dynamic partnership that fosters growth, prosperity, and financial well-being for all.
              </p>
            </div></div>

        </div>

        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Our Team
        </div>
        <div className="w-100">
          <div className="lg:max-w-none lg:mx-auto lg:min-w-125 ms-auto justify-center">
            <div className="items-center text-lg text-center font-bold uppercase underline">Group 1</div>
            <div className="p-4 sm:p-7 flex flex-wrap gap-4 justify-center justify-around">
              <div>
                <img className="size-20 min-w-20 object-contain p-2 rounded-lg ring-2 ring-violet-600 place-self-center" src="/agile_logo_v1.png" alt="" />
                <p className="text-center text-violet-600 uppercase">Irene</p>
              </div>
              <div>
                <img className="size-20 min-w-20 object-contain p-2 rounded-lg ring-2 ring-cyan-400 place-self-center" src="/agile_logo_v1.png" alt="" />
                <p className="text-center text-cyan-400 uppercase">Brian</p>
              </div>
              <div>
                <img className="size-20 min-w-20 object-contain p-2 rounded-lg ring-2 ring-orange-500 place-self-center" src="/agile_logo_v1.png" alt="" />
                <p className="text-center text-orange-500 uppercase">Sachin</p>
              </div>
              <div>
                <img className="size-20 min-w-20 object-contain p-2 rounded-lg ring-2 ring-lime-500 place-self-center" src="/agile_logo_v1.png" alt="" />
                <p className="text-center text-lime-500 uppercase">Alicia</p>
              </div>
              <div>
                <img className="size-20 min-w-20 object-contain p-2 rounded-lg ring-2 ring-pink-500 place-self-center" src="/agile_logo_v1.png" alt="" />
                <p className="text-center text-pink-500 uppercase">Nathan</p>
              </div>
            </div></div>
        </div>


        <div className="py-5 pt-10 flex items-center text-lg text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          More Policies
        </div>
        <div className="lg:max-w-fit lg:mx-auto mx-auto justify-center">
          <div className="p-4 sm:p-7 flex flex-col">
            <p> For more information on our policies, see our <a href="../terms&conditions" className="text-blue-500 transition hover:opacity-75 underline">Terms & Conditions</a>. </p>
            <br></br>
            <p> We are not responsible for keeping your information safe. Please see our <a href="../privacypolicy" className="text-blue-500 transition hover:opacity-75 underline">Privacy Policy</a> for more information. </p>
            <br></br>
            <p> For more information on how we use cookies, see our <a href="../cookies" className="text-blue-500 transition hover:opacity-75 underline">Cookies Policy</a>. </p>
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