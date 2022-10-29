import "./Sidebar.scss";
import { Avatar } from "@mui/material";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

const Sidebar = () => {
  const percentage_1 = 90;
  const percentage_2 = 95;
  const percentage_3 = 100;

  return (
    <div className="sidebar">
      <div className="top-pane">
        <Avatar
          alt="Remy Sharp"
          src={require("../../assets/avatar.jpg")}
          sx={{ width: 56, height: 56 }}
        />
        <span className="name">Habib Tanwir</span>
        <span className="designation">Front-End Web Developer</span>
      </div>
      <div className="bottom-pane">
        <div className="skills">
          <span style={{ color: "white" }}>HTML</span>
          <ProgressBar striped animated variant="success" now={90} />
          <span style={{ color: "white" }}>CSS</span>
          <ProgressBar striped animated variant="info" now={90} />
          <span style={{ color: "white" }}>JS</span>
          <ProgressBar striped animated variant="danger" now={80} />
          <span style={{ color: "white" }}>REACT</span>
          <ProgressBar striped animated variant="warning" now={85} />
        </div>
        <div className="lang">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              styles={buildStyles({
                textColor: "gray",
                pathColor: "turquoise",
                trailColor: "gold",
              })}
              value={percentage_1}
              text={`${percentage_1}%`}
            />
            <span style={{ color: "white", paddingTop: "5px" }}>English</span>
          </div>
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              styles={buildStyles({
                textColor: "gray",
                pathColor: "turquoise",
                trailColor: "gold",
              })}
              value={percentage_2}
              text={`${percentage_2}%`}
            />
            <span style={{ color: "white", paddingTop: "5px" }}>Hindi</span>
          </div>
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              styles={buildStyles({
                textColor: "gray",
                pathColor: "turquoise",
                trailColor: "gold",
              })}
              value={percentage_3}
              text={`${percentage_3}%`}
            />
            <span style={{ color: "white", paddingTop: "10px" }}>Bengali</span>
          </div>
        </div>
        <div className="cv">
          <DownloadIcon /><span>Download CV</span>
          
        </div>
      </div>
      <div className="social">
        <LinkedInIcon />
        <InstagramIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Sidebar;
