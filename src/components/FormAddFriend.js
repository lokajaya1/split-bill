import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/100");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID;

    const newFriend = {
      id,
      name,
      image: `${image}?={id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
  }

  return (
    <>
      <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <i className="fa fa-user" aria-hidden="true"></i> Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="image">
          <i className="fa fa-image" aria-hidden="true"></i> Gambar
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="button">Tambah</button>
      </form>
    </>
  );
}
