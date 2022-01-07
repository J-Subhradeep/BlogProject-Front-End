import React from "react";

const Home = () => {
  return (
    <>
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
          <div className="write-up">
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              error soluta cupiditate. Voluptas, quam veniam, deleniti aperiam
              nisi libero repellendus commodi tenetur esse voluptatibus
              quibusdam error omnis rerum quod necessitatibus.
            </p>
            <hr />
            <div className="react-comment">
              <div className="react">
                <i className="fas fa-heart"></i>
              </div>
              <div className="comment">
                <i className="far fa-comment-dots"></i>
              </div>
            </div>
          </div>
          <div className="write-up">
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              error soluta cupiditate. Voluptas, quam veniam, deleniti aperiam
              nisi libero repellendus commodi tenetur esse voluptatibus
              quibusdam error omnis rerum quod necessitatibus.
            </p>
            <hr />
            <div className="react-comment">
              <div className="react">
                <i className="fas fa-heart"></i>
              </div>
              |
              <div className="comment">
                <i className="far fa-comment-dots"></i>
              </div>
            </div>
          </div>
          <div className="write-up">
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              error soluta cupiditate. Voluptas, quam veniam, deleniti aperiam
              nisi libero repellendus commodi tenetur esse voluptatibus
              quibusdam error omnis rerum quod necessitatibus.
            </p>
            <hr />
            <div className="react-comment">
              <div className="react">
                <i className="fas fa-heart"></i>
              </div>
              <div className="comment">
                <i className="far fa-comment-dots"></i>
              </div>
            </div>
          </div>
          <div className="write-up">
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              error soluta cupiditate. Voluptas, quam veniam, deleniti aperiam
              nisi libero repellendus commodi tenetur esse voluptatibus
              quibusdam error omnis rerum quod necessitatibus.
            </p>
            <hr />
            <div className="react-comment">
              <div className="react">
                <i className="fas fa-heart"></i>
              </div>
              <div className="comment">
                <i className="far fa-comment-dots"></i>
              </div>
            </div>
          </div>
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
