// components/SplashScreen.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';

type Props = {
  logoSrc?: string;
  minDuration?: number; // ms
};

export default function SplashScreen({
  logoSrc = '/appplexlogo.jpg',
  minDuration = 3000, // 3 seconds by default
}: Props) {
  const [visible, setVisible] = useState(true);

  // Normalize to a plain boolean (fixes TS: boolean | null -> boolean)
  const prefersReducedMotion = useReducedMotion();
  const isReducedMotion = prefersReducedMotion ?? false;

  useEffect(() => {
    const start = performance.now();
    const scheduleHide = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      const t = window.setTimeout(() => setVisible(false), remaining);
      return () => window.clearTimeout(t);
    };

    let cleanupTimer: (() => void) | undefined;

    if (document.readyState === 'complete') {
      cleanupTimer = scheduleHide();
      return () => cleanupTimer?.();
    } else {
      const onLoad = () => {
        cleanupTimer = scheduleHide();
      };
      window.addEventListener('load', onLoad, { once: true });
      return () => {
        window.removeEventListener('load', onLoad);
        cleanupTimer?.();
      };
    }
  }, [minDuration]);

  // Parallax motion (tilt with pointer)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.6, 0.6], [10, -10]); // rotateX
  const ry = useTransform(mx, [-0.6, 0.6], [-10, 10]); // rotateY
  const springRx = useSpring(rx, { stiffness: 120, damping: 14, mass: 0.3 });
  const springRy = useSpring(ry, { stiffness: 120, damping: 14, mass: 0.3 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (isReducedMotion) return;
    const x = e.clientX / window.innerWidth - 0.5; // -0.5 .. 0.5
    const y = e.clientY / window.innerHeight - 0.5;
    mx.set(x * 1.2);
    my.set(y * 1.2);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="appplex-splash"
          role="status"
          aria-label="Loading App Plex"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gsurface-light/95 dark:bg-gsurface-dark/95 backdrop-blur-md"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          {/* Scanline + subtle noise overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 0.5px, transparent 0.5px, transparent 2px)',
            }}
          />

          <div className="relative" style={{ perspective: 1100 }}>
            <motion.div
              className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center rounded-2xl overflow-visible"
              style={{
                rotateX: springRx,
                rotateY: springRy,
                transformStyle: 'preserve-3d',
              }}
              initial={{ scale: 0.98 }}
              animate={{
                scale: isReducedMotion ? 1 : [0.98, 1.02, 1],
              }}
              transition={{ duration: 2.4, repeat: isReducedMotion ? 0 : Infinity, repeatType: 'mirror' }}
            >
              {/* Blueprint grid + radial vignette */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[24px] opacity-80"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12), transparent 60%),
                    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                  `,
                  backgroundSize: '100% 100%, 26px 26px, 26px 26px',
                  backgroundPosition: 'center, center, center',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 78%, transparent 100%)',
                  maskImage: 'radial-gradient(circle at center, black 78%, transparent 100%)',
                }}
              />

              {/* Aurora blobs */}
              {!isReducedMotion && (
                <>
                  <Aurora
                    size={420}
                    colors={['rgba(59,130,246,0.45)', 'rgba(167,139,250,0.40)']}
                    rotate={20}
                    duration={12}
                  />
                  <Aurora
                    size={380}
                    colors={['rgba(34,211,238,0.35)', 'rgba(59,130,246,0.30)']}
                    rotate={-35}
                    duration={15}
                    delay={1}
                  />
                </>
              )}

              {/* Electric conic rings */}
              <ElectricRing
                size={300}
                thicknessPct={22}
                speed={8}
                colors={['#3B82F6', '#A78BFA', '#22D3EE']}
                reduceMotion={isReducedMotion}
              />
              <ElectricRing
                size={260}
                thicknessPct={18}
                speed={6}
                colors={['#A78BFA', '#3B82F6']}
                reverse
                reduceMotion={isReducedMotion}
              />

              {/* Multi orbits with electrons */}
              <Orbit size={300} duration={12} tilt={12} dotColor="#60A5FA" reduceMotion={isReducedMotion} />
              <Orbit size={270} duration={9} tilt={-28} dotColor="#A78BFA" reverse reduceMotion={isReducedMotion} />
              <Orbit size={240} duration={7} tilt={48} dotColor="#22D3EE" reduceMotion={isReducedMotion} />

              {/* Drawing network lines */}
              <Network active={!isReducedMotion} />

              {/* Radar sweep + comet trail */}
              <SweepRing radius={155} width={30} color="rgba(34,211,238,0.25)" speed={7} reduceMotion={isReducedMotion} />
              <Comet radius={135} length={90} speed={3.2} delay={0.2} color="rgba(59,130,246,0.9)" reduceMotion={isReducedMotion} />
              <Comet radius={115} length={70} speed={2.4} delay={1.1} color="rgba(167,139,250,0.85)" reverse reduceMotion={isReducedMotion} />

              {/* Particle sparkle field */}
              <Particles dense={!isReducedMotion} />

              {/* Center: logo, glow, and pulse rings */}
              <motion.div
                className="relative z-10 flex items-center justify-center rounded-xl"
                initial={{ scale: 0.95, filter: 'drop-shadow(0 0 0px rgba(59,130,246,0))' }}
                animate={{
                  scale: isReducedMotion ? 1 : [0.95, 1, 0.98, 1],
                  filter: isReducedMotion
                    ? 'drop-shadow(0 0 10px rgba(59,130,246,0.35))'
                    : [
                        'drop-shadow(0 0 0px rgba(59,130,246,0.0))',
                        'drop-shadow(0 0 18px rgba(59,130,246,0.45))',
                        'drop-shadow(0 0 12px rgba(167,139,250,0.40))',
                        'drop-shadow(0 0 16px rgba(59,130,246,0.45))',
                      ],
                }}
                transition={{ duration: 2.4, repeat: isReducedMotion ? 0 : Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Pulsing halo */}
                <PulseRing size={170} color="rgba(59,130,246,0.28)" />
                <PulseRing size={210} color="rgba(167,139,250,0.20)" delay={0.4} />

                <Image
                  src={logoSrc}
                  alt="App Plex"
                  width={120}
                  height={120}
                  priority
                  className="rounded-md relative"
                />

                {/* Flare sweep over logo */}
                {!isReducedMotion && <LogoFlare />}
              </motion.div>
            </motion.div>
          </div>

          <span className="sr-only">Loading…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Pieces ---------- */

function Aurora({
  size = 420,
  colors = ['rgba(59,130,246,0.45)', 'rgba(167,139,250,0.40)'],
  rotate = 0,
  duration = 14,
  delay = 0,
}: {
  size?: number;
  colors?: [string, string] | string[];
  rotate?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute rounded-[40%] blur-3xl mix-blend-screen"
      style={{
        width: size,
        height: size * 0.6,
        background: `radial-gradient(60% 60% at 50% 50%, ${colors[0]}, transparent 70%), radial-gradient(60% 60% at 70% 60%, ${colors[1] || colors[0]}, transparent 80%)`,
      }}
      initial={{ rotate, opacity: 0.55, scale: 0.95 }}
      animate={{ rotate: rotate + 360, opacity: [0.45, 0.65, 0.45], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  );
}

function ElectricRing({
  size = 300,
  thicknessPct = 20,
  speed = 8,
  reverse = false,
  colors = ['#3B82F6', '#A78BFA', '#22D3EE'],
  reduceMotion,
}: {
  size?: number;
  thicknessPct?: number; // ring thickness as % of radius
  speed?: number;
  reverse?: boolean;
  colors?: string[];
  reduceMotion?: boolean;
}) {
  const ringThicknessMask = `radial-gradient(circle at center, transparent ${100 - thicknessPct}%, black ${100 - thicknessPct + 1}%)`;
  const conic = `conic-gradient(from 0deg,
    ${colors[0]} 0deg,
    ${colors[1] || colors[0]} 120deg,
    ${colors[2] || colors[0]} 240deg,
    ${colors[0]} 360deg)`;

  return (
    <motion.div
      aria-hidden
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: conic,
        WebkitMaskImage: ringThicknessMask,
        maskImage: ringThicknessMask,
        filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.45))',
        opacity: 0.9,
      }}
      animate={{ rotate: reduceMotion ? 0 : reverse ? -360 : 360 }}
      transition={{ duration: speed, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
    />
  );
}

function Orbit({
  size = 260,
  duration = 7,
  tilt = 0,
  reverse = false,
  dotColor = '#60A5FA',
  reduceMotion,
}: {
  size?: number;
  duration?: number;
  tilt?: number;
  reverse?: boolean;
  dotColor?: string;
  reduceMotion?: boolean;
}) {
  const rep = reduceMotion ? 0 : Infinity;
  return (
    <motion.div
      aria-hidden
      className="absolute"
      style={{ width: size, height: size, transform: `rotate(${tilt}deg)` }}
      animate={{ rotate: reverse ? (reduceMotion ? 0 : -360) : reduceMotion ? 0 : 360 }}
      transition={{ duration, ease: 'linear', repeat: rep }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          borderTop: '1px dashed rgba(255,255,255,0.35)',
          borderRight: '1px dashed rgba(255,255,255,0.12)',
          borderBottom: '1px dashed rgba(255,255,255,0.2)',
          borderLeft: '1px dashed rgba(255,255,255,0.08)',
        }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 -top-[6px]">
        <motion.span
          className="block"
          style={{
            width: 10,
            height: 10,
            borderRadius: 9999,
            background: `radial-gradient(circle at 30% 30%, white, ${dotColor})`,
            boxShadow: `0 0 14px ${dotColor}`,
          }}
          animate={{ scale: reduceMotion ? 1 : [1, 1.28, 1] }}
          transition={{ duration: 0.85, repeat: rep, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

function Network({ active = true }: { active?: boolean }) {
  // Animated bezier lines "drawing in" and looping
  const line = (d: string, delay = 0) => (
    <motion.path
      d={d}
      stroke="url(#line)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0.0 }}
      animate={
        active
          ? { pathLength: [0, 1, 1, 0], opacity: [0.0, 1, 1, 0] }
          : { pathLength: 1, opacity: 1 }
      }
      transition={{ duration: 3.2, delay, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
    />
  );

  const nodes = [
    { x: 160, y: 160 },
    { x: 70, y: 120 },
    { x: 250, y: 90 },
    { x: 40, y: 200 },
    { x: 280, y: 210 },
    { x: 120, y: 260 },
    { x: 210, y: 260 },
  ];

  return (
    <svg aria-hidden className="absolute inset-0" width="360" height="360" viewBox="0 0 360 360" fill="none">
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(96,165,250,0.55)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.55)" />
        </linearGradient>
        <radialGradient id="node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="rgba(96,165,250,0.8)" />
        </radialGradient>
      </defs>

      {line('M60 210 Q160 160 300 230', 0)}
      {line('M80 130 Q170 150 270 110', 0.3)}
      {line('M130 290 Q165 170 230 290', 0.6)}

      {nodes.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="url(#node)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 220, damping: 18 }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(96,165,250,.8))' }}
        />
      ))}
    </svg>
  );
}

function SweepRing({
  radius = 150,
  width = 28,
  color = 'rgba(34,211,238,0.25)',
  speed = 7,
  reduceMotion,
}: {
  radius?: number;
  width?: number;
  color?: string;
  speed?: number;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute rounded-full pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        background: `conic-gradient(from 180deg, rgba(255,255,255,0) 0deg, ${color} 40deg, rgba(255,255,255,0) 120deg)`,
        WebkitMaskImage: `radial-gradient(circle at center, black 0%, black calc(50% - ${width}px), transparent calc(50% - ${width - 2}px))`,
        maskImage: `radial-gradient(circle at center, black 0%, black calc(50% - ${width}px), transparent calc(50% - ${width - 2}px))`,
      }}
      animate={{ rotate: reduceMotion ? 0 : 360 }}
      transition={{ duration: speed, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
    />
  );
}

function Comet({
  radius = 120,
  length = 80,
  speed = 3,
  delay = 0,
  reverse = false,
  color = 'rgba(59,130,246,0.9)',
  reduceMotion,
}: {
  radius?: number;
  length?: number;
  speed?: number;
  delay?: number;
  reverse?: boolean;
  color?: string;
  reduceMotion?: boolean;
}) {
  const dir = reverse ? -360 : 360;
  return (
    <motion.div
      aria-hidden
      className="absolute"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reduceMotion ? 0 : dir }}
      transition={{ duration: speed, delay, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
    >
      <span
        className="absolute left-1/2 top-1/2"
        style={{
          width: length,
          height: 2,
          transform: `translateY(-50%) translateX(${radius - length / 2}px)`,
          background: `linear-gradient(90deg, ${color}, rgba(59,130,246,0.0))`,
          boxShadow: `0 0 10px ${color}`,
          borderRadius: 999,
        }}
      />
    </motion.div>
  );
}

function Particles({ dense = true }: { dense?: boolean }) {
  const pts = dense
    ? [
        { l: '8%', t: '72%', d: 0.0, c: 'rgba(59,130,246,0.9)' },
        { l: '18%', t: '28%', d: 0.1, c: 'rgba(56,189,248,0.9)' },
        { l: '85%', t: '40%', d: 0.2, c: 'rgba(167,139,250,0.95)' },
        { l: '70%', t: '75%', d: 0.35, c: 'rgba(59,130,246,0.95)' },
        { l: '40%', t: '12%', d: 0.5, c: 'rgba(34,211,238,0.95)' },
        { l: '50%', t: '85%', d: 0.6, c: 'rgba(139,92,246,0.9)' },
        { l: '28%', t: '60%', d: 0.7, c: 'rgba(59,130,246,0.8)' },
        { l: '62%', t: '24%', d: 0.8, c: 'rgba(56,189,248,0.85)' },
        { l: '78%', t: '62%', d: 0.9, c: 'rgba(167,139,250,0.85)' },
      ]
    : [
        { l: '12%', t: '70%', d: 0.0, c: 'rgba(59,130,246,0.9)' },
        { l: '82%', t: '40%', d: 0.25, c: 'rgba(167,139,250,0.95)' },
        { l: '42%', t: '14%', d: 0.5, c: 'rgba(34,211,238,0.95)' },
      ];

  return (
    <>
      {pts.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            left: p.l,
            top: p.t,
            width: 4,
            height: 4,
            background: p.c,
            boxShadow: `0 0 12px ${p.c}`,
          }}
          initial={{ y: 8, opacity: 0.4 }}
          animate={{ y: [-8, 8, -8], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 3.6 + i * 0.18, delay: p.d, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}
    </>
  );
}

function PulseRing({ size = 180, color = 'rgba(59,130,246,0.28)', delay = 0 }: { size?: number; color?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        border: `1.5px solid ${color}`,
        boxShadow: `0 0 14px ${color}`,
      }}
      initial={{ scale: 0.8, opacity: 0.0 }}
      animate={{ scale: [0.8, 1.08, 1.2], opacity: [0.0, 0.6, 0] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  );
}

function LogoFlare() {
  return (
    <motion.span
      aria-hidden
      className="absolute inset-0 rounded-xl pointer-events-none mix-blend-screen"
      style={{
        background:
          'linear-gradient(120deg, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 60%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 68%, transparent 72%)',
        maskImage: 'radial-gradient(circle at center, black 68%, transparent 72%)',
      }}
      initial={{ rotate: -30, opacity: 0 }}
      animate={{ rotate: 330, opacity: [0, 1, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.4, ease: 'easeInOut' }}
    />
  );
}