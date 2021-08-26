import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import Image from "./jay.png";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["JavaScript Devloper"],
    });
  }, []);

  return (
    <div className="intro container-fluid" id="intro">
      <div className="left">
        <div className="imgContainer img-fluid">
           {/* <Image/> */}
           <img src="/assets/jayr.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jay Karavadra</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="flex-center">
         <a href="https://github.com/Jaykaravadra77" rel="noreferrer"  target="_blank">   <i className="fa fa-github fa-3x icon-3d" style={{color:"black"}}></i></a>
         <a href="https://twitter.com/KaravadraJay1?s=08" rel="noreferrer"  target="_blank">     <i className="fa fa-twitter fa-3x icon-3d" style={{color:"black"}}></i></a>
          
           <a href="https://www.facebook.com/jay.rajshakha.3"rel="noreferrer"  target="_blank"> <i className="fa fa-facebook fa-3x icon-3d" style={{color:"black"}}></i></a>
            <a href="https://www.instagram.com/jaykaravadra77/" rel="noreferrer"  target="_blank"><i className="fa fa-instagram fa-3x icon-3d" style={{color:"black"}}></i></a>
            <a href="https://www.linkedin.com/in/jaykaravadra/" rel="noreferrer"  target="_blank"><i className="fa fa-linkedin fa-3x icon-3d" style={{color:"black"}}></i></a>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
