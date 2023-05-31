import "./index.scss";
import boxDesktop from "../../assets/images/illustration-woman-online-desktop.svg";
import boxMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import boxCube from "../../assets/images/illustration-box-desktop.svg";

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
            <div className="accordion accordion-flush w-100" id="faqAccordian">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How many team members can I invite?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">
                    You can invite up to 2 additional users on the Free plan.
                    There is no limit on team members for the Premium plan.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is the maximum file upload size?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">
                    No more than 2GB. All files in your account must fit your
                    allotted storage space.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I reset my password?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">
                    Click "Forgot password" from the login page or "Change
                    password" from your profile page. A reset link will be
                    emailed to you.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I cancel my subscription?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">
                    Yes! Send us a message and we'll process your request no
                    questions asked.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do you provide additional support?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">
                    Chat and email support is available 24/7. Phone lines are
                    open during normal business hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
