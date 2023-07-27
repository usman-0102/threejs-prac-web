import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { AccumulativeShadows,RandomizedLight } from '@react-three/drei'
const Backdrop = () => {
    const shadows=useRef();
  return (
    <AccumulativeShadows position={[0,0,-0.14]} ref={shadows}
    temporal
    frames={60}
    alphaTest={0.05}
    scale={10}
    rotation={[Math.PI/2,0,0]}>
     <RandomizedLight 
      amount={6}
      radius={8}
    intensity={0.25}
    ambient={0.25}
    position={[-5,-5,-10]}
       />  
    
    
      
    </AccumulativeShadows>
  )
}

export default Backdrop