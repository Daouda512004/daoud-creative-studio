import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

// Brand colours, sampled from the official logo.
const YELLOW = "#FEC611";
const INK = "#1c1d22";
const PAPER = "#fbfaf6";
const LINE = "#e6e2d8";

// Feel
const PARALLAX = 0.35; // how far the scene follows the pointer (radians)
const DAMP = 3.5; // how quickly it catches up
const INTRO = 1.6; // seconds for the opening spin

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Whole scene leans toward the pointer and spins in once on load. */
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const t = useRef(0);
  const ready = useRef(false);
  const still = useMemo(prefersReducedMotion, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    t.current += dt;
    const intro = still ? 1 : Math.min(t.current / INTRO, 1);
    const ease = 1 - Math.pow(1 - intro, 3);
    const px = still ? 0 : state.pointer.x * PARALLAX;
    const py = still ? 0 : state.pointer.y * PARALLAX * 0.5;
    const targetY = -0.9 * (1 - ease) + px;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, DAMP, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -py, DAMP, dt);
    g.scale.setScalar(0.82 + 0.18 * ease);

    if (!ready.current) {
      ready.current = true;
      state.gl.domElement.closest("[data-hero-scene]")?.setAttribute("data-scene-ready", "");
    }
  });

  return <group ref={group}>{children}</group>;
}

function Bar({
  w,
  h = 0.09,
  x,
  y,
  color = LINE,
}: {
  w: number;
  h?: number;
  x: number;
  y: number;
  color?: string;
}) {
  return (
    <RoundedBox args={[w, h, 0.02]} radius={h / 2.2} smoothness={3} position={[x, y, 0.085]}>
      <meshStandardMaterial color={color} roughness={0.6} />
    </RoundedBox>
  );
}

/** Abstract website window: browser bar, yellow headline block, text lines and cards. */
function BrowserPanel() {
  return (
    <group>
      <RoundedBox args={[3.8, 2.5, 0.14]} radius={0.12} smoothness={4}>
        <meshPhysicalMaterial
          color={PAPER}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.3}
        />
      </RoundedBox>
      {/* top bar */}
      <RoundedBox args={[3.8, 0.32, 0.03]} radius={0.01} smoothness={2} position={[0, 1.09, 0.075]}>
        <meshStandardMaterial color={INK} roughness={0.5} />
      </RoundedBox>
      {[-1.7, -1.55, -1.4].map((x, i) => (
        <mesh key={x} position={[x, 1.09, 0.1]}>
          <circleGeometry args={[0.045, 20]} />
          <meshBasicMaterial color={i === 0 ? YELLOW : "#6b6c72"} />
        </mesh>
      ))}
      {/* headline in a yellow box, like the logo */}
      <Bar w={1.3} h={0.32} x={-1.05} y={0.55} color={YELLOW} />
      <Bar w={1.5} h={0.22} x={-0.95} y={0.18} color={INK} />
      <Bar w={1.7} x={-0.85} y={-0.12} />
      <Bar w={1.4} x={-1.0} y={-0.3} />
      <Bar w={0.8} h={0.22} x={-1.3} y={-0.66} color={YELLOW} />
      {/* image card */}
      <RoundedBox
        args={[1.35, 1.55, 0.05]}
        radius={0.08}
        smoothness={3}
        position={[0.98, -0.05, 0.09]}
      >
        <meshStandardMaterial color="#efe9db" roughness={0.7} />
      </RoundedBox>
      <mesh position={[0.98, 0.12, 0.13]}>
        <circleGeometry args={[0.32, 40]} />
        <meshStandardMaterial color={YELLOW} roughness={0.4} />
      </mesh>
      <Bar w={0.9} x={0.98} y={-0.52} color="#d9d2c1" />
    </group>
  );
}

