/** File for render of Three-JS object **/

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "./model";

export default function Render({ color }) {
  /*
    Render of a 3d model in a canvas.
    Controls camera, light, shadow and size properties.

    @param: color THREE-JS object to render in canvas;
            called color b/c is used for different
            colors of the latte, matcha, peach, or
            lavender
    */
  return (
    <Canvas
      shadows
      // Perspective camera, good reference for how cameras work:
      // https://www.youtube.com/watch?v=FwcXultcBl4
      perspective="true"
      camera={{ fov: 30, near: 0.1, far: 1000 }}
      // Look onwards toward the object a wee bit
      onCreated={({ camera }) => {
        camera.position.y = 2;
      }}      
    >
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Model color={color} />
      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />
    </Canvas>
  );
}
