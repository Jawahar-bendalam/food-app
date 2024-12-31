const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{location}</h2>
    </div>
  );
};

export default User;
