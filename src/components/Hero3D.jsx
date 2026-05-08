import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Box, Cylinder, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Premium Frosted Glass Material
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ffffff',
  metalness: 0.1,
  roughness: 0.2,
  envMapIntensity: 1,
  transmission: 0.9, // glass-like
  thickness: 0.5,
  ior: 1.5,
});

// Accent material (Bright Blue)
const accentMaterial = new THREE.MeshStandardMaterial({
  color: '#2563EB',
  roughness: 0.2,
  metalness: 0.8,
  emissive: '#2563EB',
  emissiveIntensity: 0.5
});

// Dark metallic material
const darkMetalMaterial = new THREE.MeshStandardMaterial({
  color: '#1A100C',
  roughness: 0.6,
  metalness: 0.8,
});

// Light peach material
const peachMaterial = new THREE.MeshStandardMaterial({
  color: '#F89B74',
  roughness: 0.4,
  metalness: 0.1,
});

// Detailed 3D Primitive Laptop (Crash-proof, no external network requests)
function Laptop(props) {
  return (
    <group {...props}>
      {/* Base Chassis */}
      <RoundedBox args={[2.2, 0.05, 1.6]} radius={0.02} position={[0, -0.025, 0]} material={glassMaterial} />
      
      {/* Keyboard Area Indentation */}
      <Box args={[1.9, 0.01, 0.7]} position={[0, 0.01, -0.1]} material={darkMetalMaterial} />
      
      {/* Abstract Keyboard Rows */}
      <group position={[0, 0.02, -0.1]}>
        {[-0.25, -0.08, 0.09, 0.26].map((z, i) => (
          <Box key={i} args={[1.8, 0.01, 0.12]} position={[0, 0, z]} material={glassMaterial} />
        ))}
      </group>

      {/* Trackpad */}
      <RoundedBox args={[0.7, 0.01, 0.4]} radius={0.02} position={[0, 0.01, 0.55]} material={darkMetalMaterial} />
      
      {/* Screen Hinge */}
      <Cylinder args={[0.04, 0.04, 1.8]} rotation={[0, 0, Math.PI / 2]} position={[0, 0, -0.75]} material={darkMetalMaterial} />

      {/* Screen Panel (Angled open) */}
      <group position={[0, 0, -0.75]} rotation={[Math.PI / 6, 0, 0]}>
        {/* Screen Chassis */}
        <RoundedBox args={[2.2, 1.4, 0.05]} radius={0.02} position={[0, 0.7, 0]} material={glassMaterial} />
        {/* Glowing Screen Display */}
        <Box args={[2.0, 1.25, 0.01]} position={[0, 0.7, 0.03]} material={accentMaterial} />
        {/* Screen Bezel Camera Dot */}
        <Box args={[0.04, 0.04, 0.01]} position={[0, 1.35, 0.03]} material={darkMetalMaterial} />
      </group>
    </group>
  );
}

// Custom 3D Server / Database Component
function ServerRack(props) {
  return (
    <group {...props}>
      <RoundedBox args={[1, 2.5, 1]} radius={0.05} position={[0, 0, 0]} material={glassMaterial} />
      {/* Server Slots/Blinking Lights */}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((y, i) => (
        <group key={i} position={[0, y, 0.51]}>
          <Box args={[0.8, 0.1, 0.02]} material={darkMetalMaterial} />
          <Box args={[0.1, 0.05, 0.03]} position={[-0.3, 0, 0]} material={accentMaterial} />
          <Box args={[0.05, 0.05, 0.03]} position={[-0.1, 0, 0]} material={peachMaterial} />
        </group>
      ))}
    </group>
  );
}

// Custom 3D CPU/Microchip Component
function Microchip(props) {
  return (
    <group {...props}>
      <RoundedBox args={[1.2, 0.1, 1.2]} radius={0.05} material={darkMetalMaterial} />
      <Box args={[0.8, 0.15, 0.8]} position={[0, 0, 0]} material={glassMaterial} />
      <Box args={[0.4, 0.16, 0.4]} position={[0, 0, 0]} material={accentMaterial} />
      {/* Pins */}
      {[...Array(6)].map((_, i) => (
        <React.Fragment key={i}>
          <Box args={[0.05, 0.05, 0.2]} position={[-0.5 + i * 0.2, 0, 0.65]} material={peachMaterial} />
          <Box args={[0.05, 0.05, 0.2]} position={[-0.5 + i * 0.2, 0, -0.65]} material={peachMaterial} />
          <Box args={[0.2, 0.05, 0.05]} position={[0.65, 0, -0.5 + i * 0.2]} material={peachMaterial} />
          <Box args={[0.2, 0.05, 0.05]} position={[-0.65, 0, -0.5 + i * 0.2]} material={peachMaterial} />
        </React.Fragment>
      ))}
    </group>
  );
}

