import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Particle field
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      const t = Math.random();
      colors[i * 3] = t > 0.7 ? 1 : 0.3 + t * 0.5;
      colors[i * 3 + 1] = t > 0.7 ? 0.84 : 0.1 + t * 0.2;
      colors[i * 3 + 2] = t > 0.7 ? 0 : 0.05;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.7, sizeAttenuation: true });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Floating geometric shapes (abstract car-like)
    const shapes: THREE.Mesh[] = [];

    // Main ring
    const torusGeo = new THREE.TorusGeometry(1.8, 0.015, 8, 80);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.15 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2.5;
    scene.add(torus);

    // Inner ring
    const torus2Geo = new THREE.TorusGeometry(1.2, 0.01, 8, 60);
    const torus2Mat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.1 });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    torus2.rotation.x = Math.PI / 3;
    torus2.rotation.z = Math.PI / 4;
    scene.add(torus2);

    // Floating geometric car silhouette approximation using boxes
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.08, wireframe: true });

    const carBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.4, 0.9), bodyMat);
    carBody.position.set(0, -0.1, 0);
    scene.add(carBody);
    shapes.push(carBody);

    const carRoof = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.85), bodyMat);
    carRoof.position.set(0, 0.37, 0);
    scene.add(carRoof);
    shapes.push(carRoof);

    // Wheel circles
    const wheelMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.12 });
    const wheelGeo = new THREE.TorusGeometry(0.22, 0.06, 8, 24);

    const w1 = new THREE.Mesh(wheelGeo, wheelMat);
    w1.position.set(-0.8, -0.38, 0);
    scene.add(w1);
    shapes.push(w1);

    const w2 = new THREE.Mesh(wheelGeo, wheelMat);
    w2.position.set(0.8, -0.38, 0);
    scene.add(w2);
    shapes.push(w2);

    // Grid plane
    const gridHelper = new THREE.GridHelper(20, 30, 0xFFD700, 0x222230);
    (gridHelper.material as THREE.Material & { opacity: number; transparent: boolean }).opacity = 0.2;
    (gridHelper.material as THREE.Material & { transparent: boolean }).transparent = true;
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Ambient glow spheres
    for (let i = 0; i < 3; i++) {
      const sg = new THREE.SphereGeometry(0.08, 8, 8);
      const sm = new THREE.MeshBasicMaterial({ color: i === 0 ? 0xFFD700 : 0xFF8C00, transparent: true, opacity: 0.6 });
      const s = new THREE.Mesh(sg, sm);
      s.position.set(Math.cos(i * 2.1) * 2.5, Math.sin(i * 2.1) * 1.2, -1);
      scene.add(s);
      shapes.push(s);
    }

    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    let t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.008;

      particles.rotation.y = t * 0.05;
      particles.rotation.x = t * 0.02;

      torus.rotation.z = t * 0.1;
      torus2.rotation.y = t * 0.15;

      carBody.rotation.y = t * 0.2 + Math.sin(t * 0.3) * 0.05;
      carRoof.rotation.y = t * 0.2 + Math.sin(t * 0.3) * 0.05;
      w1.rotation.y = t * 0.2 + Math.sin(t * 0.3) * 0.05;
      w2.rotation.y = t * 0.2 + Math.sin(t * 0.3) * 0.05;

      const groupY = Math.sin(t * 0.5) * 0.15;
      carBody.position.y = -0.1 + groupY;
      carRoof.position.y = 0.37 + groupY;
      w1.position.y = -0.38 + groupY;
      w2.position.y = -0.38 + groupY;

      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      shapes.forEach((s, i) => {
        if (i >= shapes.length - 3) {
          s.position.x = Math.cos(t * 0.4 + i * 2.1) * 2.5;
          s.position.y = Math.sin(t * 0.4 + i * 2.1) * 1.2;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
