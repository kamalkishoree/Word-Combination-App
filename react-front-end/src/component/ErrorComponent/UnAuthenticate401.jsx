import GotoLoginButton from "../Login/GotoLoginButton";
import errorStyle from "./CustomError.module.css";
const UnAunthecate401 = () => {
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
              1
            </span>
          </h1>
          <h3 className="fadeIn">Error 401 - Unauthorized</h3>
          <GotoLoginButton></GotoLoginButton>
        </div>
      </div>
    </>
  );
};
export default UnAunthecate401;
