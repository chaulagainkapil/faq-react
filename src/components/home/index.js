import "./index.scss";
import boxDesktop from "../../assets/images/illustration-woman-online-desktop.svg";
import boxMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import boxCube from "../../assets/images/illustration-box-desktop.svg";
import Accordionl from "../Accordion";

const Home = () => {
  return (
    <>
      <div className="main d-flex align-items-center justify-content-center">
        <div className="main__card d-flex">
          <div className="main__card--left w-100  d-flex justify-content-center align-items-center">
            <div className="main__card--left--img position-relative ">
              <img
                className="bigImage position-relative d-none d-md-block"
                src={boxDesktop}
                alt="desktop"
              />
              <img
                className="bigImage position-relative d-block d-md-none"
                src={boxMobile}
                alt="desktop"
              />
              <img
                className="boxImage position-absolute d-none d-md-block"
                src={boxCube}
                alt="Cube"
              />
            </div>
          </div>
          <div className="main__card--right w-100 d-flex flex-column justify-content-center align-items-center px-0 px-md-5">
            <h1>FAQ</h1>
            <Accordionl />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
