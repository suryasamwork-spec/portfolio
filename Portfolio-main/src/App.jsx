import React, { useState } from 'react';
import {
  Cpu,
  Brain,
  Eye,
  Code,
  Layout,
  Database,
  Github,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
  ExternalLink,
  Download,
  Send,
  Smartphone,
  Server,
  Layers,
  GitGraph,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [numPages, setNumPages] = useState(null);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const experienceRef = React.useRef(null);

  const scrollExperience = (direction) => {
    if (experienceRef.current) {
      const { scrollLeft, clientWidth } = experienceRef.current;
      const scrollAmount = clientWidth * 0.8;
      experienceRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Resize handler for PDF responsiveness
  React.useEffect(() => {
    if (containerRef) {
      const resizeObserver = new ResizeObserver((entries) => {
        setContainerWidth(entries[0].contentRect.width);
      });
      resizeObserver.observe(containerRef);
      return () => resizeObserver.disconnect();
    }
  }, [containerRef]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const experience = [
    {
      role: 'Software Developer',
      company: 'Caldim Engineering Private Limited',
      period: '2025 - Present',
      location: 'Hosur, Tamil Nadu',
      desc: 'Working on developing and deploying enterprise-grade software solutions',
      icon: <Cpu size={20} />
    },
    {
      role: 'Data Analyst Trainee',
      company: 'QSpider Private Limited',
      period: '2025 - 2025',
      location: 'Bangalore, Karnataka',
      desc: 'Learned and worked on various data analysis tools and techniques',
      icon: <Brain size={20} />
    },
    {
      role: 'Software Developer Intern',
      company: 'Mr. Cooper',
      period: '2024 - 2024',
      location: 'Chennai, Tamil Nadu',
      desc: 'Working on developing and deploying enterprise-grade software solutions',
      icon: <Brain size={20} />
    }
  ];

  const education = [
    {
      id: 'UG',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Jayalakshmi Institute of Technology',
      period: '2021 - 2025',
      specialization: 'Computer Science & Engineering',
      location: 'Dharmapuri, Tamil Nadu',
      icon: <Code size={20} />
    },
    {
      id: '12th',
      degree: 'Higher Secondary Schooling (HSC)',
      institution: 'Amala Higher Secondary School',
      period: '2019 - 2021',
      location: 'Dharmapuri, Tamil Nadu',
      specialization: 'Maths,Physics,Chemistry',
      icon: <Layers size={20} />
    },
    {
      id: '10th',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Amala Higher Secondary School',
      period: '2018 - 2019',
      location: 'Dharmapuri, Tamil Nadu',
      specialization: 'General Education',
      icon: <Database size={20} />
    }
  ];

  const [activeEdu, setActiveEdu] = useState(0);

  const skills = [
    { title: 'Machine Learning', icon: <Cpu size={24} />, desc: 'Predictive modeling & analytics' },
    { title: 'Python', icon: <Code size={24} />, desc: 'Backend & Data Science' },
    { title: 'Web Development', icon: <Layout size={24} />, desc: 'Modern React applications' },
    { title: 'HTML,CSS & BOOTSTRAP', icon: <Database size={24} />, desc: 'Responsive Web Design' },
    { title: 'Excel', icon: <Eye size={24} />, desc: 'Data Analysis & Visualization' },
    { title: 'Data Analysis', icon: <Database size={24} />, desc: 'Insightful data visualization' },
    { title: 'Power BI', icon: <Database size={24} />, desc: 'Data Visualization & Dashboarding' },
    { title: 'MySQL & Oracle', icon: <Database size={24} />, desc: 'Database Management & Querying' },
  ];

  const tools = [
    { name: 'Python', icon: <Code /> },
    { name: 'Scikit-Learn', icon: <Cpu /> },
    { name: 'Git', icon: <Github /> },
    { name: 'PowerBI', icon: <GitGraph /> },
    { name: 'React', icon: <Smartphone /> },
    { name: 'Excel', icon: <Database /> },
    { name: 'MySQL & Oracle', icon: <Database /> },
    { name: 'Numpy', icon: <Cpu /> },
  ];

  const initialCerts = [
    {
      id: 1,
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      date: '2023',
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Data Analytics Professional',
      issuer: 'Google',
      date: '2023',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'Meta',
      date: '2024',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop',
    }
  ];

  const [certList, setCertList] = useState(initialCerts);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: 'Movie Recommendation System',
      desc: 'Developed a movie recommendation system using Python and machine learning algorithms. ',
      img: 'https://res.cloudinary.com/dcyedb0sm/image/upload/v1770728784/netblix_jp6ry2.png',
      link: '#'
    },
    {
      title: 'Power BI Health Dashboard',
      desc: 'Created a comprehensive health dashboard using Power BI to visualize and analyze health data.',
      img: 'https://res.cloudinary.com/dcyedb0sm/image/upload/v1770786437/health_dashboard_sjzmkf.png',
      link: '#'
    },
    {
      title: 'Cook Booking Application',
      desc: 'Developed a cook booking application using ReactJS, Python and MySQL.',
      img: 'https://res.cloudinary.com/dcyedb0sm/image/upload/v1770786242/kitchen_maestros_x47nxu.png',
      link: '#'
    },
    {
      title: 'Edge Compute Hub',
      desc: 'Distributed computing system for low-latency AI.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    }
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [resumeProgress, setResumeProgress] = useState(0);
  const resumeSectionRef = React.useRef(null);

  // Scroll handler for Resume Reveal
  React.useEffect(() => {
    const handleScroll = () => {
      if (!resumeSectionRef.current) return;
      const rect = resumeSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled through
      // We start calculating once the top of the section enters the middle of the viewport
      // and finish when the bottom of the section leaves the top.
      const start = rect.top;
      const end = rect.bottom;
      const triggerPoint = windowHeight / 2;

      if (start < triggerPoint && end > 0) {
        const totalHeight = rect.height;
        const scrolled = triggerPoint - start;
        const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
        setResumeProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Certifications Queue Rotation
  const rotateToLast = (index) => {
    setCertList((prev) => {
      const newList = [...prev];
      const [clickedCard] = newList.splice(index, 1);
      newList.push(clickedCard);
      return newList;
    });
  };

  // Autoplay for Certifications
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      rotateToLast(0); // Move first to last
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    // Open default mail client
    window.location.href = `mailto:gogul062004@gmail.com?subject=${subject}&body=${body}`;

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav glass">
        <div className="container nav-container">
          <div className="nav-logo gradient-text">GM.</div>
          <div className="nav-links">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="nav-link">{link.name}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content text-center">
          <div className="hero-img-container glass">
            <img
              src="https://res.cloudinary.com/dcyedb0sm/image/upload/v1770729464/blazer_z00l9t.jpg"
              alt="Portrait"
              className="hero-img"
            />
          </div>
          <h1 className="hero-name gradient-text">Gokul M</h1>
          <p className="hero-about">
            Passionate AI Engineer dedicated to building intelligent solutions that bridge the gap between complex data and human intuition. Specializing in Deep Learning and Computer Vision for real-world impact.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card glass glass-hover">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h2 className="section-title">Tools & Tech</h2>
          <div className="tools-wrapper">
            <div className="tools-flex">
              {[...tools, ...tools].map((tool, i) => (
                <div key={i} className="tool-card glass glass-hover flex center" style={{ gap: '0.8rem' }}>
                  <span className="tool-icon" style={{ color: 'var(--accent-secondary)' }}>{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-slider-wrapper">
          <button className="slider-btn left" onClick={() => scrollExperience('left')}>
            <ChevronLeft size={24} />
          </button>
          <div className="experience-slider" ref={experienceRef}>
            {experience.map((exp, i) => (
              <div key={i} className="experience-card glass glass-hover">
                <div className="timeline-icon">{exp.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-period">{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <h4>{exp.location}</h4>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-btn right" onClick={() => scrollExperience('right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Education Section - Watch Scroll Style */}
      <section id="education" className="education-section container">
        <h2 className="section-title">Education</h2>
        <div className="watch-scroll-container">
          {/* Left: The Scroll Wheel */}
          <div className="edu-wheel">
            <div className="wheel-curve"></div>
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className={`wheel-item ${activeEdu === i ? 'active' : ''}`}
                onClick={() => setActiveEdu(i)}
                style={{
                  transform: `translateX(${Math.abs(activeEdu - i) * 15}px) scale(${1 - Math.abs(activeEdu - i) * 0.1})`,
                  opacity: 1 - Math.abs(activeEdu - i) * 0.3
                }}
              >
                {edu.id}
              </div>
            ))}
          </div>

          {/* Right: The Content Card */}
          <div className="edu-detail-box glass">
            <div className="edu-detail-content">
              <div className="edu-detail-header">
                <div className="edu-icon-circle glass">
                  {education[activeEdu].icon}
                </div>
                <div>
                  <span className="edu-period-tag">{education[activeEdu].period}</span>
                  <h3>{education[activeEdu].degree}</h3>
                </div>
              </div>
              <div className="edu-detail-body">
                <h4>{education[activeEdu].institution}</h4>
                <p><strong>Field:</strong> {education[activeEdu].specialization}</p>
                <p><strong>Location:</strong> {education[activeEdu].location}</p>
              </div>
            </div>
            {/* Background Glow */}
            <div className="edu-glow"></div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Stacked Layout */}
      <section
        id="certifications"
        className="certifications-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container">
          <h2 className="section-title certification-title">Certifications</h2>
          <div className="certs-stack-container">
            {certList.map((cert, i) => (
              <div
                key={cert.id}
                className="cert-stack-card"
                onClick={() => rotateToLast(i)}
                style={{
                  zIndex: certList.length - i,
                  transform: `translateX(calc(${i} * var(--stack-offset, 60px))) scale(${1 - i * 0.09})`,
                  opacity: 1,
                  cursor: i === 0 ? 'default' : 'pointer'
                }}
              >
                <div className="cert-stack-inner glass">
                  <div className="cert-img-box">
                    <img src={cert.img} alt={cert.title} />
                    <div className="cert-overlay-logo">
                      <div className="logo-placeholder">
                        <span className="issuer-initial">{cert.issuer[0]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="cert-stack-content">
                    <span className="cert-badge">{cert.date}</span>
                    <h3>{cert.title}</h3>
                    <p className="issuer-name">{cert.issuer}</p>
                    <div className="cert-footer">
                      <span className="verify-text">View Certificate</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-showcase-section container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="showcase-grid glass">
          {/* Left Side: Sticky Image Showcase */}
          <div className="showcase-left">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`showcase-img-layer ${activeProject >= i ? 'revealed' : ''}`}
                style={{ zIndex: i }}
              >
                <img src={project.img} alt={project.title} />
                <div className="img-overlay"></div>
              </div>
            ))}
          </div>

          {/* Right Side: Scrollable Details */}
          <div className="showcase-right" id="projects-scroll-root">
            {projects.map((project, i) => (
              <ProjectScrollItem
                key={i}
                project={project}
                index={i}
                setActive={setActiveProject}
                rootId="projects-scroll-root"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section with Sticky Reveal */}
      <section id="resume" className="resume-scroll-container" ref={resumeSectionRef}>
        <div className="resume-sticky-wrapper">
          <div className="container">
            <h2 className="section-title">Resume</h2>
            <div className="resume-reveal-box glass">
              <div className="resume-content-mask">
                <div
                  className="resume-pdf-mover"
                  style={{ transform: `translateY(calc(-${resumeProgress * 40}%))` }}
                >
                  <div className="resume-pdf-container" ref={setContainerRef}>
                    <Document
                      file="/Gokul_Resume.pdf"
                      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                      loading={<div className="loader">Loading Resume...</div>}
                      error={<div className="error-msg">Please ensure resume.pdf is in the public folder.</div>}
                    >
                      <Page
                        pageNumber={1}
                        width={containerWidth ? containerWidth - 40 : 300}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  </div>
                </div>
              </div>

              <div className="resume-overlay-fade"></div>

              <div className="resume-footer-actions">
                <a href="/Gokul_Resume.pdf" download="Gokul_Resume.pdf" className="btn btn-primary">
                  <Download size={18} /> Download Full CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container glass">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gokul-m-5171b5274/" target="_blank" rel="noopener noreferrer" className="social-card glass glass-hover">
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
          <a href="mailto:gogul062004@gmail.com" className="social-card glass glass-hover">
            <Mail size={20} /> <span>Email</span>
          </a>
          <a href="https://wa.me/919344721150" target="_blank" rel="noopener noreferrer" className="social-card glass glass-hover">
            <MessageCircle size={20} /> <span>WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/gokul__2k4" target="_blank" rel="noopener noreferrer" className="social-card glass glass-hover">
            <Instagram size={20} /> <span>Instagram</span>
          </a>
          <a href="https://github.com/Gokul6204" target="_blank" rel="noopener noreferrer" className="social-card glass glass-hover">
            <Github size={20} /> <span>GitHub</span>
          </a>
        </div>
        <p className="copyright">© 2026 Gokul M. All rights reserved.</p>
      </footer>

      <style jsx="true">{`
        .portfolio {
          padding-top: 100px;
          overflow-x: hidden;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-radius: 0;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .nav-container {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 1.5rem;
          font-family: 'Poppins', sans-serif;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 1rem;
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }

        /* Hero */
        .hero-img-container {
          width: 180px;
          height: 180px;
          margin: 0 auto 1.5rem;
          padding: 8px;
          border-radius: 50%;
          overflow: hidden;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .hero-name {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .hero-about {
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .skill-card {
          padding: 2rem;
          text-align: left;
        }
        .skill-icon {
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }
        .skill-card h3 {
          margin-bottom: 0.5rem;
        }
        .skill-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Tools */
        .tools-wrapper {
          overflow: hidden;
          width: 100%;
          padding: 20px 0;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .tools-flex {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .tools-wrapper:hover .tools-flex {
          animation-play-state: paused;
        }
        .tool-card {
          padding: 0.8rem 1.8rem;
          font-size: 1rem;
          font-weight: 500;
          min-width: 160px;
          flex-shrink: 0;
        }
        .tool-icon {
          display: flex;
          align-items: center;
        }
        .tool-icon svg {
          width: 20px;
          height: 20px;
        }

        /* Experience & Education */
        .experience-slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .experience-slider {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 2rem 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        .experience-slider::-webkit-scrollbar {
          display: none;
        }
        .experience-card {
          flex: 0 0 calc(80% - 1.5rem); /* Shows roughly 1.25 cards */
          scroll-snap-align: start;
          padding: 2.5rem;
          text-align: left;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .slider-btn {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
          flex-shrink: 0;
        }
        .slider-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .experience-card {
            flex: 0 0 85%; /* Slightly more visible on mobile */
          }
          .slider-btn {
            display: none; /* Swipe on mobile */
          }
        }
        .timeline-icon {
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .timeline-period {
          font-size: 0.85rem;
          color: var(--accent-secondary);
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }
        .timeline-content h3 { font-size: 1.4rem; margin-bottom: 0.2rem; }
        .timeline-content h4 { color: var(--text-secondary); font-size: 1rem; margin-bottom: 1rem; font-weight: 400; }
        .timeline-content p { color: var(--text-secondary); font-size: 0.95rem; }

        .education-grid {
          max-width: 800px;
          margin: 0 auto;
        }
        .edu-card {
          padding: 2.5rem;
          display: flex;
          gap: 2rem;
          text-align: left;
        }
        .edu-icon {
          color: var(--accent-secondary);
          background: rgba(59, 130, 246, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .edu-period {
          font-size: 0.85rem;
          color: var(--accent-primary);
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }
        .edu-content h3 { font-size: 1.4rem; margin-bottom: 0.2rem; }
        /* Education - Watch Scroll */
        .watch-scroll-container {
          display: flex;
          align-items: center;
          gap: 5rem;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding: 3rem 0;
        }
        .edu-wheel {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
          padding-left: 2rem;
          z-index: 2;
        }
        .wheel-curve {
          position: absolute;
          left: 0;
          top: -20%;
          height: 140%;
          width: 60px;
          border-left: 2px dashed rgba(99, 102, 241, 0.3);
          border-radius: 50%;
          pointer-events: none;
        }
        .wheel-item {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          padding: 0.5rem 1rem;
          position: relative;
        }
        .wheel-item.active {
          color: var(--accent-primary);
          font-size: 2.5rem;
          filter: drop-shadow(0 0 10px var(--accent-primary));
        }
        .wheel-item.active::before {
          content: '';
          position: absolute;
          left: -30px;
          top: 50%;
          width: 20px;
          height: 2px;
          background: var(--accent-primary);
        }

        .edu-detail-box {
          flex: 1;
          padding: 3rem;
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          border-radius: 30px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }
        .edu-detail-content {
          z-index: 2;
          width: 100%;
          text-align: left;
        }
        .edu-detail-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .edu-icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .edu-period-tag {
          font-size: 0.9rem;
          color: var(--accent-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .edu-detail-header h3 {
          font-size: 1.8rem;
          margin-top: 0.5rem;
        }
        .edu-detail-body h4 {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .edu-detail-body p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        .edu-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .watch-scroll-container { flex-direction: column; gap: 3rem; }
          .edu-wheel { flex-direction: row; padding-left: 0; padding-bottom: 2rem; border-left: none; }
          .wheel-curve { display: none; }
          .wheel-item.active::before { display: none; }
          .edu-detail-box { padding: 2rem; width: 100%; }
        }
        /* Certifications Section - Stacked Layout */
        .certifications-section {
          padding: 100px 0;
          background: radial-gradient(circle at center, #1a1a1c 0%, #030303 100%);
          position: relative;
          overflow: hidden;
        }
        .certification-title {
          color: white;
          font-weight: 800;
          margin-bottom: 5rem;
          text-align: center;
        }
        .certs-stack-container {
          --stack-offset: 60px;
          position: relative;
          height: 450px;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 2rem;
        }
        .cert-stack-card {
          position: absolute;
          width: 550px;
          height: 380px;
          transition: all 0.6s cubic-bezier(0.8, 0, 0.2, 1);
          transform-origin: right center;
        }
        .cert-stack-inner {
            width: 100%;
            height: 100%;
            background: #000000 !important;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.1);
        }
        .cert-img-box {
            height: 60%;
            width: 100%;
            position: relative;
            overflow: hidden;
        }
        .cert-img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.7;
            transition: 0.5s ease;
        }
        .cert-stack-card:hover .cert-img-box img {
            opacity: 1;
            transform: scale(1.05);
        }
        .cert-overlay-logo {
            position: absolute;
            bottom: -25px;
            left: 30px;
            z-index: 5;
        }
        .logo-placeholder {
            width: 50px;
            height: 50px;
            background: var(--accent-primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid #000;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .issuer-initial {
            font-weight: 800;
            font-size: 1.2rem;
            color: white;
        }
        .cert-stack-content {
            padding: 2rem 2.5rem;
            flex: 1;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cert-badge {
            font-size: 0.8rem;
            background: rgba(99, 102, 241, 0.1);
            color: var(--accent-primary);
            padding: 4px 12px;
            border-radius: 50px;
            font-weight: 600;
            width: fit-content;
            margin-bottom: 0.8rem;
        }
        .cert-stack-content h3 {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 0.4rem;
        }
        .issuer-name {
            color: #888;
            font-size: 1rem;
        }
        .cert-footer {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent-primary);
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 1rem;
            opacity: 0.7;
            transition: 0.3s;
        }
        .cert-stack-card:hover .cert-footer {
            opacity: 1;
        }

        @media (max-width: 768px) {
            .certs-stack-container {
                --stack-offset: 40px;
                height: 350px;
                padding-left: 0;
                justify-content: center;
            }
            .cert-stack-card {
                width: 280px;
                height: 320px;
            }
            .cert-stack-content {
                padding: 1.5rem;
            }
            .cert-stack-content h3 {
                font-size: 1.1rem;
            }
        }
        @media (max-width: 480px) {
            .certs-stack-container {
                --stack-offset: 25px;
                height: 300px;
            }
            .cert-stack-card {
                width: 240px;
                height: 280px;
            }
            .cert-stack-content {
                padding: 1rem;
            }
            .cert-stack-content h3 {
                font-size: 1rem;
            }
            .issuer-name {
                font-size: 0.8rem;
            }
        }

        .projects-showcase-section {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          height: 60vh;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.01);
        }
        .showcase-left {
          position: relative;
          height: 100%;
          overflow: hidden;
          background: #000;
        }
        .showcase-img-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: inset(100% 0 0 0); /* Start hidden at bottom */
          transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        /* Ensure first project is visible by default */
        .showcase-img-layer:first-child {
          clip-path: inset(0 0 0 0);
        }
        .showcase-img-layer.revealed {
          clip-path: inset(0 0 0 0); /* Unreveal from bottom up */
        }
        .showcase-img-layer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
          transition: transform 2s ease;
        }
        .showcase-img-layer.revealed img {
          transform: scale(1);
        }
        .img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%);
        }

        .showcase-right {
          height: 100%;
          overflow-y: auto;
          padding: 0 3rem;
          scroll-snap-type: y mandatory;
          scrollbar-width: thin;
          scrollbar-color: var(--accent-primary) transparent;
        }
        .showcase-right::-webkit-scrollbar {
          display: block;
          width: 5px;
        }
        .showcase-right::-webkit-scrollbar-track {
          background: transparent;
        }
        .showcase-right::-webkit-scrollbar-thumb {
          background: var(--accent-secondary);
          border-radius: 10px;
        }
        .showcase-item-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          scroll-snap-align: start;
        }
        .showcase-item-content h3 {
          font-size: 2rem;
          margin-bottom: 1.2rem;
          background: linear-gradient(135deg, #fff, #888);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .showcase-item-content p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .showcase-grid { 
            display: grid;
            grid-template-columns: 1fr; 
            grid-template-rows: minmax(300px, 45%) 1fr; /* Split into 2 rows, 1 column */
            height: 90vh; 
            max-height: 1000px;
            overflow: hidden;
          }
          .showcase-left { 
            height: 100%; 
            width: 100%;
            border-bottom: 1px solid var(--glass-border);
          }
          .showcase-right { 
            height: 100%; 
            overflow-y: auto; 
            padding: 0 1.5rem; 
            scrollbar-width: thin;
            scrollbar-color: var(--accent-primary) transparent;
          }
          .showcase-right::-webkit-scrollbar {
            display: block;
            width: 3px;
          }
          .showcase-right::-webkit-scrollbar-thumb {
            background: var(--accent-primary);
            border-radius: 10px;
          }
          .showcase-item-content { 
            min-height: 100.1%; 
            padding: 4rem 0.5rem; 
            scroll-snap-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .showcase-item-content h3 { font-size: 1.6rem; margin-bottom: 1rem; }
          .showcase-item-content p { font-size: 0.95rem; margin-bottom: 1.5rem; }
        }

        /* Resume */

        /* Resume Sticky Reveal */
        .resume-scroll-container {
          height: 100vh; /* Lengthen the scroll path */
          position: relative;
          margin: 5rem 0;
        }
        .resume-sticky-wrapper {
          position: sticky;
          top: 15vh;
          height: 85vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .resume-reveal-box {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
        }
        .resume-content-mask {
          height: 60vh; /* Shows roughly half */
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to bottom, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent);
        }
        .resume-pdf-mover {
          width: 100%;
          transition: transform 0.1s ease-out; /* Smooth follow */
          display: flex;
          justify-content: center;
        }
        .resume-pdf-container {
          width: 100%;
          background: #fff; /* Paper background for contrast */
          display: flex;
          justify-content: center;
          padding: 2rem 0;
        }
        .resume-overlay-fade {
          position: absolute;
          bottom: 80px;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to top, var(--bg-primary), transparent);
          pointer-events: none;
          z-index: 5;
        }
        .resume-footer-actions {
          padding: 2rem;
          background: var(--bg-accent);
          display: flex;
          justify-content: center;
          z-index: 10;
          position: relative;
        }
        .loader, .error-msg {
          padding: 4rem;
          color: var(--text-secondary);
          text-align: center;
        }
        .react-pdf__Page__canvas {
          margin: 0 auto;
          border-radius: 4px;
        }
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
        }
        .btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }

        /* Contact */
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 1rem;
          color: white;
          font-family: inherit;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        .btn-submit {
          background: white;
          color: black;
          justify-content: center;
          margin-top: 1rem;
        }

        /* Footer */
        .footer {
          padding: 4rem 2rem;
          border-top: 1px solid var(--glass-border);
          margin-top: 4rem;
          text-align: center;
        }
        .social-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          color: var(--text-primary);
        }
        .social-card:hover {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
        }
        .copyright {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        /* Media Queries for all devices */
        
        /* Extra Large Monitors (4K+) */
        @media (min-width: 2000px) {
          .container { max-width: 1600px; }
          .hero-about { max-width: 900px; }
        }

        /* Large Monitors & Laptops */
        @media (max-width: 1440px) {
          .container { max-width: 1200px; }
        }

        /* Medium Monitors / Tablets in Landscape */
        @media (max-width: 1024px) {
          .container { max-width: 960px; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Tablets & Large Mobile */
        @media (max-width: 768px) {
          .portfolio { padding-top: 80px; }
          section { padding: 60px 0; }
          .nav-container { height: 70px; }
          .nav-links { gap: 1rem; }
          .hero-about { margin-bottom: 2rem; }
          .edu-card { flex-direction: column; gap: 1rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
          .resume-viewer { padding: 1.5rem; }
          .resume-mock { padding: 1.5rem; }
          .resume-content { grid-template-columns: 1fr; }
          .contact-container { padding: 1.5rem; }
          .footer { padding: 3rem 1rem; }
          .social-links { gap: 1rem; }
          .social-card { padding: 0.6rem 1rem; font-size: 0.8rem; }
        }

        /* Medium Mobile */
        @media (max-width: 480px) {
          .container { padding: 0 1rem; }
          .nav-container { flex-direction: column; height: auto; padding: 1rem 0; gap: 0.5rem; }
          .nav-links { gap: 1rem; }
          .hero-img-container { width: 150px; height: 150px; }
          .nav-logo { font-size: 1.2rem; }
          .tool-card { min-width: 120px; padding: 0.6rem 1rem; font-size: 0.9rem; }
          .btn { width: 100%; justify-content: center; }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .hero-name { font-size: 1.8rem; }
          .hero-about { font-size: 0.9rem; }
          .section-title { font-size: 1.6rem; }
          .social-card span { display: none; } /* Show only icons on tiny screens */
          .social-card { padding: 0.8rem; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

// Project Scroll Item Component
const ProjectScrollItem = ({ project, index, setActive, rootId }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const root = document.getElementById(rootId);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(index);
        }
      },
      {
        root: root,
        threshold: 0.3, // Lower threshold for better mobile triggering
        rootMargin: "0px"
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, setActive, rootId]);

  return (
    <div className="showcase-item-content" ref={ref}>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <a href={project.link} className="view-project-link">
        Explore Project <ExternalLink size={20} />
      </a>
    </div>
  );
};


