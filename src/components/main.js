import * as THREE from 'three'

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { createPortal, extend, useFrame, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import DNA from './dna'

extend({ EffectComposer, RenderPass })

export default function Main() {
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
      <mesh>
      <Suspense fallback={<></>}>{<DNA />}</Suspense>
      </mesh>
    </>,
    scene
  )
}