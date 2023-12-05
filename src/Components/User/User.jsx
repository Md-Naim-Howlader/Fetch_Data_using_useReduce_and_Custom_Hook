const User = ({ user, dispatch }) => {
  const { id, name, username, email } = user;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="user">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <button
        onClick={() => handleDelete(id)}
        style={{ padding: "6px 15px", marginTop: "10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
