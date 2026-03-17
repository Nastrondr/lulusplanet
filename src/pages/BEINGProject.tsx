import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../App.css';
import beingA1 from '../assets/image/being-a-1.png';
import beingA2 from '../assets/image/being-a-2.png';
import beingB1 from '../assets/image/being-b-1.png';
import beingC1 from '../assets/image/being-c-1.png';
import beingC2 from '../assets/image/being-c-2.png';
import beingC3 from '../assets/image/being-c-3.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';

const BEINGProject = () => {
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
          {t.projectDetail.back}
        </button>
        
        {/* 1. Hero Section */}
        <section className="project-hero">
          <h1>{t.projectPages.being.hero.title}</h1>
          <h2>{t.projectPages.being.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.being.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.being.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.being.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.being.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <img src={beingA1} alt="BEING Project" className="project-image" />
            <img src={beingA2} alt="BEING Project" className="project-image" />
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.being.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.being.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-container">
            <img src={beingB1} alt="BEING Project" className="wide-project-image" />
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.being.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.being.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <img src={beingC1} alt="BEING Project" className="project-image" />
            <img src={beingC2} alt="BEING Project" className="project-image" />
            <img src={beingC3} alt="BEING Project" className="project-image" />
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.being.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.being.sections.outcome.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <div className="project-document">
          <a href="/src/assets/PDF/being-pdf.pdf" target="_blank" rel="noopener noreferrer" className="document-link">
            {t.projectDetail.document}
            <span className="document-icon">{t.projectDetail.documentIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BEINGProject;