/** Abstract mobile app: dark body with a light screen and stacked cards. */
function PhonePanel() {
  return (
    <group>
      <RoundedBox args={[1.25, 2.45, 0.16]} radius={0.18} smoothness={5}>
        <meshPhysicalMaterial color={INK} roughness={0.3} clearcoat={1} clearcoatRoughness={0.2} />
      </RoundedBox>
      <RoundedBox args={[1.08, 2.24, 0.02]} radius={0.12} smoothness={4} position={[0, 0, 0.085]}>
        <meshStandardMaterial color={PAPER} roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.06, 0.02]} radius={0.03} smoothness={2} position={[0, 1.02, 0.1]}>
        <meshStandardMaterial color={INK} />
      </RoundedBox>
      <RoundedBox args={[0.88, 0.62, 0.04]} radius={0.08} smoothness={3} position={[0, 0.5, 0.11]}>
        <meshStandardMaterial color={YELLOW} roughness={0.4} />
      </RoundedBox>
      {[-0.05, -0.38, -0.71].map((y) => (
        <group key={y} position={[0, y, 0.11]}>
          <RoundedBox args={[0.88, 0.24, 0.03]} radius={0.06} smoothness={3}>
            <meshStandardMaterial color="#ece7da" roughness={0.6} />
          </RoundedBox>
          <mesh position={[-0.3, 0, 0.02]}>
            <circleGeometry args={[0.07, 20]} />
            <meshBasicMaterial color={INK} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene() {
  const still = useMemo(prefersReducedMotion, []);
  const speed = still ? 0 : 1.4;

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <Environment resolution={256}>
        <Lightformer intensity={2} position={[0, 5, 2]} scale={[10, 10, 1]} />
        <Lightformer
          intensity={1.2}
          color="#fff3cf"
          position={[-5, 1, -1]}
          rotation-y={Math.PI / 2}
          scale={[20, 2, 1]}
        />
        <Lightformer
          intensity={0.8}
          position={[5, 0, 3]}
          rotation-y={-Math.PI / 2}
          scale={[10, 3, 1]}
        />
      </Environment>

      <Rig>
        <Float speed={speed} rotationIntensity={0.25} floatIntensity={0.5}>
          <group position={[-0.45, 0.25, 0]} rotation={[0.06, 0.32, -0.03]}>
            <BrowserPanel />
          </group>
        </Float>

        <Float speed={speed * 1.2} rotationIntensity={0.35} floatIntensity={0.8}>
          <group position={[1.95, -0.55, 1.0]} rotation={[0.04, -0.42, 0.06]}>
            <PhonePanel />
          </group>
        </Float>

        {/* the yellow "Daoud" box */}
        <Float speed={speed * 1.6} rotationIntensity={1.6} floatIntensity={1.2}>
          <RoundedBox
            args={[0.95, 0.95, 0.95]}
            radius={0.2}
            smoothness={5}
            position={[-2.55, 1.55, 0.7]}
            rotation={[0.5, 0.6, 0.1]}
          >
            <meshPhysicalMaterial
              color={YELLOW}
              roughness={0.25}
              clearcoat={1}
              clearcoatRoughness={0.15}
            />
          </RoundedBox>
        </Float>

        {/* the yellow dot after "Creative." */}
        <Float speed={speed * 2} floatIntensity={1.5}>
          <mesh position={[2.75, 1.65, -0.2]}>
            <sphereGeometry args={[0.34, 48, 48]} />
            <meshPhysicalMaterial color={YELLOW} roughness={0.2} clearcoat={1} />
          </mesh>
        </Float>

        <Float speed={speed * 1.3} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[-2.35, -1.45, 0.9]} rotation={[1.1, 0.3, 0]}>
            <torusGeometry args={[0.36, 0.13, 24, 64]} />
            <meshPhysicalMaterial color={INK} roughness={0.3} clearcoat={1} />
          </mesh>
        </Float>

        <Float speed={speed * 1.8} floatIntensity={2}>
          <mesh position={[0.9, 1.95, 0.6]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color={INK} roughness={0.4} />
          </mesh>
          <mesh position={[3.1, -1.6, 0.3]}>
            <sphereGeometry args={[0.16, 32, 32]} />
            <meshStandardMaterial color={YELLOW} roughness={0.3} />
          </mesh>
        </Float>
      </Rig>

      <ContactShadows
        position={[0, -2.45, 0]}
        opacity={0.28}
        scale={12}
        blur={2.6}
        far={4}
        color="#3a2f10"
      />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      flat
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 9.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Scene />
    </Canvas>
  );
}
