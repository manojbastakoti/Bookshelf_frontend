import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Confirm = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  console.log(searchParams);

  // Extracting the values using the keys
  const pidx = searchParams.get("pidx");
  const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const mobile = searchParams.get("mobile");
  const purchaseOrderId = searchParams.get("purchase_order_id");
  const purchaseOrderName = searchParams.get("purchase_order_name");
  const transactionId = searchParams.get("transaction_id");

  return (
    <div>
      <div className="confirm-details">
        <p>pidx: {pidx}</p>
        <p>txnId: {txnId}</p>
        <p>amount: {amount}</p>
        <p>mobile: {mobile}</p>
        <p>purchase_order_id: {purchaseOrderId}</p>
        <p>purchase_order_name: {purchaseOrderName}</p>
        <p>transaction_id: {transactionId}</p>
      </div>

      <Link to="/"><i className="fa-solid fa-arrow-left"></i>Home</Link>
    </div>
  );
};

export default Confirm;