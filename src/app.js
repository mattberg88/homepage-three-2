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
const onCanvasClick = (e) => {
  e.preventDefault()
}
export default function App() {
  return (
    <Grid padded={true}>
      <Grid.Row >
        <Grid.Column width={4} textAlign='center' floated='left'>
          <Image src='unite-logo.png' size='tiny' />
          <Header >
            Genome Viewer
          </Header>
        </Grid.Column>
        <Grid.Column width={12}>
          <Canvas onClick={onCanvasClick}>
            <Content />
          </Canvas>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}

