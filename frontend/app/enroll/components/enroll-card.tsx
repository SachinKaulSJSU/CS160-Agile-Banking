import EnrollForm from './enroll-form'

export default function EnrollCard() {
    return (

        <div className="justify-center">
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="block text-3xl font-semibold text-gray-800 bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
              Let's set up your online access
            </h1>                            
            <p className="mt-2 text-sm text-gray-600">
              First, we need to set up your account
            </p>
          </div>
          <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            AGILE BANK
          </div>
          <EnrollForm />
        </div>
        </div>
    );
  }
