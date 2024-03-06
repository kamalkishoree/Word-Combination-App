import TextCombo from "../text/TextCombo";
import basestyle from "../Base.module.css";
import SearchWord from "../SearchWord/SearchWord";

const ProfileView = ({ handleLogout, userData, token }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
      <TextCombo token={token}></TextCombo>
      <form>
        <button className={basestyle.button_common} onClick={handleLogout}>
          Logout
        </button>
      </form>
      {/* <SearchWord></SearchWord> */}
    </div>
  );
};

export default ProfileView;
