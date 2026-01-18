# 🌌 Elite 3D Artist Portfolio

> A next-generation artist portfolio featuring cinematic 3D animated backgrounds, real-time WebGL shaders, and immersive motion design.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r160+-000000?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646cff?logo=vite)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12+-88ce02?logo=greensock)](https://greensock.com/gsap/)

![Portfolio Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop)

---

## ✨ Features

### 🎨 Visual Excellence
- **Cinematic 3D Backgrounds** - Infinite looping particle systems with custom GLSL shaders
- **Real-time WebGL Effects** - GPU-accelerated rendering with 60fps performance
- **Post-Processing Pipeline** - Unreal Bloom, FXAA anti-aliasing, Depth of Field
- **Glassmorphism UI** - Modern frosted glass aesthetic with backdrop blur
- **Neon Gradients** - Cyberpunk-inspired color palette with dynamic lighting

### 🚀 Technical Features
- **Custom Shaders** - Hand-written GLSL vertex and fragment shaders
- **Mouse-Reactive Parallax** - Camera movement responding to cursor position
- **Scroll-Based Animations** - GSAP ScrollTrigger for cinematic reveals
- **Particle Physics** - 5000+ particles with wave simulation and orbital rotation
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Performance Optimized** - GPU rendering with automatic pixel ratio adjustment

### 🎯 Interactive Elements
- **3D Tilt Cards** - Perspective transforms on project cards
- **Smooth Transitions** - Spring physics animations with Motion
- **Form Validation** - Real-time contact form with success states
- **Progress Indicator** - Scroll progress bar with gradient styling
- **Micro-interactions** - Hover effects, button animations, link transitions

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML5** | - | Semantic structure and accessibility |
| **CSS3** | - | Glassmorphism, gradients, animations |
| **SCSS** | - | Advanced styling architecture |
| **JavaScript** | ES6+ | Modern animation logic |
| **TypeScript** | 5.0+ | Type-safe scalable architecture |

### 3D & Graphics
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Three.js** | r160+ | 3D scenes, camera, meshes, lighting |
| **WebGL** | 2.0 | GPU-accelerated rendering |
| **GLSL** | - | Custom vertex & fragment shaders |
| **PostProcessing** | - | Bloom, FXAA, DOF effects |

### Frontend Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18+ | Component architecture |
| **Vite** | 5.0+ | Fast build tool and dev server |
| **Motion** | 11+ | Declarative animations (Framer Motion) |
| **GSAP** | 3.12+ | Timeline-based scroll animations |

### Build & Deploy
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 18+ | Development environment |
| **npm** | 9+ | Package management |
| **GitHub Actions** | - | CI/CD pipeline |
| **Vercel/Pages** | - | Production deployment |

---

## 📁 Project Structure

```
elite-3d-portfolio/
│
├── public/                      # Static assets
│   └── favicon.ico
│
├── src/
│   ├── components/              # React components
│   │   ├── three/              # Three.js components
│   │   │   ├── Scene3D.tsx     # Main 3D scene with particles
│   │   │   ├── ParticleField.tsx
│   │   │   ├── ShaderPlane.tsx
│   │   │   └── PostProcessing.tsx
│   │   │
│   │   ├── ui/                 # UI components
│   │   │   ├── ProjectCard.tsx  # 3D tilt project cards
│   │   │   └── ScrollProgress.tsx
│   │   │
│   │   ├── Navigation.tsx      # Glassmorphism navbar
│   │   ├── Hero.tsx            # Hero section with 3D bg
│   │   ├── Gallery.tsx         # 5 project sections
│   │   └── Contact.tsx         # Contact form
│   │
│   ├── shaders/                # GLSL shaders
│   │   ├── vertex.glsl         # Particle vertex shader
│   │   └── fragment.glsl       # Particle fragment shader
│   │
│   ├── styles/                 # Stylesheets
│   │   └── globals.css         # Global CSS with tokens
│   │
│   ├── utils/                  # Utility functions
│   │   └── unsplash.ts         # Image helper
│   │
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
│
├── package.json                # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- Modern browser with WebGL 2.0 support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/elite-3d-portfolio.git
cd elite-3d-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 🎨 Shader Architecture

### Custom Particle Vertex Shader

The vertex shader handles:
- **Wave Animation** - Sine/cosine wave displacement
- **Mouse Interaction** - Particles pushed away from cursor
- **Orbital Rotation** - Time-based rotation matrix
- **Size Variation** - Depth-based particle scaling
- **Color Generation** - Position-based color variation

```glsl
uniform float uTime;
uniform vec2 uMouse;
attribute float aScale;
attribute vec3 aRandomPos;

varying vec3 vColor;

void main() {
  vec3 pos = position;
  
  // Wave animation
  float wave = sin(pos.x * 0.5 + uTime) * cos(pos.z * 0.5 + uTime) * 0.3;
  pos.y += wave;
  
  // Mouse repulsion
  vec2 mouseInfluence = uMouse * 2.0;
  float dist = distance(pos.xz, mouseInfluence);
  float pushForce = smoothstep(3.0, 0.0, dist);
  pos.y += pushForce * 0.5;
  
  // Orbital rotation
  float angle = uTime * 0.1 + aRandomPos.x;
  mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  pos.xz = rotation * pos.xz;
  
  // Point size calculation
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aScale * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  
  // Dynamic color
  vColor = vec3(
    0.5 + sin(pos.x * 0.5 + uTime * 0.5) * 0.5,
    0.3 + cos(pos.y * 0.5 + uTime * 0.3) * 0.3,
    0.8 + sin(pos.z * 0.5 + uTime * 0.4) * 0.2
  );
}
```

### Custom Fragment Shader

Features:
- Circular particle shapes with soft edges
- Alpha blending for glow effect
- Pulsing animation synced with time
- Neon color output

```glsl
uniform float uTime;
varying vec3 vColor;

void main() {
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  
  if (dist > 0.5) discard;
  
  float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
  alpha *= 0.6;
  
  float pulse = sin(uTime * 2.0) * 0.2 + 0.8;
  vec3 color = vColor * 1.5;
  
  gl_FragColor = vec4(color, alpha * pulse);
}
```

---

## 🎭 Animation System

### GSAP Timeline Animations

```typescript
// Hero text reveal
const tl = gsap.timeline({ delay: 0.5 });

tl.from(titleRef.current, {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: 'power4.out',
})
.from(subtitleRef.current, {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
}, '-=0.8');
```

### ScrollTrigger Integration

```typescript
gsap.from('.gallery-title', {
  scrollTrigger: {
    trigger: '.gallery-title',
    start: 'top 80%',
    end: 'top 50%',
    scrub: 1,
  },
  y: 100,
  opacity: 0,
});
```

### Motion Micro-interactions

```tsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(138, 43, 226, 0.6)' }}
  whileTap={{ scale: 0.95 }}
  className="cta-button"
>
  Explore Projects
</motion.button>
```

---

## 🎯 Post-Processing Pipeline

```typescript
// Unreal Bloom Pass - Cinematic Glow
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,  // strength
  0.4,  // radius
  0.85  // threshold
);
composer.addPass(bloomPass);

