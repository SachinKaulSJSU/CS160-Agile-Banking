"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { enroll } from "../../api/user-service";
import { redirect } from 'next/navigation'


export default function EnrollForm() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
    } else {
      try {
        const response = await enroll(formData);
        if (response.success){
          redirect('/login')
        } else {
          
        }
      }
      catch {

      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-gray-900/10 pb-12 px-10">
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                  value={formData.username}
                  type="text"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  autoComplete="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  value={formData.password}
                  type="password"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  autoComplete="confirmPassword"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-base font-semibold leading-7 text-gray-900 mt-6">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="firstName"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="lastName"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                onChange={onChange}
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
                className="peer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                value={formData.email}
                type="email"
                onChange={onChange}
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                autoComplete="phone"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="phone"
                name="phone"
                value={formData.phone}
                type="text"
                onChange={onChange}
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:max-w-xs sm:text-sm sm:leading-6"
                id="country"
                value={formData.country}
                name="country"
                onChange={onChange}
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
              htmlFor="streetAddress"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                type="text"
                onChange={onChange}
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
                value={formData.city}
                type="text"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="state"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="state"
                name="state"
                value={formData.state}
                type="text"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="zip"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="zip"
                name="zip"
                value={formData.zip}
                type="text"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 gap-4">
          <button
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
            type="submit"
          >
            Enroll
          </button>
        </div>
      </div>
    </form>
  );
}
