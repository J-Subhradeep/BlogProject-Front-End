
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  // ------mapping------
  // var react = document.getElementsByClassName("react");
  // var arr = Array.from(react);
  // console.log(arr);
  // var count1 = 0;
  // arr.map((react) => {
  //     react.addEventListener("click", () => {
  //         if (count1 == 0) {
  //             react.style.color = "red"
  //             count1 += 1;
  //             react.style.fontSize = "1.4rem"

  //         }
  //         else {
  //             react.style.color = "#888888";
  //             count1 = 0;
  //             react.style.fontSize = "1.3rem"
  //         }
  //         var audio = new Audio("Pling.mp3");
  //         audio.play();
  //     })
  // })

  

  // var postComment = document.getElementsByClassName("comment");
  // var arrComment = Array.from(postComment);
  // var post = document.getElementsByClassName("post");
  // var arrPost = Array.from(post);
  // console.log(arrComment);
  // arrComment.map((postComment)=>{ 
  //     postComment.addEventListener("click",()=>{
  //         window.open("commentPage.html");
  //         console.log(post[3].innerHTML);
  //     })
  // })


  // var themeIcon = document.getElementById("themeIcon");
  // themeIcon.addEventListener("click",(icon)=>{
  //     document.body.classList.toggle("dark-theme");
  //     // if(document.body.contains("dark-theme"))
  //     //     icon.classList.toggle("fa-sun");
  // })

  // var navLinks=document.getElementById("nav-col");
  // document.getElementById("closeMenu").addEventListener("click",()=>{
  //     navLinks.style.right ="-300px";
  // })
  // document.getElementById("openMenu").addEventListener("click",()=>{
  //     navLinks.style.right = "0";
  // })
  return (
 <>
 <Navbar/>
 <Home/>
 </>
  );
}

export default App;
