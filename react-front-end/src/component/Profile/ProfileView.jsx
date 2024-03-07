import basestyle from "../Base.module.css";
import SearchWord from "../WordCombination/SearchWordMain";
const ProfileView = ({ handleLogout, userData, token }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
      <SearchWord token={token}></SearchWord>
      <form>
        <button className={basestyle.button_common} onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default ProfileView;
