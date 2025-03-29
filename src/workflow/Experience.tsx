import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer} from '@react-three/postprocessing';
import * as THREE from 'three';

function Experience()
{
    return <>
        
        <color args={['#000']} attach={"background"} />

        <EffectComposer>
            <Bloom />
        </EffectComposer>
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color={[5, 2, 1]} toneMapped={false} />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
        </mesh>

    </>
}

export default Experience;