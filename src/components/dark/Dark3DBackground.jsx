import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Cyber Particles Grid
function CyberParticles({ count = 2000 }) {
  const pointsRef = useRef();

  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(0, 242, 254, 0.9)');
    gradient.addColorStop(0.7, 'rgba(157, 78, 221, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#00F2FE');
    const colorPurple = new THREE.Color('#9D4EDD');
    const colorBlue = new THREE.Color('#2563EB');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;

      const mixedColor = Math.random() > 0.5 
        ? colorCyan.clone().lerp(colorPurple, Math.random()) 
        : colorBlue.clone().lerp(colorCyan, Math.random());
      
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.18}
        map={particleTexture}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating Cyber Polyhedron
function CyberPolyhedron(props) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.3;
      innerRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group {...props}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#00F2FE"
          emissive="#00F2FE"
          emissiveIntensity={0.6}
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#9D4EDD"
          emissive="#7928CA"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Floating Quantum Orbit Rings
function QuantumRings(props) {
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.y += delta * 0.4;
  });

  return (
    <group {...props}>
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 80]} />
        <meshStandardMaterial color="#00F2FE" emissive="#00F2FE" emissiveIntensity={1} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[1.3, 0.02, 16, 80]} />
        <meshStandardMaterial color="#9D4EDD" emissive="#9D4EDD" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function DarkScene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.mouse.x * Math.PI) / 12;
    const targetY = (state.mouse.y * Math.PI) / 12;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F2FE" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9D4EDD" />
      
      <CyberParticles count={1800} />

      {/* Floating 3D Cyber Polyhedron (Left) */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <CyberPolyhedron position={[-5, 2, -4]} scale={0.9} />
      </Float>

      {/* Floating Quantum Rings (Right) */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <QuantumRings position={[5.5, -2, -3]} scale={1.1} />
      </Float>
    </group>
  );
}

function Dark3DBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-[#070709]">
      {/* Subtle Ambient Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* High-tech Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <DarkScene />
      </Canvas>
    </div>
  );
}

export default Dark3DBackground;