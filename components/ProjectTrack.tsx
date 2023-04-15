import ProjectBox from '../components/ProjectBox'
import { Children, useRef, useEffect, useState } from 'react'

export default function ProjectTrack({ pos }: { pos: number }) {
    const boxWid = 240;
    const count = 9;
    const slideRef = useRef<HTMLDivElement>(null);
    const [slideWid, setSlideWid] = useState(0);

    useEffect(() => {
        if (slideRef.current) {
          setSlideWid(slideRef.current.clientWidth);
        }
      }, []);

    return (
        <div ref={slideRef} className={`flex min-w-max gap-x-8`}
            style={{transform: `translate(${pos*((slideWid-boxWid)/slideWid)}%, 0%)`, transition: `transform 1s ease-out`}}>
            <ProjectBox offset={0/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="a2-go" title="A2 Go!" date="WN 2023" skills={["AR", "Unity", "Mapbox"]} desc="This was the second project of EECS 498, which uses Unity and Mapbox to replicate both the Geo-locational and AR features of Pokemon Go, themed for Ann Arbor." link="https://www.youtube.com/watch?v=htyU0q1bU-s"/>
            <ProjectBox offset={1/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="eecs-sim" title="EECS Student Simulator" date="WN 2023" skills={["VR", "Unreal 5", "Raycast"]} desc="This was the first project for EECS 498, XR and Society, in which we used VR for the first time through Unreal. We created a virtual replica of a real location." link="https://www.youtube.com/watch?v=gJyUNL-XNS8"/>
            <ProjectBox offset={2/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="vue-weather" title="Vue.js Weather App" date="FA 2022" skills={["Vue.js", "API", "Javascript"]} desc="I used this project to learn Vue.js - The web app features a geolocational search, weather updates, and live temperature through the Open-Weather API." link=""/>
            <ProjectBox offset={3/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="django-dz" title="Django Image Dropzone" date="WN 2022" skills={["Django", "Python", "Dropzone.js"]} desc="This project takes in images using Dropzone.js, and then stores them in a back-end database, to later be retrieved and displayed in a gallery." link=""/>
            <ProjectBox offset={4/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="wordle" title="Wordle Likelihood Predictor" date="FA 2021" skills={["C / C++", "Terminal", "Linux"]} desc="Using the Ubuntu terminal, this program analyzed different starting words for both positional and non-positional lettler likelihood." link=""/>
            <ProjectBox offset={5/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="eng-club" title="THS Engineering Club" date="WN 2020" skills={["C / C++", "Arduino", "Leadership"]} desc="I founded this organization with a close friend in high school, in which I tought C++ for Arduino as the Co-Founder and Education Chair." link=""/>
            <ProjectBox offset={6/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="wii-nunchuk" title="Nintendo Nunchuk Battleship" date="FA 2018" skills={["C / C++", "Arduino", "CPU"]} desc="In this project, I rewired an old Nintendo Nunchuk with an 8x8 LED display to play Battleship versus a computer player that I wrote." link=""/>
            <ProjectBox offset={7/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="flappy-bird" title="Flappy Bird Replica" date="FA 2017" skills={["Java", "Greenfoot", "Game Dev"]} desc="This was my first real Computer Science, written in Java, that simulated the then-popular flappy bird mobile game, utilizing custom sprites." link=""/>
            <ProjectBox offset={8/(count)} pos={pos*((slideWid-boxWid)/slideWid)} src="valentine" title="Valentine's Day Operation" date="WN 2016" skills={["Circuit", "Buzzer", "DIY"]} desc="I made this device in middle school for Valentine's Day - a themed version of 'operation', where the tweezers are connected to a heart shaped ring." link=""/>
        </div>
    );
}