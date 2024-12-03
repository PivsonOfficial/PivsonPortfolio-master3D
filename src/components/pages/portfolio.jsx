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
        <group position={[-1.063, 0.914, -4.484]} scale={[4.947, 0.732, 1.438]}>
          <mesh geometry={nodes.Cube120.geometry} material={materials.Material} />
          <mesh geometry={nodes.Cube120_1.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Cube120_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube120_3.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube120_4.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Cube120_5.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube120_6.geometry} material={materials['Material_1.005']} />
          <mesh geometry={nodes.Cube120_7.geometry} material={materials['Material_1.008']} />
        </group>
        <group position={[-20.83, 3.174, 1.338]} rotation={[0, 0, 0.22]} scale={[2.015, 1.138, 1.455]}>
          <mesh geometry={nodes.Cube152.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube152_1.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube152_2.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Cube152_3.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube152_4.geometry} material={materials['Material_1.012']} />
          <mesh geometry={nodes.Cube152_5.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Cube152_6.geometry} material={materials['Material_1.013']} />
          <mesh geometry={nodes.Cube152_7.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Cube152_8.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Cube152_9.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Cube152_10.geometry} material={materials['Material.014']} />
          <mesh geometry={nodes.Cube152_11.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Cube152_12.geometry} material={materials['Material.028']} />
          <mesh geometry={nodes.Cube152_13.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Cube152_14.geometry} material={materials['Material.030']} />
          <mesh geometry={nodes.Cube152_15.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Cube152_16.geometry} material={materials['Material.032']} />
          <mesh geometry={nodes.Cube152_17.geometry} material={materials['Material.033']} />
          <mesh geometry={nodes.Cube152_18.geometry} material={materials['Material.034']} />
          <mesh geometry={nodes.Cube152_19.geometry} material={materials['Material.035']} />
          <mesh geometry={nodes.Cube152_20.geometry} material={materials['Material.036']} />
          <mesh geometry={nodes.Cube152_21.geometry} material={materials['Material.037']} />
          <mesh geometry={nodes.Cube152_22.geometry} material={materials['Material.038']} />
          <mesh geometry={nodes.Cube152_23.geometry} material={materials['Material.039']} />
          <mesh geometry={nodes.Cube152_24.geometry} material={materials['Material.040']} />
          <mesh geometry={nodes.Cube152_25.geometry} material={materials['Material.041']} />
          <mesh geometry={nodes.Cube152_26.geometry} material={materials['Material.042']} />
          <mesh geometry={nodes.Cube152_27.geometry} material={materials['Material.043']} />
          <mesh geometry={nodes.Cube152_28.geometry} material={materials['Material.044']} />
          <mesh geometry={nodes.Cube152_29.geometry} material={materials['Material.045']} />
          <mesh geometry={nodes.Cube152_30.geometry} material={materials['Material.046']} />
          <mesh geometry={nodes.Cube152_31.geometry} material={materials['Material.047']} />
          <mesh geometry={nodes.Cube152_32.geometry} material={materials['Material.048']} />
          <mesh geometry={nodes.Cube152_33.geometry} material={materials['Material.049']} />
          <mesh geometry={nodes.Cube152_34.geometry} material={materials['Material.050']} />
          <mesh geometry={nodes.Cube152_35.geometry} material={materials['Material.051']} />
          <mesh geometry={nodes.Cube152_36.geometry} material={materials['Material.052']} />
          <mesh geometry={nodes.Cube152_37.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube152_38.geometry} material={materials['Material.054']} />
          <mesh geometry={nodes.Cube152_39.geometry} material={materials['Material.055']} />
        </group>
        <group position={[-1.71, 2.966, 7.766]} rotation={[2.792, 0, 0]} scale={[0.447, 0.183, 0.031]}>
          <mesh geometry={nodes.Cube269.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube269_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube269_2.geometry} material={materials['Material_1.001']} />
          <mesh geometry={nodes.Cube269_3.geometry} material={materials['Material.064']} />
          <mesh geometry={nodes.Cube269_4.geometry} material={materials['Material.065']} />
          <mesh geometry={nodes.Cube269_5.geometry} material={materials['Material_1.002']} />
          <mesh geometry={nodes.Cube269_6.geometry} material={materials['Material.101']} />
          <mesh geometry={nodes.Cube269_7.geometry} material={materials['Material.100']} />
          <mesh geometry={nodes.Cube269_8.geometry} material={materials.Material} />
          <mesh geometry={nodes.Cube269_9.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube269_10.geometry} material={materials['Material.104']} />
          <mesh geometry={nodes.Cube269_11.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube269_12.geometry} material={materials['Material.107']} />
        </group>
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
<h3>Jsem vášnivým hráčem a milovníkem počítačů. Ve volném čase se rád ponořím do světa 3D modelování v Blenderu, kde tvořím různé modely a scény. Od realistických postav až po futuristické prostředí, možnosti jsou nekonečné. Bydlím v malebném městě Holešov, ale mým druhým domovem je digitální svět. Mám velmi dobrou znalost anglického jazyka, což mi umožňuje být součástí globální komunity hráčů a tvůrců. Kromě hraní a modelování mě také baví programování a vytváření vlastních herních modifikací. Sní o tom, že bych se v budoucnu mohl podílet na vývoji počítačových her. Věřím, že technologie mohou být kreativním nástrojem a chtěl bych k tomu přispět svým dílem.</h3>                      

                  </div>
              </div>
             
          </section>
<div>


    <section id="section3" className='sekce3' >
    <h1 style={{ color: '#BDFFBC', backgroundColor: '#2B2C28' }} className="Omnenadpis page-section-heading text-center ">Mé projekty</h1>
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

