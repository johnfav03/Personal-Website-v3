import Head from 'next/head'
import ProjectBox from '../components/ProjectBox'
import ProjectTrack from '../components/ProjectTrack'
import Spacer from '../components/Spacer'
import { useState, MouseEvent } from 'react'
import { basename } from 'path';

export default function Home() {
    const [pos, setPos] = useState(0);
    const [adj, setAdj] = useState(0);
    const [down, setDown] = useState(false);
    const [delta, setDelta] = useState(0);
    const [persis, setPersis] = useState(0);
    
    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (!down) {
        setPos(e.screenX);
      }
      else {
        let adjWid = (screen.width - 150) / (screen.width);
        let temp = Math.floor((((pos - e.screenX) / (screen.width)) * -100) * 1.2);
        if (persis + temp < -100) {temp = (-100 - persis)}
        if (persis + temp > 0) {temp = (0 - persis)}
        setDelta(persis + temp);
        setAdj((persis + temp) * adjWid);
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
          <ProjectTrack pos={delta} adj={adj}> 
            <ProjectBox pos={-50 + delta} src="a2-go" title="A2 Go!" date="WN 2023" skills={["AR", "Unity", "Mapbox"]} desc="This was the second project of EECS 498, which uses Unity and Mapbox to replicate both the Geo-locational and AR features of Pokemon Go, themed for Ann Arbor." link="https://www.youtube.com/watch?v=htyU0q1bU-s"/>
            <ProjectBox pos={-40 + delta} src="eecs-sim" title="EECS Student Simulator" date="WN 2023" skills={["VR", "Unreal 5", "Raycast"]} desc="This was the first project for EECS 498, XR and Society, in which we used VR for the first time through Unreal. We created a virtual replica of a real location." link="https://www.youtube.com/watch?v=gJyUNL-XNS8"/>
            <ProjectBox pos={-30 + delta} src="vue-weather" title="Vue.js Weather App" date="FA 2022" skills={["Vue.js", "API", "Javascript"]} desc="I used this project to learn Vue.js - The web app features a geolocational search, weather updates, and live temperature through the Open-Weather API." link=""/>
            <ProjectBox pos={-20 + delta} src="django-dz" title="Django Image Dropzone" date="WN 2022" skills={["Django", "Python", "Dropzone.js"]} desc="This project takes in images using Dropzone.js, and then stores them in a back-end database, to later be retrieved and displayed in a gallery." link=""/>
            <ProjectBox pos={-10 + delta} src="wordle" title="Wordle Likelihood Predictor" date="FA 2021" skills={["C / C++", "Terminal", "Linux"]} desc="Using the Ubuntu terminal, this program analyzed different starting words for both positional and non-positional lettler likelihood." link=""/>
            <ProjectBox pos={0 + delta} src="eng-club" title="THS Engineering Club" date="WN 2020" skills={["C / C++", "Arduino", "Leadership"]} desc="I founded this organization with a close friend in high school, in which I tought C++ for Arduino as the Co-Founder and Education Chair." link=""/>
            <ProjectBox pos={10 + delta} src="wii-nunchuk" title="Nintendo Nunchuk Battleship" date="FA 2018" skills={["C / C++", "Arduino", "CPU"]} desc="In this project, I rewired an old Nintendo Nunchuk with an 8x8 LED display to play Battleship versus a computer player that I wrote." link=""/>
            <ProjectBox pos={20 + delta} src="flappy-bird" title="Flappy Bird Replica" date="FA 2017" skills={["Java", "Greenfoot", "Game Dev"]} desc="This was my first real Computer Science, written in Java, that simulated the then-popular flappy bird mobile game, utilizing custom sprites." link=""/>
            <ProjectBox pos={30 + delta} src="valentine" title="Valentine's Day Operation" date="WN 2016" skills={["Circuit", "Buzzer", "DIY"]} desc="I made this device in middle school for Valentine's Day - a themed version of 'operation', where the tweezers are connected to a heart shaped ring." link=""/>
          </ProjectTrack>
        </div>
      </div>
      {/* <div className="w-full h-20 flex justify-center items-center">
        <div className="w-60 h-20 bg-lblue"></div>
      </div> */}
    </div>
  )
}
