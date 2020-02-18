import * as THREE from 'three';
import React, { useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import {
  Grid, Header, Loader, Image, Segment,
} from 'semantic-ui-react';
import Controls from './components/controls';
import PieChart from './components/charts/pie';
import LineChart from './components/charts/line';
import NavBar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';
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
  const [selected, setSelected] = useState('Click on DNA or charts for more info');
  const onLoaded = () => {
    setLoading(false);
  };

  return (
    <Grid padded divided relaxed>
      <Grid.Row>
        <Grid.Column>
          <NavBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="two">
        <Grid.Column name="chart_column" width={4} textAlign="center">
          <Header className="genome_interface_header">
            <Image className="genome_interface_logo" src="unite-symbol.png" size="tiny" />
            Genome Interface
          </Header>
          <LineChart setSelected={setSelected} />
          <PieChart setSelected={setSelected} />
        </Grid.Column>
        <Grid.Column name="viewer_column" width={12}>
          <Segment id="genome_gui" raised>
            {selected}
          </Segment>
          <Loader active={loading} />
          <Canvas onCreated={() => onLoaded()}>
            <Content setSelected={setSelected} />
          </Canvas>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