// FXAA Pass - Anti-aliasing
const fxaaPass = new ShaderPass(FXAAShader);
const pixelRatio = renderer.getPixelRatio();
fxaaPass.material.uniforms['resolution'].value.x = 1 / (width * pixelRatio);
fxaaPass.material.uniforms['resolution'].value.y = 1 / (height * pixelRatio);
composer.addPass(fxaaPass);
```

**Benefits:**
- **Bloom** - Neon glow effect for lights and particles
- **FXAA** - Fast anti-aliasing without performance hit
- **Tone Mapping** - ACES Filmic for cinematic color grading

---

## 🎨 Design System

### Color Palette

```css
/* Cinematic Neon Colors */
--color-primary: #8a2be2;    /* Neon Purple */
--color-secondary: #00ffff;   /* Cyan */
--color-accent: #ff00ff;      /* Magenta */
--color-tertiary: #7b68ee;    /* Medium Slate Blue */

/* Backgrounds */
--color-bg-dark: #0a0a0f;
--color-bg-darker: #050508;
--color-bg-card: rgba(15, 15, 25, 0.6);

/* Text */
--color-text-primary: #ffffff;
--color-text-secondary: #b8b8d0;
--color-text-muted: #6a6a8a;
```

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #8a2be2 0%, #ff00ff 100%);
--gradient-secondary: linear-gradient(135deg, #00ffff 0%, #7b68ee 100%);
--gradient-orb: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
```

