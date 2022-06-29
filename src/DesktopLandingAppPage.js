import styles from "./css/DesktopLandingAppPage.module.css";

export const DesktopLandingAppPage = () => {
  return (
    <div className={styles.desktopLandingAppPage}>
      <div className={styles.navBarDiv} />
      <div className={styles.logInDiv}>
        <div className={styles.splassWhiteDiv}>
          <div className={styles.helloDiv}>
            <div className={styles.helloDiv1}>
              <span>Hello</span>
              <b className={styles.b}> !</b>
            </div>
            <div className={styles.bestPlaceToWriteYourDaily}>
              Best place to write your daily expenses and share your budget .
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <div className={styles.frameDiv1}>
                <div className={styles.frameDiv3}>
                  <b className={styles.lOGINB}>LOG IN</b>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv4}>
              <b className={styles.lOGINB}>SIGN UP</b>
            </div>
          </div>
          <div className={styles.mEGAWALLETDiv}>
            <p className={styles.mEGAWALLETP}>MEGA WALLET</p>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.navigationItem}>
              <img className={styles.icon} alt="" src="icon.svg" />
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
          <img className={styles.logoIcon} alt="" src="logo.svg" />
        </div>
      </div>
    </div>
  );
};
