import * as THREE from 'three';
import React, { useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Loader } from 'semantic-ui-react';
import Controls from './components/controls';
import Main from './components/main';
import 'semantic-ui-css/semantic.min.css';

function Content({ setSelected }) {
  const { size, setDefaultCamera } = useThree();
  const [camera] = useState(() => {
    const cam = new THREE.PerspectiveCamera(55, size.width / size.height);
    cam.position.set(0, 0, 3);
    setDefaultCamera(cam);
    return cam;
  });
  useMemo(() => {
    camera.aspect = size.width / size.height;
  }, [size, camera.aspect]);
  useFrame(() => camera.updateMatrixWorld());
  return (
    <group>
      <Controls />
      <Main setSelected={setSelected} />
    </group>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();
  const onLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      <Loader active={loading} />
      <Canvas onCreated={() => onLoaded()}>
        <Content setSelected={setSelected} />
      </Canvas>
    </div>
  );
}
