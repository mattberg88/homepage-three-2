import * as THREE from 'three'
import React, { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { createPortal, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import DNA from './dna'
extend({ EffectComposer, RenderPass, FilmPass })

export default function Main({setSelected}) {
  useEffect(() => {
  }, [])
  const onHover = (e) => {
    const { color } = e.object.material
    color.r += 0.1
    color.g += 0.1
    color.b += 0.1
    switch(e.object.name) {
      case 'Strand':
        return setSelected('Sugar-Phosphate Backbone')
      case 'Thymine':
        return setSelected('Thymine: One of the four DNA bases')
      case 'Cytosine':
        return setSelected('Cytosine: One of the four DNA bases')
      case 'Adenine':
        return setSelected('Adenine: One of the four DNA bases')
      case 'Guanine':
        return setSelected('Guanine: One of the four DNA bases')
    }
  }
  const onExit = (e) => {
    const { color } = e.object.material
    color.r -= 0.1
    color.g -= 0.1
    color.b -= 0.1
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
      <ambientLight intensity={1.5}/>
      <spotLight position={[50, 10, 10]} />
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