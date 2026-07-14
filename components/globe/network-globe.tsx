"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

const locations = {
  sf: [37.7749, -122.4194] as [number, number],
  nyc: [40.7128, -74.006] as [number, number],
  london: [51.5074, -0.1278] as [number, number],
  delhi: [28.6139, 77.209] as [number, number],
  singapore: [1.3521, 103.8198] as [number, number],
  tokyo: [35.6762, 139.6503] as [number, number],
  sydney: [-33.8688, 151.2093] as [number, number],
  saoPaulo: [-23.5505, -46.6333] as [number, number],
  dubai: [25.2048, 55.2708] as [number, number],
  berlin: [52.52, 13.405] as [number, number],
  mexico: [19.4326, -99.1332] as [number, number],
  cairo: [30.0444, 31.2357] as [number, number],
  lagos: [6.5244, 3.3792] as [number, number],
  hongKong: [22.3193, 114.1694] as [number, number],
  stockholm: [59.3293, 18.0686] as [number, number]
};

const markers = Object.values(locations).map((location, index) => ({
  location,
  size: index % 3 === 0 ? 0.08 : 0.055
}));

const arcs = [
  { from: locations.sf, to: locations.tokyo },
  { from: locations.nyc, to: locations.london },
  { from: locations.london, to: locations.delhi },
  { from: locations.delhi, to: locations.singapore },
  { from: locations.singapore, to: locations.sydney },
  { from: locations.tokyo, to: locations.hongKong },
  { from: locations.nyc, to: locations.saoPaulo },
  { from: locations.london, to: locations.dubai },
  { from: locations.dubai, to: locations.lagos },
  { from: locations.sf, to: locations.mexico },
  { from: locations.berlin, to: locations.stockholm },
  { from: locations.cairo, to: locations.delhi },
  { from: locations.saoPaulo, to: locations.lagos },
  { from: locations.hongKong, to: locations.sydney }
];

export function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 0;
    let frame = 0;
    let destroyed = false;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const create = () => {
      width = canvas.offsetWidth || 520;
      if (width === 0) return;

      const options: COBEOptions = {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: 0.25,
        dark: 1,
        diffuse: 1.6,
        mapSamples: 22000,
        mapBrightness: 8.5,
        mapBaseBrightness: 0.08,
        baseColor: [0.08, 0.14, 0.32],
        markerColor: [0.45, 0.82, 1],
        glowColor: [0.55, 0.78, 1],
        markers,
        arcs,
        arcColor: [0.5, 0.82, 1],
        arcWidth: 0.7,
        arcHeight: 0.4,
        markerElevation: 0.025,
        context: { preserveDrawingBuffer: true }
      };

      globe?.destroy();
      globe = createGlobe(canvas, options);
      canvas.style.opacity = "1";
    };

    const onResize = () => {
      const nextWidth = canvas.offsetWidth;
      if (!nextWidth || Math.abs(nextWidth - width) < 1 || !globe) return;
      width = nextWidth;
      globe.update({
        width: width * 2,
        height: width * 2
      });
    };

    create();
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (destroyed || !globe) return;

      if (pointerInteracting.current !== null) {
        phiRef.current += pointerInteractionMovement.current * 0.01;
      } else {
        phiRef.current += 0.0035;
      }

      pointerInteractionMovement.current *= 0.92;
      globe.update({ phi: phiRef.current });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="globe-stage relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="globe-aura" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="relative z-10 h-full w-full cursor-grab opacity-0 transition-opacity duration-700 active:cursor-grabbing"
        onPointerDown={(event) => {
          pointerInteracting.current =
            event.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(event) => {
          if (pointerInteracting.current !== null) {
            const delta = event.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 80;
          }
        }}
        onTouchMove={(event) => {
          if (pointerInteracting.current !== null && event.touches[0]) {
            const delta = event.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 80;
          }
        }}
        aria-label="Animated global mentorship network globe"
      />
    </div>
  );
}
