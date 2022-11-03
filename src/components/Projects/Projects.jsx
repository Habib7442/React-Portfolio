import React from "react";
import "./Projects.scss";
import projectData from "../../ProjectData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

//modal

const Projects = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="projects">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projectData.slice(0,3).map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slide-content">{data.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {projectData.map((data) => (
          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            className="card"
            layoutId={data.id}
          >
            <motion.h2 layout="position">{data.title}</motion.h2>
            {!isOpen && (
              <motion.button onClick={() => setIsOpen(!isOpen) && setId(data.id)}>
                Click Me !
              </motion.button>
            )}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="expand"
              >
                <img className="img" src={data.img} alt="" />
            
                <button
                  className="btn btn-outline-light mt-3 exit"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Exit
                </button>
              </motion.div>
            )}
          </motion.div>
        ))} */}
    </div>
  );
};

export default Projects;
