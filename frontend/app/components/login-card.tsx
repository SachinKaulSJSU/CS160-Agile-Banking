export default function HeroCard() {
    return (
      <form>
        <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
          <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
            <div className="text-center">
              <h1 className="block text-2xl font-semibold text-gray-800">
                Log in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Sign up here
                </a>
              </p>
            </div>
  
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
              Welcome Back
            </div>
  
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-first-name"
                      placeholder="John"
                      type="text"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-first-name"
                    >
                      First name
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-last-name"
                      placeholder="Doe"
                      type="text"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-last-name"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-email"
                      placeholder="you@email.com"
                      type="email"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-email"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-company-name"
                      placeholder="Preline"
                      type="text"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-company-name"
                    >
                      Company name
                    </label>
                  </div>
                </div>
                <div className="relative col-span-full">
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-new-password"
                      placeholder="********"
                      type="password"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-new-password"
                    >
                      New password
                    </label>
                  </div>
                  <div
                    className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                    id="hs-strong-password-popover"
                  >
                    <div
                      className="flex mt-2 -mx-1"
                      data-hs-strong-password='{                          "target": "#hs-hero-signup-form-floating-input-new-password",                          "hints": "#hs-strong-password-popover",                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",                          "mode": "popover"                        }'
                      id="hs-strong-password-in-popover"
                    ></div>
                    <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                      Your password must contain:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-500">
                      <li
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        data-hs-strong-password-hints-rule-text="min-length"
                      >
                        <span className="hidden" data-check="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        Minimum number of characters is 6.
                      </li>
                      <li
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        data-hs-strong-password-hints-rule-text="lowercase"
                      >
                        <span className="hidden" data-check="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        Should contain lowercase.
                      </li>
                      <li
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        data-hs-strong-password-hints-rule-text="uppercase"
                      >
                        <span className="hidden" data-check="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        Should contain uppercase.
                      </li>
                      <li
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        data-hs-strong-password-hints-rule-text="numbers"
                      >
                        <span className="hidden" data-check="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        Should contain numbers.
                      </li>
                      <li
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        data-hs-strong-password-hints-rule-text="special-characters"
                      >
                        <span className="hidden" data-check="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
                          <svg
                            className="flex-shrink-0 size-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        Should contain special characters.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="relative">
                    <input
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600                      focus:pt-6                      focus:pb-2                      [&:not(:placeholder-shown)]:pt-6                      [&:not(:placeholder-shown)]:pb-2                      autofill:pt-6                      autofill:pb-2"
                      id="hs-hero-signup-form-floating-input-current-password"
                      placeholder="********"
                      type="password"
                    />
                    <label
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none                        peer-focus:text-xs                        peer-focus:-translate-y-1.5                        peer-focus:text-gray-500                        peer-[:not(:placeholder-shown)]:text-xs                        peer-[:not(:placeholder-shown)]:-translate-y-1.5                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      htmlFor="hs-hero-signup-form-floating-input-current-password"
                    >
                      Current password
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center">
                <div className="flex">
                  <input
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                </div>
                <div className="ms-3">
                  <label
                    className="text-sm dark:text-white"
                    htmlFor="remember-me"
                  >
                    I accept the{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="submit"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
  