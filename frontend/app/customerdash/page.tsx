import React from 'react';
import Header from "./components/header";
import Footer from "../components/footer"; // Make sure this path is correct

export default function Dashboard() {
  // Hardcoded customer name for demonstration
  // Replace this with dynamic data fetching logic as per your app's requirements
  const customerName = "John Doe";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-6 bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            {/* Displaying the customer's name */}
            <h2 className="text-xl text-gray-700 mt-4">Hello, {customerName}</h2>
          </div>
        </div>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Account Summary */}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg font-semibold text-gray-700">Account Summary</h2>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Checking</span>
                    <span className="text-sm font-semibold">$1,245.50</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">Savings</span>
                    <span className="text-sm font-semibold">$5,432.20</span>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
                {/* Transactions list here */}
              </div>

              {/* Quick Actions */}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg font-semibold text-gray-700">Quick Actions</h2>
                {/* Actions list here */}
              </div>

              {/* Personal Insights */}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8 col-span-1 sm:col-span-2 lg:col-span-3">
                <h2 className="text-lg font-semibold text-gray-700">Personal Insights</h2>
                {/* Insights content here */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}