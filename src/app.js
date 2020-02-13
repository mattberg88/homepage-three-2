import * as THREE from 'three'
import React, { useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import Controls from './components/controls'
import Main from './components/main'
import { Grid, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Content() {
  const { size, setDefaultCamera } = useThree()
  const [camera] = useState(() => {
    const cam = new THREE.PerspectiveCamera(55, size.width / size.height)
    cam.position.set(0, 0, 10)
    setDefaultCamera(cam)
    return cam
  })
  useMemo(() => (camera.aspect = size.width / size.height), [size, camera.aspect])
  useFrame(() => camera.updateMatrixWorld())
  return (
    <group>
      <Controls />
      <Main />
    </group>
  )
}

export default function App() {
  return (
    <Grid padded={true} columns={3}>
      <Grid.Row columns={3}>
        <Grid.Column textAlign='left' >
          <Image src='unite-logo.png' size='tiny' />
        </Grid.Column>
        <Grid.Column textAlign='center' >
            <Header icon>
              Genome Viewer
            </Header>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column />
        <Grid.Column className='canvas_viewer'>
          <Canvas>
            <Content />
          </Canvas>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

