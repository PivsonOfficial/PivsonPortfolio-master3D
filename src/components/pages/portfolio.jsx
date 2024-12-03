import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/world.jpg'
import carousel1 from './images/vlak.png'
import carousel2 from './images/Vozidla.png'
import carousel3 from './images/lmgmodel.png'
import logo1 from './images/html.jpg'
import logo2 from './images/photoshop.jpg'
import logo3 from './images/blender.png'
import logo4 from './images/csharp.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import styles from './_portfolio_styles.css';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import {useState, Suspense, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF} from "@react-three/drei";


export function Model(props) {
    const { nodes, materials } = useGLTF('/type99lmg.gltf')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0, -20]} scale={[0.829, 0.799, 1.06]}>
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

  export function Vlak(props) {
    const { nodes, materials } = useGLTF('/vlak.gltf')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0, -20]} scale={[0.829, 0.799, 1.06]}>
        <mesh geometry={nodes.Cube161.geometry} material={nodes.Cube161.material} position={[-1.208, 0.349, 27.16]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[2.992, 0.265, 0.326]} />
        <mesh geometry={nodes.Cube027.geometry} material={materials['Material.001']} position={[-2.859, 5.732, 48.894]} scale={[2.12, 1, 14.725]} />
      </group>
      </group>
    )
  }
  
  export function Auto(props) {
    const { nodes, materials } = useGLTF('/vozidla.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Cube114.geometry} material={materials.Material} position={[-1.063, 0.914, -4.701]} scale={[4.947, 0.732, 1.438]} />
        <mesh geometry={nodes.Cube115.geometry} material={materials['Material.009']} position={[-0.713, -0.612, -2.815]} rotation={[-Math.PI, 0, 0]} scale={[-4.272, -0.614, -0.348]} />
        <mesh geometry={nodes.Cube116.geometry} material={materials['Material.009']} position={[4.082, -0.436, -6.714]} rotation={[0, 0, -2.951]} scale={[-0.683, -0.683, -0.205]} />
        <mesh geometry={nodes.Cube117.geometry} material={materials.Material} position={[-4.759, -0.072, -3.581]} rotation={[-0.183, -0.442, 2.573]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube118.geometry} material={materials['Material.009']} position={[-5.505, -0.559, -6.65]} rotation={[0, 0, 2.88]} scale={[-0.705, -0.705, -0.211]} />
        <mesh geometry={nodes.Cube119.geometry} material={materials['Material.007']} position={[2.983, -0.072, -5.877]} rotation={[-2.958, 0.442, -0.569]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube120.geometry} material={materials['Material.009']} position={[2.983, -0.072, -3.581]} rotation={[2.958, -0.442, 2.573]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube121.geometry} material={materials['Material.009']} position={[-1.489, 1.439, -4.731]} scale={[3.506, 0.429, 2.475]} />
        <group position={[-3.191, 1.493, -3.28]} scale={0.62}>
          <mesh geometry={nodes.Cube130_1.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Cube130_2.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Cube123.geometry} material={materials['Material.009']} position={[-3.25, 1.472, -6.327]} scale={0.62} />
        <mesh geometry={nodes.Cube124.geometry} material={materials.Material} position={[-0.736, 1.365, -4.698]} scale={[0.62, 0.62, 2.288]} />
        <mesh geometry={nodes.Cube125.geometry} material={materials.Material} position={[-3.219, 2.039, -6.333]} rotation={[0, 0, 1.577]} scale={0.464} />
        <mesh geometry={nodes.Cube126.geometry} material={materials['Material.008']} position={[-3.206, 3.282, -6.347]} rotation={[0, 0, 1.577]} scale={[0.56, 0.301, 0.301]} />
        <mesh geometry={nodes.Cube128.geometry} material={materials['Material.009']} position={[-3.173, 3.96, -3.284]} scale={[1, 0.105, 0.102]} />
        <mesh geometry={nodes.Cube129.geometry} material={materials['Material.009']} position={[-4.496, 3.96, -3.284]} rotation={[-Math.PI, 0, 0]} scale={[-0.181, -0.105, -0.102]} />
        <mesh geometry={nodes.Cube130.geometry} material={materials['Material.003']} position={[-2.075, 4.135, -3.274]} rotation={[0, 0, 0.03]} scale={[0.113, 0.061, 0.061]} />
        <mesh geometry={nodes.Cube131.geometry} material={materials['Material.003']} position={[-2.075, 3.999, -3.274]} rotation={[0, 0, 0.03]} scale={[0.113, 0.061, 0.061]} />
        <mesh geometry={nodes.Cube132.geometry} material={materials['Material.009']} position={[-5.505, -0.559, -2.808]} rotation={[0, 0, -0.262]} scale={[0.705, 0.705, 0.211]} />
        <mesh geometry={nodes.Cube133.geometry} material={materials['Material.009']} position={[4.082, -0.436, -2.744]} rotation={[0, 0, 0.191]} scale={[0.683, 0.683, 0.205]} />
        <mesh geometry={nodes.Cube134.geometry} material={materials.Material} position={[-4.759, -0.072, -5.877]} rotation={[0.183, 0.442, -0.569]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube135.geometry} material={materials['Material.009']} position={[-0.713, -0.612, -6.643]} rotation={[-Math.PI, 0, -Math.PI]} scale={[4.272, 0.614, 0.348]} />
        <mesh geometry={nodes.Cylinder041.geometry} material={materials['Material.002']} position={[2.254, 1.955, -4.701]} scale={[1.053, 0.088, 1.172]} />
        <mesh geometry={nodes.Cylinder042.geometry} material={materials['Material.007']} position={[1.992, 1.752, -4.701]} scale={[1.277, 0.5, 1.277]} />
        <mesh geometry={nodes.Cylinder054.geometry} material={materials['Material_1.005']} position={[-0.763, -1.519, -4.82]} rotation={[0, -1.565, -Math.PI]} scale={[-1.534, -1.534, -1.64]} />
        <mesh geometry={nodes.Cylinder055.geometry} material={materials['Material_1.008']} position={[-0.763, -1.519, -4.638]} rotation={[0, 1.565, 0]} scale={[1.534, 1.534, 1.64]} />
        <mesh geometry={nodes.Cube141.geometry} material={materials['Material.006']} position={[-16.999, -0.612, -2.275]} rotation={[-Math.PI, 0, -Math.PI]} scale={[4.272, 0.614, 0.348]} />
        <mesh geometry={nodes.Cube143.geometry} material={materials['Material.010']} position={[-21.045, -0.072, -1.508]} rotation={[0.183, 0.442, -0.569]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube145.geometry} material={materials['Material.006']} position={[-12.204, -0.436, 1.625]} rotation={[0, 0, 0.191]} scale={[0.683, 0.683, 0.205]} />
        <mesh geometry={nodes.Cube146.geometry} material={materials['Material.006']} position={[-21.791, -0.559, 1.56]} rotation={[0, 0, -0.262]} scale={[0.705, 0.705, 0.211]} />
        <mesh geometry={nodes.Cube147.geometry} material={materials['Material.006']} position={[-17.775, 1.439, -0.363]} scale={[3.506, 0.429, 2.475]} />
        <mesh geometry={nodes.Cube148.geometry} material={materials['Material.006']} position={[-13.303, -0.072, 0.787]} rotation={[2.958, -0.442, 2.573]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube149.geometry} material={materials['Material.001']} position={[-13.303, -0.072, -1.508]} rotation={[-2.958, 0.442, -0.569]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube150.geometry} material={materials['Material.006']} position={[-21.791, -0.559, -2.281]} rotation={[0, 0, 2.88]} scale={[-0.705, -0.705, -0.211]} />
        <mesh geometry={nodes.Cube151.geometry} material={materials['Material.010']} position={[-21.045, -0.072, 0.787]} rotation={[-0.183, -0.442, 2.573]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube152.geometry} material={materials['Material.006']} position={[-12.204, -0.436, -2.346]} rotation={[0, 0, -2.951]} scale={[-0.683, -0.683, -0.205]} />
        <mesh geometry={nodes.Cube153.geometry} material={materials['Material.006']} position={[-16.999, -0.612, 1.553]} rotation={[-Math.PI, 0, 0]} scale={[-4.272, -0.614, -0.348]} />
        <mesh geometry={nodes.Cube154.geometry} material={materials['Material.010']} position={[-17.349, 0.914, -0.333]} scale={[4.947, 0.732, 1.438]} />
        <mesh geometry={nodes.Cykinder050.geometry} material={materials['Material_1.012']} position={[-17.049, -1.519, -0.27]} rotation={[0, 1.565, 0]} scale={[1.534, 1.534, 1.64]} />
        <mesh geometry={nodes.Cylinder046.geometry} material={materials['Material.001']} position={[-14.294, 1.752, -0.333]} scale={[1.277, 0.5, 1.277]} />
        <mesh geometry={nodes.Cylinder047.geometry} material={materials['Material.004']} position={[-14.032, 1.955, -0.333]} scale={[1.053, 0.088, 1.172]} />
        <mesh geometry={nodes.Cylinder053.geometry} material={materials['Material_1.013']} position={[-17.049, -1.519, -0.451]} rotation={[0, -1.565, -Math.PI]} scale={[-1.534, -1.534, -1.64]} />
        <group position={[-21.312, 3.174, -0.388]} rotation={[0, 0, 0.22]} scale={[2.015, 1.138, 1.455]}>
          <mesh geometry={nodes.Cube152_1.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube152_2.geometry} material={materials['Material.006']} />
        </group>
        <mesh geometry={nodes.Cube179.geometry} material={materials['Material.011']} position={[-21.823, 1.381, 0.888]} rotation={[3.126, 0.077, 0.001]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube180.geometry} material={materials['Material.012']} position={[-21.823, 1.381, -1.57]} rotation={[-3.126, -0.077, -3.141]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube181.geometry} material={materials['Material.013']} position={[-18.616, 1.595, -1.57]} rotation={[-3.091, -0.06, -2.636]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube182.geometry} material={materials['Material.014']} position={[-18.616, 1.595, 0.791]} rotation={[3.091, 0.06, 0.506]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube183.geometry} material={materials['Material.015']} position={[-18.352, 2.999, -1.058]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube184.geometry} material={materials['Material.028']} position={[-18.352, 2.999, -0.747]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube185.geometry} material={materials['Material.029']} position={[-18.352, 2.999, -0.461]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube186.geometry} material={materials['Material.030']} position={[-18.352, 2.999, -0.175]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube187.geometry} material={materials['Material.031']} position={[-18.352, 2.999, 0.085]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube188.geometry} material={materials['Material.032']} position={[-18.352, 2.999, 0.335]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube189.geometry} material={materials['Material.033']} position={[-18.658, 3.213, 0.269]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube190.geometry} material={materials['Material.034']} position={[-18.658, 3.213, 0.013]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube191.geometry} material={materials['Material.035']} position={[-18.658, 3.213, -0.241]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube192.geometry} material={materials['Material.036']} position={[-18.658, 3.213, -1.028]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube193.geometry} material={materials['Material.037']} position={[-18.658, 3.213, -0.767]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube194.geometry} material={materials['Material.038']} position={[-18.658, 3.213, -0.517]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube195.geometry} material={materials['Material.039']} position={[-18.85, 3.459, -0.606]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube196.geometry} material={materials['Material.040']} position={[-18.85, 3.459, -0.857]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube197.geometry} material={materials['Material.041']} position={[-18.85, 3.459, -0.122]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube198.geometry} material={materials['Material.042']} position={[-18.85, 3.459, 0.128]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube199.geometry} material={materials['Material.043']} position={[-18.85, 3.459, -0.362]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube200.geometry} material={materials['Material.044']} position={[-19.11, 3.656, 0.026]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube201.geometry} material={materials['Material.045']} position={[-19.11, 3.656, -0.224]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube202.geometry} material={materials['Material.046']} position={[-19.11, 3.656, -0.761]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube203.geometry} material={materials['Material.047']} position={[-19.11, 3.656, -0.511]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube204.geometry} material={materials['Material.048']} position={[-19.332, 3.862, -0.118]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube205.geometry} material={materials['Material.049']} position={[-19.332, 3.862, -0.369]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube206.geometry} material={materials['Material.050']} position={[-19.332, 3.862, -0.621]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube207.geometry} material={materials['Material.051']} position={[-19.513, 4.115, -0.504]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <mesh geometry={nodes.Cube208.geometry} material={materials['Material.052']} position={[-19.513, 4.115, -0.254]} rotation={[0, 0, 0.344]} scale={[0.206, 0.111, 0.111]} />
        <group position={[-22.667, 3.684, -0.388]} rotation={[0, 0, 0.22]} scale={[1.167, 0.659, 0.843]}>
          <mesh geometry={nodes.Cube209_1.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube209_2.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Cube210.geometry} material={materials['Material.054']} position={[-19.314, 2.112, -0.435]} rotation={[-1.58, -0.522, -1.753]} scale={[-1.056, -0.097, -0.097]} />
        <mesh geometry={nodes.Cube211.geometry} material={materials['Material.055']} position={[-17.022, 1.365, -0.374]} scale={[0.62, 0.62, 2.288]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material_1.001']} position={[-0.335, -1.519, 4.988]} rotation={[0, -1.565, -Math.PI]} scale={[-1.534, -1.534, -1.64]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.064']} position={[2.682, 1.955, 5.107]} scale={[1.053, 0.088, 1.172]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.065']} position={[2.42, 1.752, 5.107]} scale={[1.277, 0.5, 1.277]} />
        <mesh geometry={nodes.Cykinder001.geometry} material={materials['Material_1.002']} position={[-0.335, -1.519, 5.169]} rotation={[0, 1.565, 0]} scale={[1.534, 1.534, 1.64]} />
        <mesh geometry={nodes.Cube248.geometry} material={materials['Material.101']} position={[-0.635, 0.914, 5.107]} scale={[4.947, 0.732, 1.438]} />
        <mesh geometry={nodes.Cube249.geometry} material={materials['Material.100']} position={[-0.285, -0.612, 6.993]} rotation={[-Math.PI, 0, 0]} scale={[-4.272, -0.614, -0.348]} />
        <mesh geometry={nodes.Cube250.geometry} material={materials['Material.100']} position={[4.51, -0.436, 3.093]} rotation={[0, 0, -2.951]} scale={[-0.683, -0.683, -0.205]} />
        <mesh geometry={nodes.Cube251.geometry} material={materials['Material.101']} position={[-4.331, -0.072, 6.227]} rotation={[-0.183, -0.442, 2.573]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube252.geometry} material={materials['Material.100']} position={[-5.077, -0.559, 3.158]} rotation={[0, 0, 2.88]} scale={[-0.705, -0.705, -0.211]} />
        <mesh geometry={nodes.Cube253.geometry} material={materials['Material.065']} position={[3.411, -0.072, 3.931]} rotation={[-2.958, 0.442, -0.569]} scale={[-1.259, -0.116, -0.116]} />
        <mesh geometry={nodes.Cube254.geometry} material={materials['Material.100']} position={[3.411, -0.072, 6.227]} rotation={[2.958, -0.442, 2.573]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube255.geometry} material={materials['Material.100']} position={[-1.061, 1.439, 5.077]} scale={[3.506, 0.429, 2.475]} />
        <mesh geometry={nodes.Cube256.geometry} material={materials['Material.100']} position={[-5.077, -0.559, 7]} rotation={[0, 0, -0.262]} scale={[0.705, 0.705, 0.211]} />
        <mesh geometry={nodes.Cube257.geometry} material={materials['Material.100']} position={[4.51, -0.436, 7.064]} rotation={[0, 0, 0.191]} scale={[0.683, 0.683, 0.205]} />
        <mesh geometry={nodes.Cube258.geometry} material={materials['Material.101']} position={[-4.331, -0.072, 3.931]} rotation={[0.183, 0.442, -0.569]} scale={[1.259, 0.116, 0.116]} />
        <mesh geometry={nodes.Cube259.geometry} material={materials['Material.100']} position={[-0.285, -0.612, 3.165]} rotation={[-Math.PI, 0, -Math.PI]} scale={[4.272, 0.614, 0.348]} />
        <mesh geometry={nodes.Cube216.geometry} material={materials.Material} position={[-1.735, 2.791, 3.157]} rotation={[0, 1.56, -Math.PI]} scale={[-0.29, -1, -1.747]} />
        <mesh geometry={nodes.Sphere.geometry} material={materials['Material.006']} position={[-1.711, 2.682, 3.333]} scale={0.786} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.006']} position={[-1.292, 2.752, 2.37]} rotation={[-1.563, -0.003, -0.343]} scale={[0.071, 0.328, 0.071]} />
        <group position={[-1.479, 2.736, 2.571]} rotation={[-Math.PI, 0.311, -Math.PI]} scale={[-0.447, -0.183, -0.031]}>
          <mesh geometry={nodes.Cube268.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube268_1.geometry} material={materials['Material.001']} />
        </group>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials['Material.006']} position={[-1.495, 2.752, 2.298]} rotation={[-1.563, -0.003, -0.343]} scale={[0.071, 0.328, 0.071]} />
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.006']} position={[-1.326, 2.752, 2.463]} rotation={[-1.563, -0.003, -0.343]} scale={[0.108, 0.135, 0.109]} />
        <mesh geometry={nodes.Cylinder023.geometry} material={materials['Material.006']} position={[-1.527, 2.752, 2.391]} rotation={[-1.563, -0.003, -0.343]} scale={[0.108, 0.135, 0.109]} />
        <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.006']} position={[-1.711, 2.682, 6.818]} rotation={[0, 0, -Math.PI]} scale={-0.786} />
        <mesh geometry={nodes.Cylinder027.geometry} material={materials['Material.006']} position={[-1.816, 3.034, 7.688]} rotation={[1.213, 0, -Math.PI]} scale={[-0.108, -0.135, -0.109]} />
        <mesh geometry={nodes.Cylinder037.geometry} material={materials['Material.006']} position={[-1.602, 3.034, 7.688]} rotation={[1.213, 0, -Math.PI]} scale={[-0.108, -0.135, -0.109]} />
        <mesh geometry={nodes.Cylinder043.geometry} material={materials['Material.006']} position={[-1.817, 3.068, 7.781]} rotation={[1.213, 0, -Math.PI]} scale={[-0.071, -0.328, -0.071]} />
        <mesh geometry={nodes.Cylinder044.geometry} material={materials['Material.006']} position={[-1.602, 3.068, 7.781]} rotation={[1.213, 0, -Math.PI]} scale={[-0.071, -0.328, -0.071]} />
        <group position={[-1.71, 2.966, 7.549]} rotation={[2.792, 0, 0]} scale={[0.447, 0.183, 0.031]}>
          <mesh geometry={nodes.Cube269.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube269_1.geometry} material={materials['Material.001']} />
        </group>
        <mesh geometry={nodes.Cube215.geometry} material={materials.Material} position={[-1.735, 2.791, 6.993]} rotation={[0, -1.56, 0]} scale={[0.29, 1, 1.747]} />
        <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.006']} position={[-3.59, 2.691, 5.063]} rotation={[-Math.PI, 1.561, -Math.PI]} scale={0.786} />
        <mesh geometry={nodes.Cylinder045.geometry} material={materials['Material.006']} position={[-4.609, 2.504, 4.965]} rotation={[-1.571, -0.243, 1.581]} scale={[0.071, 0.328, 0.071]} />
        <mesh geometry={nodes.Cylinder050.geometry} material={materials['Material.006']} position={[-4.607, 2.504, 5.18]} rotation={[-1.571, -0.243, 1.581]} scale={[0.071, 0.328, 0.071]} />
        <mesh geometry={nodes.Cylinder056.geometry} material={materials['Material.006']} position={[-4.514, 2.528, 4.964]} rotation={[-1.571, -0.243, 1.581]} scale={[0.108, 0.135, 0.109]} />
        <mesh geometry={nodes.Cylinder057.geometry} material={materials['Material.006']} position={[-4.512, 2.529, 5.178]} rotation={[-1.571, -0.243, 1.581]} scale={[0.108, 0.135, 0.109]} />
        <mesh geometry={nodes.Cube217.geometry} material={materials.Material} position={[-3.765, 2.8, 5.089]} rotation={[-Math.PI, 0.001, 0]} scale={[-0.29, -1, -1.747]} />
        <group position={[-4.359, 2.55, 5.07]} rotation={[1.53, -1.32, 1.531]} scale={[-0.447, -0.183, -0.031]}>
          <mesh geometry={nodes.Cube272.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube272_1.geometry} material={materials['Material.001']} />
        </group>
        <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.006']} position={[0.059, 2.691, 5.063]} rotation={[0, 1.561, -Math.PI]} scale={-0.786} />
        <mesh geometry={nodes.Cylinder058.geometry} material={materials['Material.006']} position={[0.979, 2.761, 5.178]} rotation={[1.571, 0.008, 1.581]} scale={[-0.108, -0.135, -0.109]} />
        <mesh geometry={nodes.Cylinder059.geometry} material={materials['Material.006']} position={[0.981, 2.761, 4.964]} rotation={[1.571, 0.008, 1.581]} scale={[-0.108, -0.135, -0.109]} />
        <mesh geometry={nodes.Cylinder060.geometry} material={materials['Material.006']} position={[1.077, 2.761, 5.18]} rotation={[1.571, 0.008, 1.581]} scale={[-0.071, -0.328, -0.071]} />
        <mesh geometry={nodes.Cylinder061.geometry} material={materials['Material.006']} position={[1.079, 2.761, 4.965]} rotation={[1.571, 0.008, 1.581]} scale={[-0.071, -0.328, -0.071]} />
        <group position={[0.826, 2.745, 5.07]} rotation={[Math.PI, -1.561, 0]} scale={[0.447, 0.183, 0.031]}>
          <mesh geometry={nodes.Cube273.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube273_1.geometry} material={materials['Material.007']} />
        </group>
        <mesh geometry={nodes.Cube221.geometry} material={materials.Material} position={[0.234, 2.8, 5.089]} rotation={[0, 0.001, 0]} scale={[0.29, 1, 1.747]} />
        <group position={[-1.732, 3.436, 5.113]} scale={[1.799, 0.532, 1.774]}>
          <mesh geometry={nodes.Cube275.geometry} material={materials['Material.104']} />
          <mesh geometry={nodes.Cube275_1.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Cube223.geometry} material={materials['Material.107']} position={[-1.061, 1.873, 5.077]} scale={[3.223, 0.1, 2.275]} />
      </group>
    )
  };

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);
function Portfolio() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [fullscreen, setFullscreen] = useState(true);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (

      <>
          <section id="section1" className="pozadiHome">
              <div className="Homepage" >
                          <div>                          
                      <div className="animace">
                          <Card style={{ width: '100%', background: '#2B2C28'}}>

                              <Card.Body>

                                  <Card.Text>
                                      <TypeAnimation
                                          sequence={[
                                              'Vítejte na mém portfoliu',
                                              1000,
                                              'Jmenuji se Pivson',
                                              1000,
                                              'Umím tvořit grafické návrhy, ale i programovat',
                                              1000,
                                              'Pokud potřebujete návrháře/grafika napište mi',
                                              1000
                                          ]}

                                          speed={30}
                                          style={{ fontSize: '180%', display: 'inline-block', color: "aliceblue"}}
                                      />
                                  </Card.Text>
                                  <Button href="#section3" variant="primary">Mé projekty</Button>
                              </Card.Body>
                          </Card>

                          <div className="profil">

                          <Container>
                                  <Col xs={10} md={9}>
                                      <Image src={img1} thumbnail />
                                  </Col>
                          </Container>

                      </div>
                      </div>
                      
                      </div>   

              </div>
          </section>

          <div>

          </div>

          <section id="section2" >

              <div>
                  <div className="Omne" >
                      <h1 style={{ color: '#BDFFBC' }} className="Omnenadpis page-section-heading text-center ">O mně</h1>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.orem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum reruorem ips, consectetuer adipiscing elit. Itaque earum reru Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent id justo in neque elementum ultrices. Nam quis nulla. Proin mattis lacinia justo. Etiam quis quam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Fusce aliquam vestibulum ipsum. Proin in tellus sit amet nibh dignissim sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tel</h5>
                      <br></br>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.orem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum reruorem ips, consectetuer adipiscing elit. Itaque earum reru Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent id justo in neque elementum ultrices. Nam quis nulla. Proin mattis lacinia justo. Etiam quis quam. Neque porro quisquam est, qui dolorem ipsunam aliquam quaerat voluptatem. Fusce aliquam vestibulum ipsum. Proin in tellus sit amet nibh dignissim sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tel</h5>
                      <br></br>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>

                  </div>
              </div>

          </section>
<div>


    <section id="section3" >
        <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Projekt1</h3>
                    <Button variant="primary" onClick={handleShow2}>
        Detail na 3D objekt
      </Button>

      <Modal fullscreen={fullscreen}
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>3D ZOBRAZENÍ</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
            <Canvas camera={{fov:70, position: [50,40,25]}}>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Vlak /> 
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
 
                </Suspense>
                <Environment preset = 'sunset' />
            </Canvas>     
            </Modal.Body>
        
      </Modal>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Projekt2</h3>

                    <Button variant="primary" onClick={handleShow3}>
        Detail na 3D objekt
      </Button>

      <Modal fullscreen={fullscreen}
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>3D ZOBRAZENÍ</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
            <Canvas camera={{fov:70, position: [50,40,25]}}>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Auto /> 
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
 
                </Suspense>
                <Environment preset = 'sunset' />
            </Canvas>     
            </Modal.Body>
        
      </Modal>




                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Projekt3</h3>
                   <Button variant="primary" onClick={handleShow}>
        Detail na 3D objekt
      </Button>

      <Modal fullscreen={fullscreen}
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>3D ZOBRAZENÍ</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
            <Canvas camera={{fov:70, position: [50,40,25]}}>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Model /> 
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
 
                </Suspense>
                <Environment preset = 'sunset' />
            </Canvas>     
            </Modal.Body>
        
      </Modal>

                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    </section>
</div>



<section id="section4">
    <div className="projekty" style={{ backgroundColor: '#2B2C28' }}>
        <h1 style={{ color: '#BDFFBC' }} className="skillynadpis page-section-heading text-center">Můj flex</h1>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo1} />
                            <Card.Body>
                                <Card.Title>Html</Card.Title>
                                <Card.Text>
                                Vytvořil jsem několik webových aplikací od jednoduchých portfolií až po e-shopy. HTML mi umožňuje definovat strukturu stránek a zajistit jejich správné zobrazení .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo2} />
                            <Card.Body>
                                <Card.Title>Adobe Photoshop</Card.Title>
                                <Card.Text>
                                Pomocí Photoshopu jsem vytvořil řadu grafických návrhů, od vizitek a letáků až po bannery pro webové stránky. Mám znalost nástrojů pro práci s vrstvami a maskami.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo3} />
                            <Card.Body>
                                <Card.Title>Blender</Card.Title>
                                <Card.Text>
                                Pomocí Blenderu jsem realizoval několik 3D animací a vizualizací. Mám zkušenosti s tvorbou realistických materiálů a nasvětlení scén.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo4} />
                            <Card.Body>
                                <Card.Title>Programování C#</Card.Title>
                                <Card.Text>
                                V C# jsem vytvořil několik aplikací pro automatizaci úkolů a zpracování dat. Mám znalost objektově orientovaného programování a algoritmů.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
</section>

      </>
    );
}

export default Portfolio;

