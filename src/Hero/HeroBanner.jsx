import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ChevronLeft, ChevronRight, Code, Cpu, Cloud, ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 30,
      y: (e.clientY / window.innerHeight) * 30
    });
  };

  const slides = [
    {
      title: "Innovate with Confidence",
      subtitle: "Transform Your Business with Custom Software Solutions",
      description: "Enterprise-grade solutions tailored to your unique business needs",
      cta: "Get Started",
      icon: <Code className="display-1 text-danger" />,
      floatingItems: [
        { icon: <Code size={24} />, label: "Clean Code" },
        { icon: <Cpu size={24} />, label: "High Performance" },
        { icon: <Cloud size={24} />, label: "Scalable" }
      ]
    },
    {
      title: "Cloud-Native Solutions",
      subtitle: "Scale Your Business with Modern Cloud Architecture",
      description: "Secure, scalable, and reliable cloud infrastructure for your applications",
      cta: "Learn More",
      icon: <Cloud className="display-1 text-danger" />,
      floatingItems: [
        { icon: <Cloud size={24} />, label: "Cloud-Native" },
        { icon: <Code size={24} />, label: "Microservices" },
        { icon: <Cpu size={24} />, label: "Containerized" }
      ]
    },
    {
      title: "AI-Powered Innovation",
      subtitle: "Leverage the Power of Artificial Intelligence",
      description: "Smart solutions that grow and adapt with your business",
      cta: "Explore AI",
      icon: <Cpu className="display-1 text-danger" />,
      floatingItems: [
        { icon: <Cpu size={24} />, label: "Machine Learning" },
        { icon: <Code size={24} />, label: "Neural Networks" },
        { icon: <Cloud size={24} />, label: "Big Data" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="position-relative vh-100 overflow-hidden bg-black" onMouseMove={handleMouseMove}>
      <Particles
        className="position-absolute w-100 h-100"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#dc3545",
            },
            links: {
              color: "#dc3545",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />

      <div className="position-relative h-100">
        <div className="position-absolute w-100 h-100 bg-gradient" />
        
        <div className="position-relative h-100">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center 
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transition: 'all 0.5s ease',
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <div className="container text-center px-4">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Floating Elements with cursor movement */}
                    {slide.floatingItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="position-absolute d-none d-lg-flex align-items-center bg-dark bg-opacity-75 rounded-pill p-2 text-white animate__animated animate__fadeIn"
                        style={{
                          top: `${20 + (idx * 25)}%`,
                          left: idx % 2 === 0 ? '5%' : '75%',
                          animationDelay: `${idx * 0.2}s`,
                          transform: `translate(${mousePosition.x * (idx % 2 === 0 ? 1 : -1)}px, ${mousePosition.y * (idx % 2 === 0 ? 1 : -1)}px)`,
                          transition: 'transform 0.3s ease-out'
                        }}
                      >
                        {item.icon}
                        <span className="ms-2">{item.label}</span>
                      </div>
                    ))}

                    <div className="animate__animated animate__fadeInDown">
                      <h1 className="display-4 fw-bold text-white mb-4">
                        {slide.title}
                      </h1>
                      <h2 className="h3 text-danger mb-4">
                        {slide.subtitle}
                      </h2>
                      <p className="lead text-white-50 mb-4">
                        {slide.description}
                      </p>
                      <button className="btn btn-danger btn-lg rounded-pill px-4 py-3">
                        {slide.cta}
                        <ArrowRight className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="btn btn-dark position-absolute start-0 top-50 translate-middle-y ms-4 rounded-circle p-3 opacity-75"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="btn btn-dark position-absolute end-0 top-50 translate-middle-y me-4 rounded-circle p-3 opacity-75"
        >
          <ChevronRight size={24} />
        </button>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-pill border-0 ${
                currentSlide === index ? 'bg-danger' : 'bg-white opacity-50'
              }`}
              style={{
                width: currentSlide === index ? '2rem' : '0.75rem',
                height: '0.75rem',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;