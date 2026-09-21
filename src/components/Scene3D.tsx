import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

function Particles({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#0EA5E9"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function LightOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = Math.sin(t * 0.2) * 2.5;
    ref.current.position.y = Math.cos(t * 0.3) * 1.5;
  });
  return (
    <mesh ref={ref} position={[2, 1, -3]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshBasicMaterial color="#6366F1" transparent opacity={0.14} />
    </mesh>
  );
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.x = t * 0.08;
    group.current.rotation.y = t * 0.12;
  });
  return (
    <group ref={group}>
      {[2.5, 3.2, 4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 3, i * 0.5, 0]}>
          <torusGeometry args={[r, 0.008, 16, 100]} />
          <meshBasicMaterial
            color={i % 2 ? '#0EA5E9' : '#6366F1'}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();
  useFrame((state) => {
    if (!ref.current || reduced) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.15, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.1, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

export default function Scene3D() {
  const reduced = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, isMobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <ParallaxGroup>
            <Particles count={reduced ? 200 : isMobile ? 400 : 900} />
            <FloatingRings />
            <LightOrb />
          </ParallaxGroup>
          <gridHelper
            args={[30, 30, '#E2E8F0', '#F1F5F9']}
            position={[0, -3, 0]}
          />
        </Suspense>
      </Canvas>
      {/* radial vignette — light version */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,0.55)_70%,#F8FAFC_100%)]" />
    </div>
  );
}