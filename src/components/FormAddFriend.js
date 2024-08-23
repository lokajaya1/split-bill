export default function FormAddFriend() {
  return (
    <>
      <form action="" className="form-add-friend">
        <label htmlFor="name">
          <i className="fa fa-user" aria-hidden="true"></i> Nama
        </label>
        <input type="text" id="name" name="name" />

        <label htmlFor="image">
          <i className="fa fa-image" aria-hidden="true"></i> Gambar
        </label>
        <input type="text" id="image" name="image" />

        <button className="button">Tambah</button>
      </form>
    </>
  );
}
