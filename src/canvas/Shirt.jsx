import {useSnapshot} from "valtio";
import state from "../store/index.js";
import {Decal, useGLTF, useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

function Shirt() {
	const snap = useSnapshot(state)
	const { nodes, materials } = useGLTF('/shirt_baked.glb')

	const logoTexture = useTexture(snap.logoDecal)
	const fullTexture = useTexture(snap.fullDecal)

	useFrame((_, delta) => easing.dampC(
		materials.lambert1.color,
		snap.color, .25, delta
	))

	const stateString = JSON.stringify(snap)

	return (
		<group key={stateString}>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0,0,0]}
						rotation={[0,0,0]}
						scale={1}
						map={fullTexture}
					></Decal>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0, 0.04, 0.15]}
						rotation={[0, 0, 0]}
						scale={.15}
						map={logoTexture}
						map-anisoperty={16}
						depthTest={false}
						depthWrite={true}
					></Decal>
				)}
			</mesh>
		</group>
	);
}

export default Shirt;