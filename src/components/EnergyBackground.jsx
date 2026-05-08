import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function EnergyParticles({ count = 3500 }) {
  const pointsRef = useRef();
  const lastScroll = useRef(window.scrollY || 0);

  // Generate a glowing circular texture programmatically so we don't have square points
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Create a radial glow
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Initial random setup for particles
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;     // x range -15 to 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y range -20 to 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 2; // z range -17 to -2
      sc[i] = Math.random() * 2.0 + 0.5; // Slightly larger for better glow
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const scrollY = window.scrollY || 0;
    const scrollDelta = scrollY - lastScroll.current;
    lastScroll.current = scrollY;
    
    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    
    // Rotate slowly for atmospheric feel
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;

    // Move each particle upwards (base speed + high scroll speed multiplier)
    // Multiplied scrollDelta by a much larger number so the scroll reaction is obvious
    for (let i = 0; i < count; i++) {
      const yMovement = delta * 0.8 + scrollDelta * 0.08; 
      
      positionsArray[i * 3 + 1] += yMovement;
      
      // Wrap around logic
      if (positionsArray[i * 3 + 1] > 20) {
        positionsArray[i * 3 + 1] -= 40;
      } else if (positionsArray[i * 3 + 1] < -20) {
        positionsArray[i * 3 + 1] += 40;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
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
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        map={circleTexture}
        color="#2563EB" // Matching the accent blue
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function EnergyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full opacity-60 mix-blend-screen md:mix-blend-normal">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight color="#2563EB" intensity={0.5} />
        <EnergyParticles />
      </Canvas>
    </div>
  );
}

export default EnergyBackground;
