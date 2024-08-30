"use client"

import { useState, useEffect, useCallback} from "react";
import Link from "next/link";
import SideNav from "@/app/components/SideNav";

export default function History() {

    //const { isLoading, isSignedIn, user } = useUser();
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    return (
        <div className="w-full">
            <main className="min-h-[90vh] flex items-start">
                <SideNav />
                <div className="md:w-5/6 w-full h-full p-6">
                    <h2 className="text-2xl font-bold">History</h2>
                    <p className="opacity-70 mb-4">View all your invoices and their status</p>

                    {invoices.map((invoice) => (
                        <div className='bg-blue-50 w-full mb-3 rounded-md p-3 flex items-center justify-between'
                        key={invoice.id}
                        >
                            <div>
                                <p className='text-sm text-gray-500 mb-2'>
                                    Invoice -#09{invoice.id} issued to  { " " }
                                    <span className='font-bold'>{invoice.customer_id}</span>
                                </p>
                                <h3 className='text-lg font-bold mb-[1px]'>
                                    
                                </h3>
                            </div>
                    )}
                </div>
            </main>

        </div>
    )
