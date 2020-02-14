import * as THREE from 'three'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { createPortal, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import DNA from './dna'

extend({ EffectComposer, RenderPass })

export default function Main() {
  const onHover = (e) => {
    const { name, material } = e.object
    console.log(name)
    if (name.includes('face001')) {
      e.object.material.color.r = 2
    }
    if (name.includes('face002')) {
      e.object.material.color.b = 2
    }    
    if (name.includes('face003')) {
      e.object.material.color.g = 2
    }
  }
  const onExit = (e) => {
    console.log(e.object.material.color, 'hover')
    const { name, material } = e.object
    material.color = { r: 1, g: 1, b: 1 }
  }
  const [scene] = useState(() => new THREE.Scene())
  const composer = useRef()
  const { gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(({ gl }) => void ((gl.autoClear = true), composer.current.render()), 1)
  return createPortal(
    <>
      <effectComposer ref={composer} args={[gl]}>
        {scene && (
          <>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
          </>
        )}
      </effectComposer>
      <ambientLight />
      <spotLight position={[100, 10, 10]} />
      <mesh 
        onPointerOver={e => onHover(e)}
        onPointerOut={e => onExit(e)}
      >
      <Suspense fallback={<React.Fragment/>}>{<DNA />}</Suspense>
      </mesh>
    </>,
    scene
  )
}