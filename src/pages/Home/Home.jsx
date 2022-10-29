import { Button } from "@mui/material";
import Carousels from "../../components/Carousel/Carousel";
import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import Projects from "../../components/Projects/Projects";
import Sidebar from "../../components/Sidebar/Sidebar";
import Review from "../Review/Review";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Home.scss";
import { Link } from "react-router-dom";
import Git from "../../components/Github/Git";

const Home = () => {
  return (
    <>
      <div className="home bg-dark">
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
          <section className="first-section">
            <main id="swup" className="first-section-main transition-fade">
              <h1 className="title">Explore My Work Space</h1>
              <Button variant="contained" color="secondary">
                EXPLORE
              </Button>
            </main>
          </section>
          <section className="second-section">
            <h2 className="proTitle">My Projects</h2>
            <div className="project">
              <div className="projectLeft" data-aos="fade-right">
                <Projects />
              </div>
              <div className="projectRight" data-aos="fade-left">
                <div className="laptop">
                  <img
                    className="imgLaptop"
                    src={require("../../assets/laptop.png")}
                    alt=""
                  />
                  <div className="laptopScreen">
                    {/* <img className="screenImg" src={require("../../assets/netfliximg.png")} alt="" /> */}
                    <Carousels />
                  </div>
                </div>
                <div className="mobile">
                  <img
                    className="imgMobile"
                    src={require("../../assets/mobile.png")}
                    alt=""
                  />
                  <div className="mobileScreen">
                    {/* <img className="screenImg" src={require("../../assets/netfliximg.png")} alt="" /> */}
                    <Carousels />
                  </div>
                </div>
              </div>
            </div>
            <div className="linkToProject">
              <Link to="/all-project">
                <span style={{ color: "lightgray" }}>All Projects</span>
                <ArrowCircleRightIcon
                  style={{ color: "lightgray", marginLeft: "5px" }}
                />
              </Link>
            </div>
          </section>
          <section className="third-section">
            <h2 className="techTitle">Weapons I Use</h2>
            <div className="techstacks" data-aos="zoom-out-left">
              <ul>
                <li>
                  <a>
                    <i>
                      <img
                        className="techImg"
                        src={require("../../assets/htmlicon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i aria-hidden="true">
                      <img
                        className="techImg"
                        src={require("../../assets/cssicon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i aria-hidden="true">
                      <img
                        className="techImg"
                        src={require("../../assets/jsicon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i aria-hidden="true">
                      <img
                        className="techImg"
                        src={require("../../assets/reacticon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i aria-hidden="true">
                      <img
                        className="techImg"
                        src={require("../../assets/bootstrapicon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i aria-hidden="true">
                      <img
                        className="techImg"
                        src={require("../../assets/sassicon.png")}
                        alt=""
                      />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="git-section">
            <h2 className="gitTitle">Want to see more Projects</h2>
            <div className="gitDiv">
              <Git />
            </div>
            <div className="gitImgDiv">
              <a href="https://github.com/Habib7442" target="_blank">
                <img
                  className="gitImg"
                  src={require("../../assets/github.png")}
                  alt=""
                />
              </a>
            </div>
          </section>
          <section className="fourth-section">
            <h2 className="testTitle">Testimonial</h2>
            <div className="review d-flex flex-wrap" data-aos="flip-down">
              <Review />
            </div>
            <div className="linkToProject">
              <Link to="/all-reviews">
                <span style={{ color: "lightgray" }}>All Reviews</span>
                <ArrowCircleRightIcon
                  style={{ color: "lightgray", marginLeft: "5px" }}
                />
              </Link>
            </div>
          </section>
        </div>
        <div className="right">
          <SwipeableTemporaryDrawer />
          <h6 className="drawerTitle">HOME</h6>
        </div>
      </div>
      <div className="footer">
        <div class="container">
          <footer class="py-3">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <Link to="/" class="nav-link px-2 text-muted">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/all-project" class="nav-link px-2 text-muted">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact-form" class="nav-link px-2 text-muted">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/review-form" class="nav-link px-2 text-muted">
                  Review
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/certificate" class="nav-link px-2 text-muted">
                  Achievement
                </Link>
              </li>
            </ul>
            <p class="text-center text-muted">© 2022 Habib</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
