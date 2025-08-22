import Beams from '@/components/blocks/backgrounds/Beams/Beams'
import CardNav from '@/components/CardNav/CardNav'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    <div className='h-screen w-screen'>
        <Beams 
        beamWidth={3}
        beamHeight={25}
        beamNumber={18}
        lightColor="#00CE7C" 
        speed={5}
        noiseIntensity={0}
        scale={0.19}
        rotation={287}
        />
    </div>
    <div>
        <CardNav />
    </div>
    </div>
  )
}

export default HomePage