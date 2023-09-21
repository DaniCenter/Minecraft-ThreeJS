import { usePlane } from "@react-three/cannon";
import { PlaneGeometry, MeshStandardMaterial, TextureLoader, RepeatWrapping } from "three";

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
    type: "Static",
  }));

  const loader = new TextureLoader();
  const texture = loader.load(new URL("../images/grass.jpg", import.meta.url), () => {
    const material = new MeshStandardMaterial({ map: texture });
    ref.current.material = material;
  });
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  const geometry = new PlaneGeometry(100, 100);

  const material = new MeshStandardMaterial();

  return (
    <mesh ref={ref} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <primitive attach="geometry" object={geometry} />
      <primitive attach="material" object={material} />
    </mesh>
  );
}

export { Ground };
