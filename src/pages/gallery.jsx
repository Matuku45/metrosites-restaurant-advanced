import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
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

// Animated Camera Component
function AnimatedCamera() {
  const cameraRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const radius = 15;
    const height = 5 + Math.sin(time * 0.5) * 2;

    cameraRef.current.position.x = Math.cos(time * 0.3) * radius;
    cameraRef.current.position.z = Math.sin(time * 0.3) * radius;
    cameraRef.current.position.y = height;
    cameraRef.current.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={cameraRef} fov={75} />;
}

// Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }, (_, i) => (
        <Sphere key={i} args={[0.02]} position={[
          (Math.random() - 0.5) * 20,
          Math.random() * 8,
          (Math.random() - 0.5) * 20
        ]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.2} />
        </Sphere>
      ))}
    </group>
  );
}

// Animated Table Component
function AnimatedTable({ position }) {
  const tableRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    tableRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.05;
  });

  return (
    <group ref={tableRef} position={position}>
      {/* Table top */}
      <Box args={[2, 0.1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      {/* Table legs */}
      <Box args={[0.1, 1.5, 0.1]} position={[-0.9, -0.8, -0.4]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1.5, 0.1]} position={[0.9, -0.8, -0.4]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1.5, 0.1]} position={[-0.9, -0.8, 0.4]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1.5, 0.1]} position={[0.9, -0.8, 0.4]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      {/* Chairs */}
      <Box args={[0.5, 0.8, 0.5]} position={[-1.2, -0.4, 0]}>
        <meshStandardMaterial color="#DC143C" />
      </Box>
      <Box args={[0.5, 0.8, 0.5]} position={[1.2, -0.4, 0]}>
        <meshStandardMaterial color="#DC143C" />
      </Box>
    </group>
  );
}

// 3D Restaurant Scene Component
function RestaurantScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} castShadow />

      {/* Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Plane>

      {/* Walls */}
      <Box args={[20, 8, 0.2]} position={[0, 2, -10]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>
      <Box args={[20, 8, 0.2]} position={[0, 2, 10]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>
      <Box args={[0.2, 8, 20]} position={[-10, 2, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>
      <Box args={[0.2, 8, 20]} position={[10, 2, 0]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </Box>

      {/* Animated Tables */}
      {[0, 1, 2].map((i) => (
        <AnimatedTable key={i} position={[-5 + i * 5, -1.5, -3]} />
      ))}

      {/* Bar Counter */}
      <Box args={[8, 1, 1]} position={[0, -0.5, 6]} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </Box>
      <Box args={[8, 0.5, 0.5]} position={[0, 0, 6.5]} castShadow receiveShadow>
        <meshStandardMaterial color="#654321" roughness={0.6} />
      </Box>

      {/* Bar Stools */}
      {[0, 1, 2, 3].map((i) => (
        <Cylinder key={i} args={[0.2, 0.2, 0.8]} position={[-3 + i * 2, -0.4, 5]} castShadow>
          <meshStandardMaterial color="#2C2C2C" roughness={0.8} />
        </Cylinder>
      ))}

      {/* Decorative Elements */}
      <Box args={[0.2, 3, 0.2]} position={[-9, 0.5, -9]} castShadow>
        <meshStandardMaterial color="#228B22" />
      </Box>
      <Box args={[0.2, 3, 0.2]} position={[9, 0.5, -9]} castShadow>
        <meshStandardMaterial color="#228B22" />
      </Box>

      {/* Chandelier */}
      <Cylinder args={[0.5, 0.8, 0.3]} position={[0, 6, 0]} castShadow>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.1} />
      </Cylinder>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Welcome Text */}
      <Text
        position={[0, 4, -9.8]}
        fontSize={0.5}
        color="#8B4513"
        anchorX="center"
        anchorY="middle"
      >
        Welcome to MetroSites Restaurant
      </Text>

      {/* Post-processing Effects */}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.9} />
        <ChromaticAberration offset={[0.002, 0.002]} />
      </EffectComposer>
    </>
  );
}

export default function Gallery() {
  const [showTour, setShowTour] = useState(false);
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
  ]

  const categories = [
    { name: "All", value: "all" },
    { name: "Food", value: "food" },
    { name: "Interior", value: "interior" },
    { name: "Chef", value: "chef" },
    { name: "Bar", value: "bar" },
    { name: "Events", value: "events" },
    { name: "Exterior", value: "exterior" },
    { name: "Staff", value: "staff" }
  ]

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

        {/* Virtual Tour Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Virtual Tour</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience MetroSites from the comfort of your home with our immersive 3D virtual tour.
            Watch the automatic camera movement and explore our restaurant in stunning detail.
          </p>
          <div className="mb-8">
            <div className="h-96 bg-black rounded-lg overflow-hidden mb-4">
              <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
                <AnimatedCamera />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <RestaurantScene />
              </Canvas>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowTour(!showTour)}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  showTour
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {showTour ? 'Stop Auto Tour' : 'Start Auto Tour'}
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
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Instagram
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Facebook
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
