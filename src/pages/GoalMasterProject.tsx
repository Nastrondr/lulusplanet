import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../App.css';
import goalmasterA1 from '../assets/image/goalmaster-a-1.png';
import goalmasterA2 from '../assets/image/goalmaster-a-2.png';
import goalmasterB1 from '../assets/image/goalmaster-b-1.png';
import goalmasterC1 from '../assets/image/goalmaster-c-1.png';
import goalmasterC2 from '../assets/image/goalmaster-c-2.png';
import goalmasterC3 from '../assets/image/goalmaster-c-3.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';

const GoalMasterProject = () => {
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
          <h1>{t.projectPages.goalMaster.hero.title}</h1>
          <h2>{t.projectPages.goalMaster.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.goalMaster.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.goalMaster.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.goalMaster.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.goalMaster.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <img src={goalmasterA1} alt="GoalMaster Project" className="project-image" />
            <img src={goalmasterA2} alt="GoalMaster Project" className="project-image" />
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.goalMaster.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.goalMaster.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-container">
            <img src={goalmasterB1} alt="GoalMaster Project" className="wide-project-image" />
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.goalMaster.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.goalMaster.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <img src={goalmasterC1} alt="GoalMaster Project" className="project-image" />
            <img src={goalmasterC2} alt="GoalMaster Project" className="project-image" />
            <img src={goalmasterC3} alt="GoalMaster Project" className="project-image" />
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.goalMaster.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.goalMaster.sections.outcome.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <div className="project-document">
          <a href="/src/assets/PDF/goalmaster-pdf.pdf" target="_blank" rel="noopener noreferrer" className="document-link">
            {t.projectDetail.document}
            <span className="document-icon">{t.projectDetail.documentIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoalMasterProject;