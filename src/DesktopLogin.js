import { Link } from "react-router-dom";
import styles from "./css/DesktopLogin.module.css";

export const DesktopLogin = () => {
  return (
    <div className={styles.desktopLoginDiv}>
      <div className={styles.navBarDiv} />
      <div className={styles.logInDiv}>
        <div className={styles.backgroundDiv} />
        <div className={styles.loginWhiteDiv}>
          <img
            className={styles.arrowBackIosIcon}
            alt=""
            src="arrow-back-ios.svg"
          />
          <div className={styles.frameDiv} />
          <div className={styles.welcomeBackDiv}>Welcome back</div>
          <div className={styles.frameDiv1} id="LoginForm">
            <form className={styles.frameForm}>
              <div className={styles.frameDiv2}>
                <div className={styles.frameDiv3}>
                  <b className={styles.usernameB}>Username</b>
                  <div className={styles.groupDiv}>
                    <div className={styles.rectangleDiv} />
                    <b className={styles.carlospereiraB}>carlos.pereira</b>
                  </div>
                </div>
                <div className={styles.frameDiv3}>
                  <b className={styles.usernameB}>Password</b>
                  <input className={styles.groupInput} type="password" />
                </div>
                <div className={styles.groupDiv1}>
                  <img
                    className={styles.btnCheckIcon}
                    alt=""
                    src="btn-check.svg"
                  />
                  <b className={styles.rememberMe}>Remember me</b>
                  <a className={styles.forgotPassword} target="_blank">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button className={styles.frameButton} id="Login Button">
                <div className={styles.frameDiv5}>
                  <b className={styles.lOGINB}>LOG IN</b>
                </div>
              </button>
            </form>
            <b className={styles.oRB}>OR</b>
            <div className={styles.frameDiv2}>
              <button className={styles.frameButton1}>
                <div className={styles.groupDiv2}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="image-2@2x.png"
                  />
                  <b className={styles.continueWithGoogle}>
                    Continue with Google
                  </b>
                </div>
              </button>
              <button className={styles.frameButton1}>
                <div className={styles.groupDiv3}>
                  <b className={styles.continueWithFacebook}>
                    Continue with Facebook
                  </b>
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="image-3@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.frameDiv7}>
            <b className={styles.dontHaveAccount}>Don’t have account? </b>
            <Link className={styles.signUpA} to="/desktop-signup">
              Sign up
            </Link>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.navigationItem}>
              <img className={styles.icon} alt="" src="icon4.svg" />
              <div className={styles.labelDiv}>Home</div>
            </div>
            <div className={styles.navigationItem1}>
              <img className={styles.icon} alt="" src="icon1.svg" />
              <div className={styles.labelDiv}>Portfolio</div>
            </div>
            <div className={styles.navigationItem2}>
              <img className={styles.icon} alt="" src="icon2.svg" />
              <div className={styles.labelDiv}>Prices</div>
            </div>
            <div className={styles.navigationItem3}>
              <img className={styles.icon} alt="" src="icon3.svg" />
              <div className={styles.labelDiv}>Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
