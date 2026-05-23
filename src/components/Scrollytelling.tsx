import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 246;
const frameFiles = import.meta.glob('../../animate cart/ezgif-frame-*.png', { eager: true, as: 'url' });
const framePaths = Object.keys(frameFiles).sort().slice(0, TOTAL_FRAMES).map(key => frameFiles[key]);

const Scrollytelling = ({ scrollProgress = 0 }: { scrollProgress?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const frames = useRef<HTMLImageElement[]>([]);
  const frameIndex = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    const loadImages = async () => {
      const promises = framePaths.map((path, index) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            frames.current[index] = img;
            resolve(img);
          };
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setIsLoaded(true);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (index: number) => {
      const img = frames.current[index];
      if (!img) return;

      const { width, height } = canvas;
      const aspect = img.width / img.height;
      const canvasAspect = width / height;

      let drawWidth, drawHeight;
      const zoomFactor = 1.35;

      if (aspect > canvasAspect) {
        drawHeight = height * zoomFactor;
        drawWidth = drawHeight * aspect;
      } else {
        drawWidth = width * zoomFactor;
        drawHeight = drawWidth / aspect;
      }

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndex.current);
    };
    window.addEventListener('resize', resize);
    resize();

    const progress = scrollProgress / (containerRef.current?.offsetHeight || 1);
    const index = Math.min(Math.floor(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
    if (frameIndex.current !== index) {
      frameIndex.current = index;
      render(index);
    }

    render(0);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isLoaded, scrollProgress]);

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
          Loading: {loadingProgress}%
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full bg-black scale-105 z-0"
      />
    </div>
  );
};

export default Scrollytelling;
