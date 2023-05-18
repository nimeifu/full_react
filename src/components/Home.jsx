import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Text,Line,Button,Input,Img,} from "components";
import PieMenu,{Slice} from "react-pie-menu";

const Home = () => {

  const [showContent, setShowContent] = useState(false);

  const dropdownMenu = () => {
    setShowContent(!showContent);
  };


  const [remainingTime, setRemainingTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && remainingTime>0) {

      interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }, 1000);
    } else if(remainingTime ===0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning,remainingTime]);

  const handleSliceTimer = () =>{
    if(!isRunning){
      setIsRunning(true)
    }
    else {
      // Reset remaining time to initial duration
      setRemainingTime(1500);
    }
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.message === 'Login successful') {
        // Redirect the user to the dashboard
        window.location.href = '#timer';
      } else {
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.message === 'User created') {
        // Redirect the user to the login page
        window.location.href = '#login/reg';
      } else {
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>
    {/*Section 1 of the page*/}
      <div
        className="bg-white_A700 font-inter h-[1024px] mx-auto relative w-full"
        id="home"
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto pb-[33px] w-full"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/img_group1.png)` }}
        >
          <div className="flex flex-col md:gap-10 gap-[550px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between md:px-5 w-[59%] md:w-full">
                <div
                  className="bg-light_blue_A700 flex flex-col items-center justify-end py-4 rounded-[5px] w-auto sm:w-full"
                  style={{
                    display: showContent ? "block" : "none",
                    marginLeft: "1vw",
                  }}
                >
                  <a
                    href="#about"
                    className="flex flex-col items-start justify-start mt-[41px] p-[15px] w-full"
                  >
                    <Text
                      className="font-medium md:ml-[0] ml-[13px] text-left text-white_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      About
                    </Text>
                  </a>
                  <div className="h-[108px] relative w-full">
                    <a
                      href="#timer"
                      className="flex flex-col items-start justify-start mb-[-6px] mx-auto p-2.5 w-full z-[1]"
                    >
                      <Text
                        className="font-medium mb-px md:ml-[0] ml-[18px] text-left text-white_A700 w-auto mt-[-10px]"
                        as="h3"
                        variant="h3"
                      >
                        Start
                      </Text>
                    </a>
                    <a
                      href="#login/reg"
                      className="flex flex-col items-end justify-start mt-auto mx-auto pl-[5px] py-[5px] w-full"
                    >
                      <Text
                        className="font-medium mb-px md:ml-[0] ml-[23px] text-left text-white_A700 w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Login/Register
                      </Text>
                    </a>
                  </div>
                </div>
                <Text
                  className="sm:mt-0 mt-4 text-center text-white_A700 w-auto ml-[43vw]"
                  as="h1"
                  variant="h1"
                >
                  Virtual hotel
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row items-start justify-center p-3 md:px-5 w-[15%] md:w-full">
                <button
                  className="ml-[55px] mt-2 text-black_900_bf text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  EN
                </button>
                <Line className="bg-black_900_cc h-[39px] mb-0.5 ml-5 w-px" />
                <button
                  className="ml-[18px] mr-[37px] mt-2 text-black_900_bf text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  中文
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[91px] md:px-5 w-[44%] md:w-full">
              <Text
                className="font-medium text-left text-shadow-ts text-white_A700 w-full"
                as="h2"
                variant="h2"
              >
                Tired of working or studying? Take a short break in the virtual
                hotel.
              </Text>
              <a
                href="#about"
                className="h-[41px] md:h-[76px] ml-0.5 md:ml-[0] mt-[35px] pr-[3px] relative rounded-[10px] w-[32%]"
              >
                <div className="bg-cyan_A700 h-[41px] m-auto rounded-[15px] w-[99%]"></div>
                <div className="trigger_area"></div>
                <Text
                  className="absolute font-normal inset-x-[0] mx-auto not-italic text-left text-white_A700 top-[12%] w-max"
                  as="h3"
                  variant="h3"
                >
                  About virtual hotel
                </Text>
              </a>
              <a
                href="#timer"
                className="h-[41px] md:h-[53px] ml-0.5 md:ml-[0] mt-3 pr-[3px] relative rounded-[10px] w-[32%]"
              >
                <div className="bg-light_blue_A700 h-[41px] m-auto rounded-[15px] w-[99%]"></div>
                <div className="trigger_area"></div>
                <Text
                  className="absolute font-normal inset-x-[0] mx-auto not-italic text-left text-white_A700 top-[17%] w-max"
                  as="h3"
                  variant="h3"
                >
                  Start your journey
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[0] p-[22px] md:px-5 top-[0] w-[11%]">
          <div className="flex flex-row gap-[11px] items-start justify-start ml-1.5 md:ml-[0] w-[77%] md:w-full">
            <button
              className="flex flex-col items-center justify-start w-2/5"
              onClick={dropdownMenu}
            >
              <div className="bg-white_A700 h-[3px] w-1/2"></div>
              <div className="bg-white_A700 h-[3px] mt-[5px] w-1/2"></div>
              <div className="bg-white_A700 h-[3px] mt-[7px] w-1/2"></div>
            </button>
            <Text
              className="mt-0.5 text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              Menu
            </Text>
          </div>
        </div>
      </div>
    
    {/*The about section of the page*/}
      <div
        className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-center mx-auto w-full"
        id="about"
      >
        <div className="flex flex-col gap-14 items-start justify-start p-[63px] md:px-5 w-[41%] md:w-full">
          <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[26px] w-[72%] md:w-full">
            <Text
              className="font-medium ml-1 md:ml-[0] text-black_900_bf text-left w-auto"
              as="h2"
              variant="h2"
            >
              About virtual hotel
            </Text>
            <Line className="bg-black_900 h-px w-full" />
          </div>
          <div className="h-[740px] md:h-[791px] mb-[51px] md:ml-[0] ml-[25px] relative w-[73%]">
            <div className="absolute h-[740px] inset-[0] justify-center m-auto w-full">
              <Line className="absolute bg-black_900 bottom-[33%] h-px inset-x-[0] mx-auto w-full" />
              <div className="absolute h-[740px] inset-[0] justify-center m-auto w-full">
                <Text
                  className="font-medium m-auto text-black_900 text-left mt-[-2vw]"
                  as="h2"
                  variant="h2"
                >
                  <>
                    Inspired by timer like pomodoro, virtual hotel sets a 25
                    minutes timer for users to take a short break. <br />
                    Unlike pomodoro, which just a timer, during this 25 minutes
                    interval, users could use the following services to help
                    them relax:
                    <li>virtual radio</li>
                    <li> virtual chat bot</li>
                    <li> edge surf game</li>
                    <li> sight seeing</li>
                    <br />
                  </>
                </Text>
                <a
                  href="#timer"
                  className="absolute bottom-[22%] h-[41px] left-[0] pr-[3px] rounded-[10px] w-[61%]"
                >
                  <div className="bg-light_blue_A700 h-[41px] m-auto rounded-[15px] w-[99%]"></div>
                  <div className="trigger_area"></div>
                  <Text
                    className="absolute font-normal inset-x-[0] mx-auto not-italic text-left text-white_A700 top-[17%] w-max"
                    as="h3"
                    variant="h3"
                  >
                    Start your journey
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Img
          src={`${process.env.PUBLIC_URL}/images/img_bestpomodoroa.png`}
          className="h-[1024px] sm:h-auto object-cover w-3/5 md:w-full"
          alt="bestpomodoroa"
        />
      </div>
    
    {/*The timer section of the page*/}
      <div
        className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full"
        id="timer"
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-screen items-start justify-end p-[11px] w-full"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/img_cafe.jpg)` }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{ position: "absolute", top: "250%", left: "40%" }}
          >
            <PieMenu size={800} slicesize={100}>
              <Slice>
                <a href="https://surf.jackbuehner.com/" target="_blank">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/img_surficon161.png`}
                    className="h-14 md:h-auto object-cover w-14"
                  />
                </a>
              </Slice>
              <Slice>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img_chatbubbles.jpg`}
                  className="h-14 md:h-auto object-cover w-14"
                />
              </Slice>
              <Slice>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img_seaicon141.png`}
                  className="h-14 md:h-auto object-cover w-14"
                />
              </Slice>
              <Slice onClick={handleSliceTimer}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img_timer.png`}
                  className="h-14 md:h-auto object-cover w-14"
                />
              </Slice>
              <Slice>
                <img
                  src={`${process.env.PUBLIC_URL}/images/img_turntable.jpg`}
                  className="h-14 md:h-auto object-cover w-14"
                />
              </Slice>
            </PieMenu>
            <Text
              className="absolute font-normal inset-x-[0] mx-auto not-italic text-left text-white_A700 top-[120%] w-max" style= {{fontSize:"30px"}}
              as="h3"
              variant="h3"
            >
              {formatTime(remainingTime)}
            </Text>
          </div>
        </div>
      </div>

      {/*login section of the page*/}
      <div
        className="bg-white_A700 flex font-inter h-[1024px] justify-end mx-auto relative w-full"
        id="login/reg"
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-start justify-end p-[11px] w-full"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/img_ethandowl2tqd.png)` }}
        >
          <div className="absolute flex flex-col gap-[27px] h-max inset-y-[0] items-center justify-start left-1/4 my-auto md:px-5 w-[41%]">
            <Text
              className="font-semibold text-left text-shadow-ts text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Register
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start ml-0.5 md:ml-[0] pb-[7px] pr-[7px] w-full">
                <Text
                  className="font-normal not-italic text-left text-shadow-ts text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  User name
                </Text>
                <Input
                  wrapClassName="flex h-8 mb-3 w-full"
                  className="p-0 w-full"
                  name="regnameinput"
                  placeholder=""
                  shape="RoundedBorder5"
                  variant="OutlineBlack900"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  
                ></Input>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start pr-1 py-1 w-full">
                <Text
                  className="font-normal not-italic text-left text-shadow-ts text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  <>
                    password
                    <br />
                  </>
                </Text>
                <Input
                  wrapClassName="flex h-8 mb-2 w-full"
                  className="p-0 w-full"
                  name="repsdinput"
                  placeholder=""
                  shape="RoundedBorder5"
                  variant="OutlineBlack900"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start mt-[5px] pr-0.5 py-0.5 w-full">
                <Text
                  className="font-normal not-italic text-left text-shadow-ts text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  <>
                    Confirm password
                    <br />
                  </>
                </Text>
                <Input
                  wrapClassName="flex h-8 mb-2 w-full"
                  className="p-0 w-full"
                  name="regpsdinput"
                  placeholder=""
                  shape="RoundedBorder5"
                  variant="OutlineBlack900"
                  value = {confirmPassword}
                  onChange = {(e) => setConfirmPassword(e.target.value)}
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-normal leading-[normal] min-w-[102px] mt-[25px] not-italic text-center text-white_A700 text-xl w-auto"
                shape="RoundedBorder10"
                size="sm"
                variant="FillLightblueA700"
                onClick = {handleRegisterSubmit}
              >
                Register
              </Button>
              <Text
                className="font-semibold md:ml-[0] ml-[102px] mt-10 text-left text-shadow-ts text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                Already have an account?
              </Text>
              <div className="flex flex-col gap-5 items-start justify-start mt-16 p-[3px] w-full">
                <Text
                  className="font-normal mt-0.5 not-italic text-left text-shadow-ts text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  User name
                </Text>
                <Input
                  wrapClassName="flex h-8 mb-1 w-full"
                  className="p-0 w-full"
                  name="nameinput"
                  placeholder=""
                  shape="RoundedBorder5"
                  variant="OutlineBlack900"
                  value = {username}
                  onChange = {(e) => setUsername(e.target.value)}
                ></Input>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start mt-[26px] pr-1 py-1 w-full">
                <Text
                  className="font-normal not-italic text-left text-shadow-ts text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  <>
                    password
                    <br />
                  </>
                </Text>
                <Input
                  wrapClassName="flex h-8 mb-0.5 w-full"
                  className="p-0 w-full"
                  name="psdinput"
                  placeholder=""
                  shape="RoundedBorder5"
                  variant="OutlineBlack900"
                  value ={password}
                  onChange = {(e) => setPassword(e.target.value)}
                ></Input>
              </div>
              <div className="md:h-20 h-[45px] mt-[39px] py-0.5 relative rounded-[10px] w-[18%]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[102px] mt-[25px] not-italic text-center text-white_A700 text-xl w-auto"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillLightblueA700"
                  onClick ={handleLoginSubmit}
                  >
                    Login
                  </Button>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
