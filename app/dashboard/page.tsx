"use client";

import InvoiceTable from "@/app/components/InvoiceTable";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import SideNav from "@/app/components/SideNav";

export default function Dashboard() {
  //const { isLoading, isSignedIn, user } = useUser();
  const [itemList, setItemList] = useState<Item[]>([]);
  const [customer, setCustomer] = useState<string>("");
  const [invoiceTitle, setInvoiceTitle] = useState<string>("");
  const [itemCost, setItemCost] = useState<number>(1);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [itemName, setItemName] = useState<string>("");
  const [customers, setCustomers] = useState([]);
  const router = useRouter();

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(7),
      name: itemName,
      cost: itemCost,
      quantity: itemQuantity,
      price: itemCost * itemQuantity,
    };
    setItemList([...itemList, newItem]);
    setItemName("");
    setItemCost(1);
    setItemQuantity(1);
  };
}
