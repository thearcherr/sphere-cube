import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function Parent() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}
