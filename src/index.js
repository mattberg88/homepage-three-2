import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import DNA from './components/dna'
import './styles.css'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
      <Suspense fallback={<></>}>{<DNA />}</Suspense>
    </Canvas>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