// AI Object 1: Neural Brain
function NeuralBrain(props) {
  return (
    <group {...props}>
      {/* Outer Wireframe Sphere */}
      <mesh>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.5} wireframe={true} />
      </mesh>
      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#F89B74" emissive="#F89B74" emissiveIntensity={1} />
      </mesh>
      {/* Orbiting Data Rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} ior={1.5} roughness={0.1} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} ior={1.5} roughness={0.1} />
      </mesh>
    </group>
  );
}

// AI Object 2: Automation Bot (Represents AI Automation)
function AutomationBot(props) {
  const headRef = useRef();
  
  // Make the bot's head look around slightly
  useFrame((state) => {
    if(headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.4;
    }
  });

  return (
    <group {...props}>
      {/* Bot Head */}
      <group ref={headRef} position={[0, 0.4, 0]}>
        {/* Main Head Chassis */}
        <RoundedBox args={[0.8, 0.6, 0.7]} radius={0.1} material={darkMetalMaterial} />
        {/* Glowing AI Visor/Scanner */}
        <Box args={[0.6, 0.15, 0.1]} position={[0, 0.1, 0.36]} material={accentMaterial} />
        {/* Processing Indicator Light */}
        <Box args={[0.1, 0.05, 0.05]} position={[0.2, -0.1, 0.36]} material={peachMaterial} />
        
        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.4]} position={[0.2, 0.4, -0.1]} material={darkMetalMaterial} />
        <mesh position={[0.2, 0.6, -0.1]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#F89B74" emissive="#F89B74" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Bot Body / Data Core */}
      <Cylinder args={[0.3, 0.4, 0.6, 16]} position={[0, -0.2, 0]} material={glassMaterial} />
      
      {/* Inner Energy Core */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
        <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.8} />
      </mesh>

      {/* Hover Thrusters / Automation Base */}
      <mesh position={[-0.3, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 32]} />
        <meshStandardMaterial color="#F89B74" emissive="#F89B74" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.3, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 32]} />
        <meshStandardMaterial color="#F89B74" emissive="#F89B74" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef();

  // Subtle mouse-based rotation
  useFrame((state) => {
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 8, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 8, 0.05);
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F89B74" />
      <Environment preset="city" />

      {/* Floating Laptop (Top Left) */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Laptop position={[-3, 1.5, -2]} rotation={[0.2, 0.5, -0.1]} scale={1.2} />
      </Float>

      {/* Floating Server Rack (Bottom Right) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
        <ServerRack position={[3.5, -1, -3]} rotation={[0.1, -0.6, 0.05]} scale={1.4} />
      </Float>

      {/* Floating Microchip CPU (Bottom Left) */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
        <Microchip position={[-2.5, -1.5, 1]} rotation={[1, 0.5, 0.2]} scale={0.8} />
      </Float>

      {/* Database/Cloud Cylinders (Top Right) */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.5}>
        <group position={[2.5, 2, -1]} rotation={[0.2, -0.2, 0.1]}>
          <Cylinder args={[0.8, 0.8, 0.5, 32]} position={[0, 0.6, 0]} material={glassMaterial} />
          <Cylinder args={[0.8, 0.8, 0.5, 32]} position={[0, 0, 0]} material={glassMaterial} />
          <Cylinder args={[0.8, 0.8, 0.5, 32]} position={[0, -0.6, 0]} material={glassMaterial} />
          {/* Glowing data rings */}
          <Cylinder args={[0.81, 0.81, 0.05, 32]} position={[0, 0.3, 0]} material={accentMaterial} />
          <Cylinder args={[0.81, 0.81, 0.05, 32]} position={[0, -0.3, 0]} material={accentMaterial} />
        </group>
      </Float>

      {/* AI Neural Brain (Mid Left) */}
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={2}>
        <NeuralBrain position={[-4.5, 0.2, -1.5]} rotation={[0.4, 0.2, 0.1]} scale={1.1} />
      </Float>

      {/* Automation Bot AI (Mid Right) */}
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <AutomationBot position={[4.5, 0.5, 0]} rotation={[-0.1, -0.4, 0.1]} scale={1} />
      </Float>

      {/* Floor Shadows */}
      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} color="#2A1B14" />
    </group>
  );
}

function Hero3D() {
  return (
    <div className="w-full h-screen pointer-events-none absolute inset-0 z-0 overflow-visible">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero3D;
