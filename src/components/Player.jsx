import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { BoxBufferGeometry, MeshStandardMaterial } from "three";

function Player() {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 5, 0],
  }));

  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "w":
          velocity.current[2] = -1;
          break;
        case "s":
          velocity.current[2] = 1;
          break;
        case "a":
          velocity.current[0] = -1;
          break;
        case "d":
          velocity.current[0] = 1;
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case "w":
        case "s":
          velocity.current[2] = 0;
          break;
        case "a":
        case "d":
          velocity.current[0] = 0;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    api.velocity.set(...velocity.current);
    camera.position.copy(ref.current.position);
  });

  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({ color: "blue" });

  return <mesh ref={ref} geometry={geometry} material={material} />;
}

export { Player };
