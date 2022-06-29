import { Link } from "react-router-dom";
import styles from "./css/DesktopSignUp.module.css";

export const DesktopSignUp = () => {
  return (
    <div className={styles.desktopSignUpDiv}>
      <div className={styles.navBarDiv} />
      <div className={styles.logInDiv}>
        <div className={styles.backgroundDiv} />
        <div className={styles.signUpWhiteDiv}>
          <img
            className={styles.arrowBackIosIcon}
            alt=""
            src="arrow-back-ios1.svg"
          />
          <div className={styles.frameDiv}>
            <div className={styles.welcomeToMegaWallet}>
              Welcome to Mega Wallet
            </div>
            <b className={styles.yourBestPlaceToSaveYourE}>
              your best place to save your expenses and Budgets{" "}
            </b>
          </div>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.frameDiv3}>
                <div className={styles.frameDiv4}>
                  <b className={styles.welcomeToMegaWallet}>Username</b>
                  <input className={styles.rectangleInput} type="text" />
                </div>
                <input
                  className={styles.frameInput}
                  type="text"
                  placeholder="Password"
                />
                <select className={styles.frameSelect} />
              </div>
              <button className={styles.frameButton}>
                <div className={styles.frameDiv5}>
                  <b className={styles.sIGNUPB}>SIGN UP</b>
                </div>
              </button>
            </div>
            <b className={styles.oRB}>OR</b>
            <div className={styles.frameDiv6}>
              <button className={styles.frameButton1}>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="image-2@2x.png"
                  />
                  <b className={styles.signUpWithGoogle}>Sign up with Google</b>
                </div>
              </button>
              <button className={styles.frameButton1}>
                <div className={styles.groupDiv1}>
                  <b className={styles.signUpWithFacebook}>
                    Sign up with Facebook
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
            <b className={styles.welcomeToMegaWallet}>You have account?</b>
            <Link className={styles.logInA} to="/desktop-login">
              Log in
            </Link>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.navigationItem}>
              <img className={styles.icon} alt="" src="icon8.svg" />
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
