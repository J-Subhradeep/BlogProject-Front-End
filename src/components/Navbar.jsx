import React, { useEffect } from "react";

const Navbar = () => {
  // useEffect(() => {
  //   const splash = document.querySelector(".splash");
  //   document.addEventListener("load", () => {
  //     setTimeout(() => {
  //       splash.classList.add("display-none");
  //       console.log("hello");
  //     }, 2000);
  //   });
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(document.getElementsByClassName("splash"));
      let splash = document.getElementsByClassName("splash")[0];
      splash.classList.add("display-none");
    }, 2000);
  }, []);
  return (
    <>
      <div
        className="splash"
        onLoad={(e) => {
          console.log(e.target);
        }}
      >
        <h1 className="fade-in">ThoughtBots</h1>To join the video meeting, click
        this link: https://meet.google.com/tez-fbcq-aji Otherwise, to join by
        phone, dial +1 316-536-0718 and enter this PIN: 744 190 475#
      </div>
      <nav>
        <a href="#" className="logo">
          ThoughtBots
        </a>
        <div className="nav-links" id="nav-col">
          <i className="fas fa-times" id="closeMenu"></i>
          <ul>
            <li className="searching">
              <input
                type="text"
                name="search"
                id="search-bar"
                placeholder="Search here"
              />
              <a href="#">
                <i className="fa fa-search" id="search-btn"></i>
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Post</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <i
                className="fas fa-moon"
                id="themeIcon"
                onClick={() => {
                  document.body.classList.toggle("dark-theme");
                }}
              ></i>
            </li>
          </ul>
        </div>
        <i className="fas fa-bars" id="openMenu"></i>
      </nav>
    </>
  );
};

export default Navbar;
