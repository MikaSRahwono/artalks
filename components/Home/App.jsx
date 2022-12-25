import { useParallax } from 'react-scroll-parallax'
import React, { useRef } from 'react'
import Image from 'next/legacy/image'
import '../../styles/Home.module.css'

import {App as AboutUs} from './Aboutus/App'

export const App = () => {
    const target = useRef(null)
    const layer2 = useParallax({
        speed: 100,
        targetElement: target.current
    })
    const layer3 = useParallax({
        speed: 200,
        targetElement: target.current
    })
    const layer4 = useParallax({
        speed: 300,
        targetElement: target.current
    })
    const layer5 = useParallax({
        speed: 400,
        targetElement: target.current
    })
    const layer6 = useParallax({
        speed: 500,
        targetElement: target.current
    })
    const layer7 = useParallax({
        speed: 600,
        targetElement: target.current
    })
    const cover = useParallax({
        speed: 600,
        targetElement: target.current
    })
    const text = useParallax({
        speed: 150,
        targetElement: target.current
    })

    return(
        <div>
        <div ref={target} style={{
            backgroundImage: "url('/home/Layer1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
        }} className="w-screen">
            <div ref={layer2.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer2.png"} layout='fill'></Image>
            </div>
            <div ref={layer3.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer3.png"} layout='fill' ></Image>
            </div>
            <div ref={layer4.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer4.png"} layout='fill' ></Image>
            </div>
            <div ref={layer5.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer5.png"} layout='fill'></Image>
            </div>
            <div ref={text.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/TEXT.png"} layout='fill' objectFit='contain'></Image>
            </div>
            <div ref={layer6.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer6.png"} layout='fill'></Image>
            </div>
            <div ref={layer7.ref} className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/Layer7.png"} layout='fill'></Image>
            </div>
            <div className="absolute" style={{
                width: '100%', 
                height: '100%', }}>
                <Image src={"/home/SCROLL.png"} layout='fill' objectFit='contain'></Image>
            </div>
        </div>
        <div ref={cover.ref} style={{
            height: '200vh',
            backgroundColor: '#441944',
            position: 'relative',
            zIndex: '5'
        }}>
            <AboutUs></AboutUs>
        </div>
        </div>
    )
}