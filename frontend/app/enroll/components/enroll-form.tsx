export default function EnrollForm() {
  return (
    <form>
      <div className="border-b border-gray-900/10 pb-12 px-10">
        <div className="sm:col-span-4">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="username"
          >
            Username
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                id="username"
                name="username"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="username"
          >
            Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                id="username"
                name="username"
                type="text"
              />
            </div>
          </div>
        </div>

        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="first-name"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="first-name"
                name="first-name"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="last-name"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="last-name"
                name="last-name"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="country"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                id="country"
                name="country"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="street-address"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="street-address"
                name="street-address"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="city"
            >
              City
            </label>
            <div className="mt-2">
              <input
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="city"
                name="city"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="region"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="region"
                name="region"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="postal-code"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="postal-code"
                name="postal-code"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
