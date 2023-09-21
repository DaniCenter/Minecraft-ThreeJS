import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function POV() {
  const { camera, gl } = useThree();
  return <PointerLockControls args={[camera, gl.domElement]} enabled={true} />;
}

export { POV };
