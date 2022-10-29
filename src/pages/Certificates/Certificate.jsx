import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Certificate.scss";
import Certificates from "../../Certificates";
const Certificate = () => {
  return (
    <>
      <div className="certificate">
        <div className="left">
          <Sidebar />
        </div>
        <div className="center">
          <h1 className="title">Wall of Achievements!</h1>
          <main className="page-content">
            {Certificates.map((cer) => (
              <div key={cer.id} className="img">
                <img className="cerimg" src={cer.img} alt="" />
              </div>
            ))}
            
          </main>
        </div>
        <div className="right">
          <SwipeableTemporaryDrawer />
        </div>
      </div>
    </>
  );
};

export default Certificate;
