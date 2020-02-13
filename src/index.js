import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import DNA from './components/dna'
import { Grid, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './styles.css'

function App() {
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
      <Grid.Row columns={1}>
        <Grid.Column className='canvas_viewer'>
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<></>}>{<DNA />}</Suspense>
          </Canvas>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

