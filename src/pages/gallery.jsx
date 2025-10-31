import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import rest1 from '../assets/rest1.webp';
import food from '../assets/food.jpg';
import rest2 from '../assets/rest2.webp';
import chef from '../assets/chef.jpg';
import winepairing from '../assets/WINEPAIRING.webp';
import milkshakespecial from '../assets/milkshakespecial.jpg';
import rest3 from '../assets/rest3.webp';
import rest4 from '../assets/rest4.webp';
import winetesting from '../assets/winetesting.webp';
import ingridients from '../assets/ingridients.webp';
import jazevent from '../assets/jazevent.webp';
import testimonial from '../assets/testimonial.jpg';
import rest5 from '../assets/rest5.webp';
import pasta from '../assets/pasta.webp';
import beefwillington from '../assets/beefwillington.webp';
import chef1 from '../assets/chef1.jpg';
import eventholidayfiest from '../assets/eventholidayfiest.webp';
import testimonial2 from '../assets/testimonial2.jpg';
import food2 from '../assets/food2.webp';
import grilledsalmon from '../assets/grilledsalmon.webp';
import chef2 from '../assets/chef2.jpg';
import rest6 from '../assets/rest6.webp';
import food3 from '../assets/food3.webp';
import happyhourspecial from '../assets/happyhourspecial.webp';
import fivewaystomaketea from '../assets/fivewaystomaketea.webp';
import rest7 from '../assets/rest7.webp';
import happyhourspecial2 from '../assets/happyhourspecial2.webp';
import serving from '../assets/serving.jpg';

// Animated Camera Component with Realistic Movement
function AnimatedCamera({ isAuto }) {
  const cameraRef = useRef();

  useFrame((state) => {
    if (!isAuto) return;
    const time = state.clock.getElapsedTime();
    const radius = 18;
    const height = 6 + Math.sin(time * 0.4) * 3;
    const x = Math.cos(time * 0.2) * radius;
    const z = Math.sin(time * 0.2) * radius;

    cameraRef.current.position.x = x;
    cameraRef.current.position.z = z;
    cameraRef.current.position.y = height;
    cameraRef.current.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={cameraRef} fov={75} />;
}

// Floating Particles Component with Realistic Physics
function FloatingParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.05;
    particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 100 }, (_, i) => (
        <Sphere key={i} args={[0.015]} position={[
          (Math.random() - 0.5) * 25,
          Math.random() * 10,
          (Math.random() - 0.5) * 25
        ]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
        </Sphere>
      ))}
    </group>
  );
}

// Animated Table Component with Enhanced Realism
function AnimatedTable({ position }) {
  const tableRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    tableRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.03;
    tableRef.current.rotation.y = Math.sin(time * 0.5 + position[0]) * 0.02;
  });

  return (
    <group ref={tableRef} position={position}>
      {/* Table top with texture */}
      <Box args={[2.2, 0.15, 1.2]} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.6} metalness={0.1} />
      </Box>
      {/* Table legs with detail */}
      <Cylinder args={[0.08, 0.08, 1.5]} position={[-0.9, -0.75, -0.5]} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </Cylinder>
      <Cylinder args={[0.08, 0.08, 1.5]} position={[0.9, -0.75, -0.5]} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </Cylinder>
      <Cylinder args={[0.08, 0.08, 1.5]} position={[-0.9, -0.75, 0.5]} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </Cylinder>
      <Cylinder args={[0.08, 0.08, 1.5]} position={[0.9, -0.75, 0.5]} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </Cylinder>
      {/* Chairs with cushions */}
      <Box args={[0.6, 0.9, 0.6]} position={[-1.3, -0.45, 0]} castShadow>
        <meshStandardMaterial color="#DC143C" roughness={0.7} />
      </Box>
      <Box args={[0.6, 0.9, 0.6]} position={[1.3, -0.45, 0]} castShadow>
        <meshStandardMaterial color="#DC143C" roughness={0.7} />
      </Box>
      {/* Chair cushions */}
      <Box args={[0.5, 0.1, 0.5]} position={[-1.3, -0.05, 0]} castShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>
      <Box args={[0.5, 0.1, 0.5]} position={[1.3, -0.05, 0]} castShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>
    </group>
  );
}

