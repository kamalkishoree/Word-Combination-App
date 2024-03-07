import basestyle from "../Base.module.css";
import { LogoutComponent } from "../Login/LogoutMain";
import SearchWord from "../WordCombination/SearchWordMain";
const ProfileView = ({ handleLogout, userData, token }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
      <SearchWord token={token}></SearchWord>
      <form>
        <LogoutComponent handleLogout={handleLogout}></LogoutComponent>
      </form>
    </div>
  );
};

export default ProfileView;
