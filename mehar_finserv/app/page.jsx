import Beams from '@/components/blocks/backgrounds/Beams/Beams'
import CardNav from '@/components/CardNav/CardNav'
import React from 'react'
import Image from 'next/image'
import Shuffle from '@/components/blocks/textanim/Shuffle/Shuffle'
import TargetCursor from '@/components/animations/TargetCursor/TargetCursor'
import AnimatedContent from '@/components/animations/AnimatedContent/AnimatedContent'
import GradualBlur from '@/components/animations/GradualBlur/GradualBlur'
const HomePage = () => {
  return (
    <>  

<div className='p-0 m-0'>


    <div className='w-screen fixed -z-30 h-[100%]  '>
        <Beams 
        beamWidth={50}
        beamHeight={30}
        beamNumber={25}
        lightColor="#00CE7C" 
        speed={5}
        noiseIntensity={1}
        scale={0.15}
        rotation={285}
        />
    </div>
    
    <div className='font-[San]'>
        <CardNav 
        ease='power3.out'/>
    </div>
  
<div className='h-screen w-screen text-center text-white flex justify-center items-center'>
<TargetCursor 
 spinDuration={1.8}
 hideDefaultCursor={true}/>
 <AnimatedContent
 className="m-0 p-0"
 distance={200}
 direction="vertical"
 reverse={false}
 duration={1.5}
 ease="power3.out"
 initialOpacity={0}
 animateOpacity
 scale={1}
 threshold={0.2}
 delay={0.5}
>

<div className='flex flex-col gap-4 items-center'>
  <h1 className='cursor-target text-[#ffffff] font-[San] font-bold text-8xl'>MEHAR <span className='text-[#1a369b]'>FINSERV</span></h1>
  <h2 className='cursor-target text-2xl w-[40%] font-[San] font-extralight text-[#918f8f] hover:text-[#ffffff]'>Get the loan you need—personal, business, or otherwise—faster and easier than ever. We cut the hassle and connect you directly to banks for quick approval, all without charging you a single service fee.</h2>  
  <button className='cursor-target text-lg rounded-lg bg-[#0B1A51] px-[1vw] py-[1vh] hover:text-[#00CE7C] font-[San]'>Get Started</button>
{/* <h2 className='cursor-target'>Finance</h2> */}
</div>
</AnimatedContent>
</div>

 <GradualBlur
    target="page"
    position="bottom"
    height="6rem"
    strength={5}
    divCount={10}
    curve="linearr"
    exponential={true}
    opacity={1}
    />

<div className='h-[100vh] z-10 w-screen flex justify-center items-center'>

</div>
    
    </div>
        </>

  )
}

export default HomePage