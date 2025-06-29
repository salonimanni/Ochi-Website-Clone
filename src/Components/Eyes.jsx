import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Eyes() {
   const [rotate,setRotate]=useState (0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
     let mouseX=e.clientX;   //this is mouse position at x axis
     let mouseY=e.clientY;
     
     let deltaX = mouseX - window.innerWidth/2; //how far is mouse from center
     let deltaY = mouseY - window.innerWidth/2;
     
     var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
     setRotate(angle-180);
    })
  }
  )
 
 
 
 
 
  return (
    <div className="relative w-full h-screen overflow-hidden">
  <div data scroll data-scroll-speed=".2"
    className="absolute inset-0 bg-blue-800 bg-center bg-cover"
    style={{
      backgroundImage:
        'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")',
    }}
  ></div>
  <div className="absolute flex gap-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
      <div className="relative w-2/3 rounded-full h-2/3 bg-zinc-900">
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="absolute w-full h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
      <div className="relative flex items-center justify-center w-2/3 rounded-full h-2/3 bg-zinc-900">
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute w-full h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Eyes;
