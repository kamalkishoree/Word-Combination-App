export const LogoutComponent = ({ handleLogout }) => {
  return (
    <button className={"btn btn-danger"} onClick={handleLogout}>
      Logout
    </button>
  );
};