// Realistic Glassware on Tables
function TableGlassware({ position }) {
  return (
    <group position={position}>
      <Cylinder args={[0.05, 0.03, 0.2]} position={[-0.5, 0.1, -0.3]} castShadow>
        <meshPhysicalMaterial color="#FFFFFF" transmission={0.9} opacity={0.8} metalness={0} roughness={0} />
      </Cylinder>
      <Cylinder args={[0.05, 0.03, 0.2]} position={[0.5, 0.1, 0.3]} castShadow>
        <meshPhysicalMaterial color="#FFFFFF" transmission={0.9} opacity={0.8} metalness={0} roughness={0} />
      </Cylinder>
    </group>
  );
}

// 3D Restaurant Scene Component with Advanced Realism
function RestaurantScene() {
  return (
    <>
      {/* Advanced Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[15, 15, 10]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <pointLight position={[-15, -15, -15]} intensity={1} color="#FFE4B5" />
      <spotLight position={[0, 12, 0]} angle={0.4} penumbra={0.8} intensity={1.2} castShadow color="#FFF8DC" />

      {/* Realistic Floor with Texture */}
      <Plane args={[25, 25]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.9} metalness={0.1} />
      </Plane>

      {/* Detailed Walls */}
      <Box args={[25, 10, 0.3]} position={[0, 3, -12.5]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.95} />
      </Box>
      <Box args={[25, 10, 0.3]} position={[0, 3, 12.5]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.95} />
      </Box>
      <Box args={[0.3, 10, 25]} position={[-12.5, 3, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.95} />
      </Box>
      <Box args={[0.3, 10, 25]} position={[12.5, 3, 0]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.95} />
      </Box>

      {/* Animated Tables with Glassware */}
      {[0, 1, 2].map((i) => (
        <group key={i}>
          <AnimatedTable position={[-6 + i * 6, -1.5, -4]} />
          <TableGlassware position={[-6 + i * 6, -1.5, -4]} />
        </group>
      ))}

      {/* Detailed Bar Counter */}
      <Box args={[10, 1.2, 1.5]} position={[0, -0.4, 7]} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.2} />
      </Box>
      <Box args={[10, 0.6, 0.8]} position={[0, 0.3, 7.7]} castShadow receiveShadow>
        <meshStandardMaterial color="#654321" roughness={0.6} metalness={0.3} />
      </Box>

      {/* Realistic Bar Stools */}
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={i} position={[-4 + i * 2, -0.4, 6]}>
          <Cylinder args={[0.25, 0.25, 0.8]} position={[0, 0, 0]} castShadow>
            <meshStandardMaterial color="#2C2C2C" roughness={0.8} metalness={0.5} />
          </Cylinder>
          <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 0.45, 0]} castShadow>
            <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
          </Cylinder>
        </group>
      ))}

      {/* Decorative Plants */}
      <Cylinder args={[0.3, 0.3, 3]} position={[-11, 0, -11]} castShadow>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Sphere args={[0.5]} position={[-11, 2, -11]} castShadow>
        <meshStandardMaterial color="#228B22" />
      </Sphere>
      <Cylinder args={[0.3, 0.3, 3]} position={[11, 0, -11]} castShadow>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Sphere args={[0.5]} position={[11, 2, -11]} castShadow>
        <meshStandardMaterial color="#228B22" />
      </Sphere>

      {/* Chandelier with Crystals */}
      <Cylinder args={[0.6, 0.9, 0.4]} position={[0, 7, 0]} castShadow>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.2} />
      </Cylinder>
      {Array.from({ length: 8 }, (_, i) => (
        <Sphere key={i} args={[0.1]} position={[
          Math.cos((i / 8) * Math.PI * 2) * 0.8,
          6.5,
          Math.sin((i / 8) * Math.PI * 2) * 0.8
        ]} castShadow>
          <meshPhysicalMaterial color="#FFFFFF" transmission={0.95} opacity={0.9} metalness={0} roughness={0} />
        </Sphere>
      ))}

      {/* Enhanced Floating Particles */}
      <FloatingParticles />

      {/* Atmospheric Fog */}
      <fog attach="fog" args={['#F5F5DC', 10, 30]} />

      {/* Welcome Text with Glow */}
      <Text
        position={[0, 5, -12.2]}
        fontSize={0.6}
        color="#8B4513"
        anchorX="center"
        anchorY="middle"
      >
        Welcome to MetroSites Restaurant
      </Text>

      {/* Advanced Post-processing Effects */}
      <EffectComposer>
        <Bloom intensity={0.8} luminanceThreshold={0.8} />
        <ChromaticAberration offset={[0.003, 0.003]} />
        <DepthOfField focusDistance={0.1} focalLength={0.1} bokehScale={2} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </>
  );
}