### Glassmorphism

```css
background: rgba(15, 15, 25, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(138, 43, 226, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

---

## ⚡ Performance Optimizations

### GPU Acceleration
- Three.js WebGL renderer with hardware acceleration
- Pixel ratio clamped to max 2 for high-DPI displays
- Transform3D for CSS animations (GPU layer)
- Will-change property for frequently animated elements

### Efficient Rendering
- RequestAnimationFrame loop for 60fps
- Geometry instancing for particle system
- Shader material compilation caching
- Automatic LOD based on device capabilities

### Code Splitting
- Dynamic imports for Three.js modules
- Lazy loading of components
- Tree shaking with Vite

### Mobile Optimizations
- Reduced particle count on mobile devices
- Simplified post-processing effects
- Touch event optimization
- Viewport-based rendering

```typescript
// Adaptive particle count
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 2000 : 5000;
```

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

### Features
- Fluid typography with `clamp()`
- CSS Grid with `auto-fit` and `minmax()`
- Touch-friendly interactions
- Hamburger menu for mobile
- Optimized canvas size

---

## 🚢 Deployment

### GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
});
```

2. Deploy:
```bash
npm run build
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via drag-and-drop or CLI

---

## 🔧 Configuration

### TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Vite (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
});
```

---

## 🧪 GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

## 🎓 Learning Resources

### Three.js
- [Official Documentation](https://threejs.org/docs/)
- [Three.js Journey](https://threejs-journey.com/)
- [Three.js Fundamentals](https://threejsfundamentals.org/)

### GLSL Shaders
- [The Book of Shaders](https://thebookofshaders.com/)
- [ShaderToy](https://www.shadertoy.com/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

### GSAP
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

### Motion (Framer Motion)
- [Motion Documentation](https://motion.dev/)
- [Animation Examples](https://motion.dev/examples)

---

## 🎯 Browser Support

| Browser | Version | WebGL 2.0 | Notes |
|---------|---------|-----------|-------|
| Chrome | 90+ | ✅ | Full support |
| Firefox | 88+ | ✅ | Full support |
| Safari | 15+ | ✅ | Full support |
| Edge | 90+ | ✅ | Full support |
| Opera | 76+ | ✅ | Full support |

**Note**: WebGL 2.0 is required for advanced shader features. Fallback to WebGL 1.0 can be implemented if needed.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Elite 3D Portfolio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🌟 Showcase

### Live Demo
**[View Live Demo](https://your-portfolio-url.com)** 🚀

### Screenshots

#### Hero Section - 3D Particle Field
![Hero](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop)

#### Project Gallery - Cinematic Cards
![Gallery](https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=600&fit=crop)

#### Contact Section - Glassmorphism
![Contact](https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1200&h=600&fit=crop)

---

## 🎖️ Credits

### Technologies
- **Three.js** - 3D graphics library
- **React** - UI framework
- **GSAP** - Animation library
- **Motion** - Declarative animations
- **Vite** - Build tool

### Inspiration
- Awwwards winning portfolios
- WebGL experiments on CodePen
- Cyberpunk 2077 UI/UX design
- Blade Runner 2049 aesthetics

---

## 📧 Contact

**Your Name** - [@yourtwitter](https://twitter.com/yourtwitter)

**Email** - hello@elite3d.com

**Portfolio** - [elite3d.com](https://elite3d.com)

**Project Link** - [github.com/yourusername/elite-3d-portfolio](https://github.com/yourusername/elite-3d-portfolio)

---

## 🚀 Roadmap

- [x] Core 3D scene with particle system
- [x] Custom GLSL shaders
- [x] Post-processing effects
- [x] Responsive design
- [x] Contact form
- [ ] WebXR/VR support
- [ ] Audio reactivity
- [ ] Case study pages
- [ ] CMS integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Blog section

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ and Three.js**

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>
