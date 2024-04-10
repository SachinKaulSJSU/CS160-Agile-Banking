"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { deposit } from "../../api/transaction-service";

export default function DepositForm() {
  const [formData, setFormData] = useState({
    amount: 0
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.amount <= 0) {
      console.error("Please enter a valid number");
    } else {
      deposit(formData);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-gray-900/10 pb-12 px-10">
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="amount"
            >
              Amount
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  autoComplete="amount"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  type="int"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          
        </div>
        
        <div className="grid grid-cols-1 mt-5 gap-4">
          <button
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
            type="submit"
          >
            Deposit
          </button>
        </div>
      </div>
    </form>
  );
}