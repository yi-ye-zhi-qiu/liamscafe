/** File for loading and material customization of Blender GLTF/GLB export of Mason jar lattes **/

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, GradientTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Model({ color }) {
  /*
    Export created using: https://gltf.pmnd.rs/
    Make sure you bake your textures in Blender,
    see: https://www.youtube.com/watch?v=eYvgFWEiNp8
    Why do we bother customizing materials?
    IMO material for THREE.js glass looks better:
    https://tympanus.net/codrops/2021/10/27/creating-the-effect-of-transparent-glass-and-plastic-in-three-js/
    This does mean we have to import THREE itself
    and go around @react-three/fiber

    @param color: Color to use (peach, matcha or lavender).
                  This will change the textures displayed;
                  for example, nodes.peach.geometry
                  or materials.peachStraw. They are custom
                  textures specific to each flavor.
    */
  const frostedGlass = new THREE.MeshPhysicalMaterial({
    roughness: 0.3,
    transmission: 0.8,
    thickness: 0.1,
  });
  const glass = new THREE.MeshPhysicalMaterial({
    roughness: 0.3,
    transmission: 1,
    thickness: 0.01,
  });

  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  const { nodes, materials } = useGLTF("/glb/multiLatte.glb");

  switch (color) {
    case "peach":
      return (
        <group dispose={null} ref={ref} scale={6.4}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.peach.geometry}
            material={materials.Peach}
            rotation={[Math.PI, -0.076, Math.PI]}
            scale={.999}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_4_peach.geometry}
            material={materials.peachStraw}
            position={[0.019, -0.106, 0.016]}
            rotation={[-0.171, 0.062, 0.028]}
            scale={[1.003, 1.18, 1.014]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_1.geometry}
            material={glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_3.geometry}
            material={glass}
            scale={0.991}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_2.geometry}
            material={glass}
            position={[0, -0.004, 0]}
            scale={1.002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_5.geometry}
            material={materials.whippedCream}
            position={[0, 0.095, 0]}
            rotation={[-Math.PI, 1.053, -Math.PI]}
          />
        </group>
      );
    case "lavender":
      return (
        <group dispose={null} ref={ref} scale={6.4}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lavender.geometry}
            material={materials.Lavender}
            rotation={[Math.PI, -0.076, Math.PI]}
            scale={0.999}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_4_lavender.geometry}
            material={materials.lavenderStraw}
            position={[0.019, -0.106, 0.016]}
            rotation={[-0.171, 0.062, 0.028]}
            scale={[1.003, 1.18, 1.014]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_1.geometry}
            material={glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_3.geometry}
            material={glass}
            scale={0.991}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_2.geometry}
            material={glass}
            position={[0, -0.004, 0]}
            scale={1.002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_5.geometry}
            material={materials.whippedCream}
            position={[0, 0.095, 0]}
            rotation={[-Math.PI, 1.053, -Math.PI]}
          />
        </group>
      );
    case "matcha":
      return (
        <group dispose={null} ref={ref} scale={6.4}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.matcha.geometry}
            material={materials.Matcha}
            rotation={[Math.PI, -0.076, Math.PI]}
            scale={0.999}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_4_matcha.geometry}
            material={materials.matchaStraw}
            position={[0.019, -0.106, 0.016]}
            rotation={[-0.171, 0.062, 0.027]}
            scale={[1.003, 1.18, 1.014]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_1.geometry}
            material={glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_3.geometry}
            material={glass}
            scale={0.991}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_2.geometry}
            material={glass}
            position={[0, -0.004, 0]}
            scale={1.002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.latte_5.geometry}
            material={materials.whippedCream}
            position={[0, 0.095, 0]}
            rotation={[-Math.PI, 1.053, -Math.PI]}
          />
        </group>
      );
  }
}
