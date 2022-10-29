import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AllProject.scss";
import projectData from "../../ProjectData";

const AllProject = () => {
  return (
    <div className="allProject">
      <div className="left">
        <Sidebar />
      </div>
      <div className="center">
        <main className="page-content">
          {projectData.map((data) => (
            <div key={data.id} className="cards">
              <div className="content">
                <h2 className="title">{data.title}</h2>
                <p className="copy">
                  {data.desc}
                </p>
                <a href={data.github} target="_blank"><button className="btn">GitHub</button></a>
                <a href={data.netlify} target="_blank"><button className="btn">Netlify</button></a>
              </div>
            </div>
          ))}
          {/* <div className="cards">
            <div className="content">
              <h2 className="title">To The Beach</h2>
              <p className="copy">
                Plan your next beach trip with these fabulous destinations
              </p>
              <button className="btn">View Trips</button>
            </div>
          </div>
          <div className="cards">
            <div className="content">
              <h2 className="title">Desert Destinations</h2>
              <p className="copy">It's the desert you've always dreamed of</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="cards">
            <div className="content">
              <h2 className="title">Explore The Galaxy</h2>
              <p className="copy">
                Seriously, straight up, just blast off into outer space today
              </p>
              <button className="btn">Book Now</button>
            </div>
          </div> */}
        </main>
      </div>
      <div className="right">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
};

export default AllProject;
