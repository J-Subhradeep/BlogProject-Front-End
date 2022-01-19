import React from "react";
import Writeup from "./Writeup";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="three-cols">
        <div className="col-one">
          <div className="profile-div">
            <a href="" className="img">
              <img
                src="luca-baggio-eKU3JGNCCMg-unsplash.jpg"
                alt="p"
                className="profile-pic"
              />
            </a>
            <p className="visiing-profile-name">Subhradeep Pal</p>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-bullhorn"></i>Announcements
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <i className="fa fa-user-circle"></i>Profile
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <i className="fa fa-cog"></i>Settings
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <i className="fa fa-user-friends"></i>Following
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <i className="fa fa-plus-circle"></i>Create
                </a>
              </li>
              <hr />
              <li>
                <a href="#">
                  <i className="fa fa-ellipsis-h"></i>more option
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-two">
          <ul>
            <li className="light">
              <a href="#">Science</a>
            </li>
            <li className="dark">
              <a href="#">Technology</a>
            </li>
            <li className="light">
              <a href="#">Programming</a>
            </li>
            <li className="dark">
              <a href="#">Researchs</a>
            </li>
            <li className="light">
              <a href="#">Gadgets</a>
            </li>
            <li className="dark">
              <a href="#">News</a>
            </li>
            <li className="light">
              <a href="#">More</a>
            </li>
          </ul>

          <Writeup description="The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more" />
        </div>

        <div className="col-three">
          <textarea
            name="textarea-colomnThree"
            className="textarea-colomnThree"
            placeholder="Take note"
            id=""
            cols="25"
            rows="10"
          ></textarea>
          <div className="attachments">
            <a href="" className="img">
              <img
                src="luca-baggio-eKU3JGNCCMg-unsplash.jpg"
                alt="p"
                className="profile-pic"
              />
            </a>
            <p className="visiting-profile-name">Shubhojit Halder</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
