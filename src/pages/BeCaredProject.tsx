import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';
import '../App.css';
import becaredA1 from '../assets/image/becared-a-1.png';
import becaredA2 from '../assets/image/becared-a-2.png';
import becaredB1 from '../assets/image/becared-b-1.png';
import becaredC1 from '../assets/image/becared-c-1.png';
import becaredC2 from '../assets/image/becared-c-2.png';
import becaredC3 from '../assets/image/becared-c-3.png';

const BeCaredProject = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    // Section visibility check
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all project-section elements
    const sections = document.querySelectorAll('.project-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="project-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/#about')}>
          ← {t.projectDetail.back}
        </button>
        
        {/* 1. Hero Section */}
        <section className="project-hero">
          <h1>{t.projectPages.beCared.hero.title}</h1>
          <h2>{t.projectPages.beCared.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.beCared.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.beCared.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.beCared.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.beCared.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <img src={becaredA1} alt="BeCared Project" className="project-image parallax-img" />
            <img src={becaredA2} alt="BeCared Project" className="project-image parallax-img" />
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.beCared.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.beCared.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-container">
            <img src={becaredB1} alt="BeCared Project" className="wide-project-image parallax-img" />
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.beCared.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.beCared.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <img src={becaredC1} alt="BeCared Project" className="project-image parallax-img" />
            <img src={becaredC2} alt="BeCared Project" className="project-image parallax-img" />
            <img src={becaredC3} alt="BeCared Project" className="project-image parallax-img" />
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.beCared.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.beCared.sections.outcome.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <div className="project-document">
          <a href="/src/assets/PDF/becared-pdf.pdf" target="_blank" rel="noopener noreferrer" className="document-link">
            {t.projectDetail.document}
            <span className="document-icon">{t.projectDetail.documentIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeCaredProject;