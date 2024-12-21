import React, { useState } from 'react';
import { ExternalLink, Code, Users, Award, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'enterprise', label: 'Enterprise Solutions' },
    { id: 'ai', label: 'AI & ML Projects' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Global Financial Dashboard',
      category: 'enterprise',
      image: 'https://img.freepik.com/free-photo/laptop-tablet-phone-along-with-graphics_1232-1070.jpg?t=st=1734759712~exp=1734763312~hmac=d5d3e2969ed1bc34207c21cb1d1f02dec87b34cdfc62347dda830faf17ed3411&w=740',
      client: 'FinTech Corp',
      type: 'Enterprise Solution',
      description: 'Real-time financial analytics dashboard processing millions of transactions daily.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      stats: { users: '1M+', transactions: '50M+', uptime: '99.99%' },
      awards: ['Best FinTech Solution 2023']
    },
    {
      id: 2,
      title: 'Healthcare Management Platform',
      category: 'web',
      image: 'https://img.freepik.com/free-photo/diagnose-doctor-medicine-health-wellness-concept_53876-125432.jpg?t=st=1734759765~exp=1734763365~hmac=89deb5700fff5c8d243e0a43bcc1d71645c28a62e81c7a5d6553780b3b82e46e&w=740',
      client: 'MedTech Solutions',
      type: 'Web Application',
      description: 'Comprehensive healthcare management system with AI-powered diagnostics.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'GCP'],
      stats: { hospitals: '500+', patients: '2M+', accuracy: '99.5%' },
      awards: ['Healthcare Innovation Award']
    },
    {
      id: 3,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      image: 'https://img.freepik.com/free-photo/marketing-creative-collage-with-phone_23-2149379900.jpg?t=st=1734759803~exp=1734763403~hmac=fe5faf6bff8b456c5f29ed31e6eed1dcb795e83f954ad85f43fb27ed3916f421&w=740',
      client: 'RetailMax',
      type: 'Mobile Application',
      description: 'Feature-rich e-commerce app with AR product visualization.',
      technologies: ['React Native', 'Firebase', 'ARKit', 'Node.js'],
      stats: { downloads: '5M+', orders: '10M+', rating: '4.8' },
      awards: ['Best Shopping App 2023']
    },
    {
      id: 4,
      title: 'AI-Powered Customer Service',
      category: 'ai',
      image: 'https://img.freepik.com/free-photo/smartphone-artificial-intelligence-futuristic-communication-network-technology_53876-129774.jpg?t=st=1734759857~exp=1734763457~hmac=804e5a19c1546454b2198af3f7f000c8d3ce328081493abbc86d8e88dcb26557&w=740',
      client: 'ServicePro Inc',
      type: 'AI Solution',
      description: 'Intelligent customer service automation with natural language processing.',
      technologies: ['Python', 'TensorFlow', 'GPT-3', 'AWS'],
      stats: { accuracy: '96%', responses: '1M+', languages: '20+' },
      awards: ['AI Excellence Award']
    },
    {
      id: 5,
      title: 'Supply Chain Management',
      category: 'enterprise',
      image: 'https://img.freepik.com/free-photo/still-life-supply-chain-representation_23-2149827291.jpg?t=st=1734759890~exp=1734763490~hmac=bf1bf727659db481f83896e74e197871ffd75ccffba4dc67c8a2c851d695d830&w=740',
      client: 'LogiTech Corp',
      type: 'Enterprise Platform',
      description: 'Blockchain-based supply chain tracking and management system.',
      technologies: ['Hyperledger', 'React', 'Node.js', 'MongoDB'],
      stats: { transactions: '100M+', partners: '1000+', coverage: 'Global' },
      awards: ['Supply Chain Innovation']
    },
    {
      id: 6,
      title: 'Smart City Management',
      category: 'ai',
      image: 'https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?t=st=1734759932~exp=1734763532~hmac=dfa615aa6cec84e4cf84902f3f9aaf3d137222288e7201ed2eeae3b50aafced7&w=740',
      client: 'MetroTech',
      type: 'IoT Solution',
      description: 'IoT-based smart city management system with AI analytics.',
      technologies: ['Python', 'TensorFlow', 'IoT', 'Azure'],
      stats: { sensors: '50K+', cities: '10+', efficiency: '40%↑' },
      awards: ['Smart City Award 2023']
    }
  ];

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <span className="badge bg-danger px-3 py-2 rounded-pill mb-3 animate__animated animate__fadeIn">
              Our Portfolio
            </span>
            <h2 className="display-5 fw-bold mb-3 animate__animated animate__fadeIn">
              Showcasing Excellence in Digital Innovation
            </h2>
            <p className="lead text-muted animate__animated animate__fadeIn">
              Explore our portfolio of successful projects delivered across various industries
              with cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`btn ${
                    activeFilter === category.id 
                      ? 'btn-danger' 
                      : 'btn-outline-danger'
                  } rounded-pill px-4 py-2 animate__animated animate__fadeIn`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-4 col-md-6 animate__animated animate__fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="card border-0 shadow-sm rounded-4 overflow-hidden h-100"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  transform: hoveredProject === project.id ? 'translateY(-10px)' : 'none',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {/* Project Image */}
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-img-top"
                    style={{ height: '240px', objectFit: 'cover' }}
                  />
                  <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center 
                    bg-dark bg-opacity-75 text-white transition-opacity ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="text-center p-3">
                      <h5 className="mb-2">{project.type}</h5>
                      <p className="mb-3">{project.client}</p>
                      <button className="btn btn-outline-light rounded-pill">
                        View Details
                        <ArrowRight className="ms-2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="card-body p-4">
                  <h4 className="card-title mb-3">{project.title}</h4>
                  <p className="text-muted mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="badge bg-light text-dark px-3 py-2 rounded-pill"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="row g-3 mb-4">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="col-auto">
                        <div className="d-flex align-items-center">
                          <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-2">
                            <Code size={16} className="text-danger" />
                          </div>
                          <div>
                            <small className="text-muted d-block">{key}</small>
                            <strong>{value}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Awards */}
                  {project.awards.length > 0 && (
                    <div className="d-flex align-items-center mt-auto">
                      <Award size={20} className="text-warning me-2" />
                      <small className="text-muted">{project.awards[0]}</small>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-lg-7 text-center">
            <h4 className="mb-4">Ready to Build Something Amazing?</h4>
            <button className="btn btn-danger btn-lg rounded-pill px-5 py-3 animate__animated animate__fadeIn">
              Start Your Project
              <ExternalLink className="ms-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-opacity {
          transition: opacity 0.3s ease-in-out;
        }
        
        .card {
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }

        .animate__animated {
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;