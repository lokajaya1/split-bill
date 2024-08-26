import React, { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Patungan bersama {selectedFriend.name}</h2>

        <label htmlFor="total-amount">
          <i className="fas fa-money-bill-wave"></i> Total Biaya
        </label>
        <input
          id="total-amount"
          type="number"
          placeholder="Total biaya"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="your-bill">
          <i className="fas fa-user"></i> Tagihan Kamu
        </label>
        <input
          id="your-bill"
          type="number"
          placeholder="Tagihan Kamu"
          value={myBill}
          onChange={(e) => setMyBill(e.target.value)}
        />

        <label htmlFor="friend-bill">
          <i className="fas fa-users"></i> Tagihan {selectedFriend.name}
        </label>
        <input
          id="friend-bill"
          type="number"
          placeholder={selectedFriend.name}
          value={friendBill}
          disabled
        />

        <label htmlFor="">
          <i className="fas fa-hand-holding-usd"></i> Ditalangin sama
        </label>
        <select
          id=""
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">Kamu</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <button className="button">
          <i className="fas fa-plus"></i> Tambah
        </button>
      </form>
    </>
  );
}
