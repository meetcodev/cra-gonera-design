import React from "react";
import Social from "./Social";
import NewSocial from "./NewSocial";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
                <h3 className="name">Jacek Gonera</h3>
                <h4 className="typer">
                    ARCHITEKT WNĘTRZ
                </h4>
                {/* <p className="job">
                    GONERA DESIGN
                </p> */}
            {/* END JOB */}
            <NewSocial />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
