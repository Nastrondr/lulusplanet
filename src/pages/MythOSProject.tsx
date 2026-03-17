import { useNavigate } from 'react-router-dom';
import '../App.css';
import mythosA1 from '../assets/image/mythos-a-1.png';
import mythosA2 from '../assets/image/mythos-a-2.png';
import mythosB1 from '../assets/image/mythos-b-1.png';
import mythosC1 from '../assets/image/mythos-c-1.png';
import mythosC2 from '../assets/image/mythos-c-2.png';
import mythosC3 from '../assets/image/mythos-c-3.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';

const MythOSProject = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="project-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/#about')}>
          {t.projectDetail.back}
        </button>
        
        {/* 1. Hero Section */}
        <section className="project-hero">
          <h1>{t.projectPages.mythos.hero.title}</h1>
          <h2>{t.projectPages.mythos.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.mythos.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.mythos.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.mythos.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.mythos.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <img src={mythosA1} alt="MythOS Project" className="project-image" />
            <img src={mythosA2} alt="MythOS Project" className="project-image" />
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.mythos.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.mythos.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-container">
            <img src={mythosB1} alt="MythOS Project" className="wide-project-image" />
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.mythos.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.mythos.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <img src={mythosC1} alt="MythOS Project" className="project-image" />
            <img src={mythosC2} alt="MythOS Project" className="project-image" />
            <img src={mythosC3} alt="MythOS Project" className="project-image" />
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.mythos.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.mythos.sections.outcome.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <div className="project-document">
          <a href="/src/assets/PDF/mythos-pdf.pdf" target="_blank" rel="noopener noreferrer" className="document-link">
            {t.projectDetail.document}
            <span className="document-icon">{t.projectDetail.documentIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MythOSProject;