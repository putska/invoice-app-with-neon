"use client";

import CustomersTable from "@/app/components/CustomersTable";
import SideNav from "@/app/components/SideNav";
import { useCallback, useEffect, useState } from "react";

export default function Customers() {
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerAddress, setCustomerAddress] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Tries to add a customer");
  };

  return (
    <div className="w-full">
      <main className="min-h-[90vh] flex items-start">
        <SideNav />
        <div className="md:w-5/6 w-full h-full p-6">
          <h2 className="text-2xl font-bold">Customers</h2>
          <p className="opacity-70 mb-4">Create and view all your customers</p>

          <form className="w-full" onSubmit={handleAddCustomer} method="POST">
            <div className="w-full flex items-center space-x-4 mb-3">
              <section className="w-1/2">
                <label>Customer&apos;s Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-200 rounded"
                  value={customerName}
                  required
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </section>

              <section className="w-1/2">
                <label>Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-200 rounded-sm"
                  value={customerEmail}
                  required
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </section>
            </div>

            <label htmlFor="address">Billing Address</label>
            <textarea
              name="address"
              id="address"
              rows={3}
              className="w-full p-2 border border-gray-200 rounded-sm"
              value={customerAddress}
              required
              onChange={(e) => setCustomerAddress(e.target.value)}
            ></textarea>

            <button
              className=" bg-blue-500 text-white rounded-md p-2 mb-6"
              disabled={loading}
            >
              {loading ? "Adding Customer..." : "Add Customer"}
            </button>
          </form>
          <CustomersTable customers={customers} />
        </div>
      </main>
    </div>
  );
}
