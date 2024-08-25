import React from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";

const Cyl = () => {
    let tex =  useTexture('./image.jpeg');
    let cyl = useRef(null);
    useFrame((state,delta)=>{
      cyl.current.rotation.y +=delta;
    });
  return (
    <group rotation={[0,1.4,0.5]}>
      <mesh ref={cyl} rotation={[0,1.4,0.5]}>
    <cylinderGeometry  args={[1,1,1,30,30,true]}/>
    <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
  </mesh>
    </group>
  )
}

export default Cyl