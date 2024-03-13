import LoginForm from "../../components/login-form";

export default function LoginCard() {
  return (
    <div className="lg:max-w-lg lg:mx-auto ms-auto justify-center">
      <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="block text-2xl font-semibold text-gray-800">Log in</h1>
          <p className="mt-2 text-sm text-gray-600">
            Log in to manage accounts
          </p>
        </div>

        <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
          Welcome Back
        </div>
        <div className="w-100">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