export default function Gallery() {
  const [isAutoTour, setIsAutoTour] = useState(true);
  const galleryImages = [
    { src: rest1, alt: "Restaurant interior", category: "interior" },
    { src: food, alt: "Signature dish", category: "food" },
    { src: rest2, alt: "Dining area", category: "interior" },
    { src: chef, alt: "Chef preparing food", category: "chef" },
    { src: winepairing, alt: "Wine selection", category: "bar" },
    { src: milkshakespecial, alt: "Dessert display", category: "food" },

    { src: winetesting, alt: "Cocktail bar", category: "bar" },
    { src: ingridients, alt: "Fresh ingredients", category: "food" },
    { src: jazevent, alt: "Event setup", category: "events" },
    { src: testimonial, alt: "Team photo", category: "staff" },

    { src: pasta, alt: "Pasta dish", category: "food" },
    { src: beefwillington, alt: "Beef Wellington", category: "food" },
    { src: chef1, alt: "Chef at work", category: "chef" },
    { src: eventholidayfiest, alt: "Holiday event", category: "events" },
    { src: testimonial2, alt: "Staff team", category: "staff" },

    { src: grilledsalmon, alt: "Grilled salmon", category: "food" },
    { src: chef2, alt: "Culinary team", category: "chef" },


    { src: happyhourspecial, alt: "Happy hour special", category: "food" },
    { src: fivewaystomaketea, alt: "Tea preparation", category: "food" },

    { src: happyhourspecial2, alt: "Special cocktail", category: "bar" },
    { src: serving, alt: "Food serving", category: "chef" }
  ];

  const categories = [
    { name: "All", value: "all" },
    { name: "Food", value: "food" },
    { name: "Interior", value: "interior" },
    { name: "Chef", value: "chef" },
    { name: "Bar", value: "bar" },
    { name: "Events", value: "events" },
    { name: "Exterior", value: "exterior" },
    { name: "Staff", value: "staff" }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Take a visual journey through MetroSites Restaurant. From our elegant dining spaces to our culinary creations,
          explore what makes us special.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.alt}</h3>
                <p className="text-sm text-gray-600 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Section - Always Visible with Auto Animation */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Virtual Tour</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience MetroSites from the comfort of your home with our immersive 3D virtual tour.
            The camera automatically orbits the restaurant, showcasing every detail in stunning realism.
          </p>
          <div className="mb-8">
            <div className="h-96 bg-gradient-to-b from-black to-gray-900 rounded-lg overflow-hidden mb-4 shadow-2xl">
              <Canvas camera={{ position: [0, 5, 10], fov: 75 }} shadows>
                <AnimatedCamera isAuto={isAutoTour} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} enabled={!isAutoTour} />
                <RestaurantScene />
              </Canvas>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsAutoTour(!isAutoTour)}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  isAutoTour
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isAutoTour ? 'Stop Auto Tour' : 'Start Auto Tour'}
              </button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
                Manual Controls
              </button>
            </div>
          </div>
        </div>

        {/* Photo Contest */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you dined with us? Share your photos and tag us on social media for a chance to be featured in our gallery!
          </p>
