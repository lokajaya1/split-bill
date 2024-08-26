import React from "react";

export default function FormSplitBill({ selectedFriend }) {
  return (
    <>
      <form className="form-split-bill">
        <h2>Patungan bersama {selectedFriend.name}</h2>

        <label htmlFor="total-amount">
          <i className="fas fa-money-bill-wave"></i> Total Biaya
        </label>
        <input id="total-amount" type="number" placeholder="Total biaya" />

        <label htmlFor="your-bill">
          <i className="fas fa-user"></i> Tagihan Kamu
        </label>
        <input id="your-bill" type="number" placeholder="Tagihan Kamu" />

        <label htmlFor="friend-bill">
          <i className="fas fa-users"></i> Tagihan {selectedFriend.name}
        </label>
        <input id="friend-bill" type="number" placeholder="Tagihan X" />

        <label htmlFor="payee">
          <i className="fas fa-hand-holding-usd"></i> Ditalangin sama
        </label>
        <select id="payee">
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
