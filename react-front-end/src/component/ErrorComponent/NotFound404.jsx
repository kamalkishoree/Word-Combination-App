import GotoLoginButton from "../Login/GotoLoginButton";
import errorStyle from "./CustomError.module.css";
const NotFound404 = () => {
  return (
    <>
      <div className={`${errorStyle["flex-container"]} flex-container`}>
        <div className={` ${errorStyle["text-center"]} text-center`}>
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">PAGE NOT FOUND</h3>
          <GotoLoginButton errorStyle={errorStyle.button}></GotoLoginButton>
        </div>
      </div>
    </>
  );
};
export default NotFound404;
