"use client";

import { ChangeEvent, useEffect, useState, useCallback } from "react";
import SideNav from "@/app/components/SideNav";

export default function Settings() {
  //default bank info
  const [bankInfo, setBankInfo] = useState({
    account_name: "",
    account_number: 1234567890,
    bank_name: "",
    currency: "",
  });

  // bank info from the form entries
  const [inputBankInfo, setInputBankInfo] = useState({
    account_name: "",
    account_number: 1234567890,
    bank_name: "",
    currency: "",
  });

  // updates the form entries state
  const handleUpdateBankInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputBankInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // updates the bank info state
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Tries to update bank info...");
  };

  return (
    <div className="w-full">
      <main className="min-h-[90vh] flex items-start">
        <SideNav />

        <div className="md:w-5/6 w-full h-full p-6">
          <h2 className="text-2xl font-bold">Bank Information</h2>
          <p className="opacity-70 mb-4">
            Update your bank account information
          </p>
          <div className="flex md:flex-row flex-col items-start justify-between w-full md:space-x-4">
            <section className="md:w-1/3 w-full bg-blue-50 h-full p-3 rounded-md space-y-3">
              <p className="text-sm opacity-75">
                Account Name: {bankInfo.account_name}
              </p>
              <p className="text-sm opacity-75">
                Account Number: {bankInfo.account_number}
              </p>
              <p className="text-sm opacity-75">
                Bank Name: {bankInfo.bank_name}
              </p>
              <p className="text-sm opacity-75">
                Currency: {bankInfo.currency}
              </p>
            </section>

            <form
              className="md:w-2/3 w-full p-3 flex flex-col"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label htmlFor="accountName" className="text-sm">
                Account Name
              </label>
              <input
                type="text"
                name="accountName"
                id="accountName"
                value={inputBankInfo.account_name}
                onChange={handleUpdateBankInfo}
                className="border-[1px] p-2 rounded mb-3"
                required
              />

              <label htmlFor="accountNumber" className="text-sm">
                Account Number
              </label>
              <input
                type="number"
                name="accountNumber"
                id="accountNumber"
                value={inputBankInfo.account_number}
                onChange={handleUpdateBankInfo}
                className="border-[1px] p-2 rounded mb-3"
                required
              />

              <label htmlFor="bankName" className="text-sm">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                value={inputBankInfo.bank_name}
                onChange={handleUpdateBankInfo}
                className="border-[1px] p-2 rounded mb-3"
                required
              />

              <label htmlFor="currency" className="text-sm">
                Currency
              </label>
              <select
                name="currency"
                id="currency"
                value={inputBankInfo.currency}
                onChange={handleUpdateBankInfo}
                className="border-[1px] p-2 rounded mb-3"
                required
              >
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 w-[200px] rounded"
                >
                  Update Bank Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
