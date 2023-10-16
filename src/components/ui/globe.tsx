'use client';

import { useEffect, useRef, type MutableRefObject } from 'react';
import { useTheme } from 'next-themes';
import { useSpring } from 'react-spring';
import createGlobe from 'cobe';

type GlobeProps = {
  staticWidth?: number;
  className?: string;
};

export function Globe({ staticWidth, className }: GlobeProps) {
  const canvasRef: MutableRefObject<any> = useRef(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const { resolvedTheme } = useTheme();

  const dark = resolvedTheme === 'dark' ? 1 : 0;
  const baseColor: [number, number, number] =
    resolvedTheme === 'dark' ? [0.3, 0.3, 0.3] : [1, 1, 1];

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 300,
      friction: 50,
      precision: 0.01,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current &&
      (width = staticWidth || canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width,
      height: width,
      phi,
      theta: 0.1,
      dark,
      diffuse: 1,
      scale: 1,
      mapSamples: 24000,
      mapBrightness: 3,
      baseColor,
      markerColor: [1, 1, 1],
      offset: [0, 0],
      glowColor: [0.7, 0.7, 0.7],
      markers: [],
      onRender: (state: Record<string, number>) => {
        phi += 0.003;
        state.phi = phi + r.get();
        state.width = width;
        state.height = width;
      },
    });
    return () => {
      globe.destroy();
    };
  }, [resolvedTheme]);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: 1,
      }}
      onPointerDown={e => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        canvasRef.current.style.cursor = 'grabbing';
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        canvasRef.current.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        canvasRef.current.style.cursor = 'grab';
      }}
      onMouseMove={e => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={e => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
    />
  );
}
