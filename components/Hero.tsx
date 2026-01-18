import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    // Configuration
    const lines = 18; 
    const gap = height / lines;
    
    // Lerp factor: Higher = faster response, Lower = smoother/slower lag
    // 0.1 is a sweet spot for "organic" feel
    const lerpFactor = 0.1; 

    // Initialize points
    const waves = Array.from({ length: lines }, (_, i) => ({
      baseY: (i + 0.5) * gap,
      phase: i * 0.4, // Stagger phases for "fabric" look
      points: [] as { x: number, currentY: number, targetY: number }[]
    }));

    const init = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const spacing = 40; 
      const pointsCount = Math.ceil(width / spacing) + 2; 
      
      waves.forEach((wave, i) => {
        wave.baseY = (i + 0.5) * (height / lines);
        wave.points = [];
        for (let x = 0; x <= pointsCount; x++) {
          wave.points.push({
            x: x * spacing,
            currentY: wave.baseY, // Start flat
            targetY: wave.baseY
          });
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';

      waves.forEach((wave, i) => {
        // Gradient for depth
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        // Adjusted colors for the grey background
        gradient.addColorStop(0, 'rgba(163, 163, 163, 0.1)'); // Fade edges
        gradient.addColorStop(0.5, 'rgba(115, 115, 115, 0.4)'); // Stronger center
        gradient.addColorStop(1, 'rgba(163, 163, 163, 0.1)');
        ctx.strokeStyle = gradient;

        ctx.beginPath();
        
        wave.points.forEach((point, j) => {
          // 1. Calculate Target Position (Sine Wave)
          const waveAmplitude = 12;
          const waveFrequency = 0.002;
          
          // The "resting" position of the point based on time
          const sineOffset = Math.sin(point.x * waveFrequency + time + wave.phase) * waveAmplitude;
          
          // 2. Calculate Mouse Influence
          const dx = point.x - mouseX;
          const dy = point.currentY - mouseY; // Use current visual Y for hit testing
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 250; // Radius of influence
          
          let mouseOffset = 0;
          if (dist < maxDist) {
             const force = (1 - dist / maxDist); // 0 to 1
             // Smooth bell curve shape for the mouse push
             const direction = dy < 0 ? -1 : 1;
             mouseOffset = force * direction * 40; 
          }

          // 3. Set Target
          point.targetY = wave.baseY + sineOffset + mouseOffset;

          // 4. LERP: Move Current towards Target
          // This eliminates glitching because it can never "overshoot" infinitely
          point.currentY += (point.targetY - point.currentY) * lerpFactor;

          // Draw
          if (j === 0) {
            ctx.moveTo(point.x, point.currentY);
          } else {
            const prev = wave.points[j - 1];
            const cx = (prev.x + point.x) / 2;
            const cy = (prev.currentY + point.currentY) / 2;
            ctx.quadraticCurveTo(prev.x, prev.currentY, cx, cy);
          }
        });

        const last = wave.points[wave.points.length - 1];
        ctx.lineTo(last.x, last.currentY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
       mouseX = -1000;
       mouseY = -1000;
    }

    const handleResize = () => {
      init();
    };

    init();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] w-full flex flex-col items-center justify-center overflow-hidden bg-medical-50"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60 pointer-events-auto"
      />

      <div className="z-10 text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center h-full justify-center relative pointer-events-none">
        
        {/* Visual Anchor: Mask for Text Legibility */}
        {/* Changed to #EEEEEE (Background color) to fully mask lines behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(closest-side,#EEEEEE_50%,transparent_100%)] -z-10 blur-[40px] opacity-100"></div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="inline-block text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
            ( Francis Life )
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-medium text-6xl md:text-8xl lg:text-9xl text-navy tracking-tight leading-[0.9] mb-8 relative"
        >
          Skin Protocol
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-lg md:text-2xl text-navy font-light leading-relaxed mb-6 max-w-2xl mx-auto"
        >
          Tratamento facial orientado por protocolo, desenvolvido para acompanhar o ritmo real da pele.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-sm md:text-base text-stone-500 font-normal leading-relaxed mb-16 max-w-lg mx-auto"
        >
          Uma linha de séruns com linguagem clínica, uso contínuo e funções bem definidas para cada necessidade cutânea.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-brand-orange"
        >
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;