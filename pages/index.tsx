import Head from 'next/head'
import ProjectBox from '../components/ProjectBox'
import ProjectTrack from '../components/ProjectTrack'
import Spacer from '../components/Spacer'
import { useState, MouseEvent } from 'react'
import { basename } from 'path';

export default function Home() {
    const [pos, setPos] = useState(0);
    const [down, setDown] = useState(false);
    const [delta, setDelta] = useState(0);
    const [persis, setPersis] = useState(0);
    
    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (!down) {
        setPos(e.screenX);
      }
      else {
        let temp = Math.floor((((pos - e.screenX) / (screen.width)) * -100) * 1.2);
        if (persis + temp < -100) {temp = (-100 - persis)}
        if (persis + temp > 0) {temp = (0 - persis)}
        setDelta(persis + temp);
      }
    }
  return (
    <div onMouseMove={handleMouseMove}
    onMouseDown={() => {setDown(true)}}
    onMouseUp={() => {setDown(false); setPersis(delta)}}
    onMouseLeave={() => {setDown(false); setPersis(delta)}}
    className="flex flex-col flex-start items-center w-screen h-screen bg-lorng overflow-x-hidden">
      <Head>
        <title>John Favret</title>
        <meta name="description" content="" />
        <link rel="icon" href="/" />
      </Head>
      <div className="h-80 fixed bottom-0 w-full bg-dorng"></div>
      {/* <Projectrack pos={delta}>
        <ProjectBox pos={delta} src="vue-weather"/>
        <ProjectBox pos={delta} src="assemble"/>
        <ProjectBox pos={delta} src="dropzone"/>
        <ProjectBox pos={delta} src="wordle"/>
        <ProjectBox pos={delta} src="flappy-bird"/>
      </ProjectTrack> */}
      <div className="w-[80%] flex flex-col">
        <Spacer hgt="8vh" wid="8vh"/>
        <h2 className="text-white text-4xl px-32">Hi, nice to meet you!</h2>
        <Spacer hgt="0.5vh" wid="8vh"/>
        <h1 className="text-white text-6xl px-32 font-bold">I'm <span className="text-lblue">John Favret</span>.</h1>
        <Spacer hgt="2vh" wid="8vh"/>
        <p className="px-32 text-[13.5px] text-white">I'm currently a Computer Science student at the University of Michigan, but that hasn't slowed
          me down in my passion for making, breaking, and general tinkering. My interests have lead me to the
          field of Web Development, where I'm currently working as a Front-End Developer at MittenWeb, and I'm
          excited to take on a Full-Stack role this summer at EnergySage. In addition to just websites, I've
          developed an interest in wiring and robotics, and I plan on pursuing a minor in Electrical Engineering. Click and drag to the left to see some older projects!
        </p>
        <Spacer hgt="2.5vh" wid="8vh"/>
        <div className="px-32">
          <ProjectTrack pos={delta}/> 
        </div>
      </div>
      {/* <div className="w-full h-20 flex justify-center items-center">
        <div className="w-60 h-20 bg-lblue"></div>
      </div> */}
    </div>
  )
}
