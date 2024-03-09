export default function HeroCard() {
  return (
    <form>
      <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="block text-2xl font-semibold text-gray-800">
              Log in
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Log in to manage accounts
            </p>
          </div>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
            Welcome Back
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-full">
                <div>
                  <input
                    className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-gray-300 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 border-gray-700 text-gray-600 focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                    id="hero-login-form-floating-input-username"
                    placeholder="username"
                    type="text"
                  />
                  <label
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-600 peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                    htmlFor="hs-hero-signup-form-floating-input-new-password"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div className="col-span-full">
                <div className="relative">
                  <input
                    className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-gray-300 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 border-gray-700 text-gray-600 focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                    id="hero-login-form-floating-input-password"
                    placeholder="********"
                    type="password"
                  />
                  <label
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-600 peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                    htmlFor="hs-hero-signup-form-floating-input-current-password"
                  >
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-4">
              <button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                type="submit"
              >
                Log in
              </button>

              <a
                className="button w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Enroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
