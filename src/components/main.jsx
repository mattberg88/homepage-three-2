import * as THREE from 'three';
import React, {
  Suspense, useRef, useEffect, useState,
} from 'react';
import {
  createPortal, extend, useFrame, useThree,
} from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import DNA from './dna';

extend({ EffectComposer, RenderPass, FilmPass });

export default function Main({ setSelected }) {
  useEffect(() => {
  }, []);
  const onClick = (e) => {
    switch (e.object.name) {
      case 'Strand':
        return setSelected(
          'Sugar-Phosphate Backbone: An important stuctural component of DNA which consists of 5-carbon deoxyribose sugars and phosphate groups.',
        );
      case 'Thymine':
        return setSelected('Thymine: A smaller pyrimidine DNA base.');
      case 'Cytosine':
        return setSelected('Cytosine: A smaller pyrimidine DNA base.');
      case 'Adenine':
        return setSelected('Adenine: A large purine DNA base.');
      case 'Guanine':
        return setSelected('Guanine: A large purine DNA base.');
      default:
        return null;
    }
  };
  const onHover = (e) => {
    const { color } = e.object.material;
    color.r += 0.1;
    color.g += 0.1;
    color.b += 0.1;
  };
  const onExit = (e) => {
    const { color } = e.object.material;
    color.r -= 0.1;
    color.g -= 0.1;
    color.b -= 0.1;
  };

  const [scene] = useState(() => new THREE.Scene());
  const composer = useRef();
  const { gl, size, camera } = useThree();
  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
  // eslint-disable-next-line no-shadow, no-sequences, no-return-assign, no-param-reassign
  useFrame(({ gl }) => ((gl.autoClear = true), composer.current.render()), 1);
  return createPortal(
    <>
      <effectComposer ref={composer} args={[gl]}>
        {scene && (
          <>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
          </>
        )}
      </effectComposer>
      <ambientLight intensity={1.5} />
      <spotLight position={[50, 10, 10]} />
      <mesh
        onPointerDown={(e) => onClick(e)}
        onPointerOver={(e) => onHover(e)}
        onPointerOut={(e) => onExit(e)}
      >
        <Suspense fallback={<></>}><DNA /></Suspense>
      </mesh>
    </>,
    scene,
  );
}
