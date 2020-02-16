import * as THREE from 'three'
import React, { useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import Controls from './components/controls'
import PieChart from './components/charts/pie' 
import LineChart from './components/charts/line' 

import Main from './components/main'
import { Grid, Menu, Header, Loader, Image } from 'semantic-ui-react'
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
  const [activeItem, setActiveItem] = useState('viewer')
  const [loading, setLoading] = useState(true)
  const handleItemClick = (e, props) => {
    console.log(props)
    setActiveItem(props.name)
  }

  const onLoaded = () => {
    setLoading(false)
  }

  return (
    <Grid padded={true} celled={true} divided={true} relaxed={true} horizontalAlign='middle'>
      <Grid.Row >
        <Grid.Column>
          <Menu inverted>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='viewer'
              active={activeItem === 'viewer'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
            />
            <Menu.Item
              position='right'
            >
              <Image src='unite-logo-transparency.png' size='tiny' />

            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row >
      <Grid.Row >
        <Grid.Column name='chart_column' width={4} textAlign='center'>
          <Header className='genome_interface_header'>
            <Image className='genome_interface_logo' src='unite-symbol.png' size='tiny' />Genome Interface
          </Header>
          <PieChart/>
          <LineChart/>
        </Grid.Column>
        <Grid.Column name='viewer_column'width={12}>
          <Loader active={loading} />
          <Canvas onCreated={() => onLoaded()}>
            <Content />
          </Canvas>
      

        </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}

