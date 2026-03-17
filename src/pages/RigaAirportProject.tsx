import { useNavigate } from 'react-router-dom';
import '../App.css';
import rigaA1 from '../assets/image/截屏2026-03-17 01.49.02.png';
import rigaA2 from '../assets/image/riga-a-2.png';
import rigaB1 from '../assets/image/riga-b-1.png';
import rigaC1 from '../assets/image/riga-c-1.png';
import rigaC2 from '../assets/image/riga-c-2.png';
import rigaC3 from '../assets/image/riga-c-3.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';

const RigaAirportProject = () => {
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
          <h1>{t.projectPages.rigaAirport.hero.title}</h1>
          <h2>{t.projectPages.rigaAirport.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.rigaAirport.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.rigaAirport.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.rigaAirport.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.rigaAirport.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <img src={rigaA1} alt="Riga Airport Project" className="project-image" />
            <img src={rigaA2} alt="Riga Airport Project" className="project-image" />
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.rigaAirport.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.rigaAirport.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-container">
            <img src={rigaB1} alt="Riga Airport Project" className="wide-project-image" />
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.rigaAirport.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.rigaAirport.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <img src={rigaC1} alt="Riga Airport Project" className="project-image" />
            <img src={rigaC2} alt="Riga Airport Project" className="project-image" />
            <img src={rigaC3} alt="Riga Airport Project" className="project-image" />
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.rigaAirport.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.rigaAirport.sections.outcome.content.map((paragraph, index) => (
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

export default RigaAirportProject;