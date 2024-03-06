import basestyle from "../Base.module.css";
const ProfileView = ({ handleLogout, userData, token }) => {
  <div className="profile">
    <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
    <SearchWord token={token}></SearchWord>
    <form>
      <button className={basestyle.button_common} onClick={handleLogout}>
        Logout
      </button>
    </form>
  </div>;
};

export default ProfileView;
