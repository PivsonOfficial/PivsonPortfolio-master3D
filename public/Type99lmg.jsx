/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 type99lmg.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/type99lmg.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.041, 0.523, 8.013]} scale={[0.829, 0.799, 1.06]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube004_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube004_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube004_5.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/type99lmg.gltf')
