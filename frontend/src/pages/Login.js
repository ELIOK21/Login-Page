import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [enterYourUserValue, setEnterYourUserValue] = useState("");
  const [enterYourPasswordValue, setEnterYourPasswordValue] = useState("");
  const [enterYourPassword1Value, setEnterYourPassword1Value] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleReset = () => {
    setEnterYourUserValue("");
    setEnterYourPasswordValue("");
    setEnterYourPassword1Value("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    try {
      // Frontend validation, you may add more validation as needed
      if (!enterYourUserValue || !enterYourPasswordValue || !enterYourPassword1Value) {
        console.error("Please fill in all fields");
        return;
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: enterYourUserValue,
          email: enterYourPassword1Value,
          password: enterYourPasswordValue,
        }),
      });

      if (response.ok) {
        console.log('User saved successfully');
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error('Error saving user:', await response.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div className={styles.login}>
      <img
        className={styles.smallTeamDiscussingIdeas21Icon}
        alt=""
        src="/smallteamdiscussingideas21942200@2x.png"
      />
      <div className={styles.loginInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupParent}>
            <div className={styles.signInWrapper}>
              <div className={styles.signIn}>{`SIGN IN `}</div>
            </div>
            <div className={styles.welcome}>Welcome !</div>
            <div className={styles.componentParent}>
              <div className={styles.userNameParent}>
                <div className={styles.userName}>User name</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.instanceChild} />
                  <input
                    className={styles.enterYourUser}
                    placeholder="Enter your user name"
                    type="text"
                    value={enterYourUserValue}
                    onChange={(event) =>
                      setEnterYourUserValue(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className={styles.instanceWrapper}>
                <div className={styles.userNameParent}>
                  <div className={styles.userName}>Password</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.instanceChild} />
                    <input
                      className={styles.enterYourUser}
                      placeholder="Enter your Password"
                      type={showPassword ? "text" : "password"}
                      value={enterYourPasswordValue}
                      onChange={(event) =>
                        setEnterYourPasswordValue(event.target.value)
                      }
                    />
                    <div
                      className={styles.eyeIcon}
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? "👁" : "🚫"}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceContainer}>
                <div className={styles.userNameParent}>
                  <div className={styles.userName}>Email</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.instanceChild} />
                    <input
                      className={styles.enterYourUser}
                      placeholder="example@email.com"
                      type="email"
                      value={enterYourPassword1Value}
                      onChange={(event) =>
                        setEnterYourPassword1Value(event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <button className={styles.groupButton} onClick={handleSubmit}>
                <div className={styles.groupItem} />
                <div className={styles.logIn}>LOG IN</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.rectangleParent1} onClick={handleReset}>
        <div className={styles.groupInner} />
        <div className={styles.reset}>RESET</div>
      </button>
    </div>
  );
};

export default Login;