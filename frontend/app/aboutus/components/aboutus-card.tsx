export default function AboutUsCard() {
    return (
      <div className="lg:max-w-lg lg:mx-auto ms-auto justify-center">
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
            <h1>Group 1</h1> 
            <p>Irene</p>
            <p>Brian</p>
            <p>Sachin</p>
            <p>Alicia</p>
            <p>Nathan</p>
          </div>
        </div>
      </div>
    );
  }