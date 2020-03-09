import React, { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const ref = useRef();
  useFrame((e) => {
    ref.current.object.position.x = e.mouse.x;
    ref.current.object.position.y = e.mouse.y / 2;
    ref.current.minDistance = 5;
    ref.current.maxDistance = 5;
    return ref.current.update();
  });
  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};
export default Controls;
