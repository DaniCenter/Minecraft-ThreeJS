import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { POV } from "./components/POV";
import { Player } from "./components/Player";

function App() {
  return (
    <Canvas>
      <Sky></Sky>
      <ambientLight intensity={0.5} />
      <POV />
      <Physics>
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
