import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';

const ChinaUnicomProject = () => {
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
          <h1>{t.projectPages.chinaUnicom.hero.title}</h1>
          <h2>{t.projectPages.chinaUnicom.hero.subtitle}</h2>
          <p className="project-subtitle">{t.projectPages.chinaUnicom.hero.description}</p>
          <div className="project-meta">
            <span className="meta-item">{t.projectPages.chinaUnicom.meta.type}</span>
          </div>
        </section>
        
        {/* 2. Overview Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.chinaUnicom.sections.overview.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.chinaUnicom.sections.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 3. Image Section A */}
        <section className="project-section">
          <div className="image-grid">
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
        </section>
        
        {/* 4. Background / Problem Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.chinaUnicom.sections.background.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.chinaUnicom.sections.background.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 5. Image Section B */}
        <section className="project-section">
          <div className="wide-image-placeholder">
            <span>Wide Image Placeholder</span>
          </div>
        </section>
        
        {/* 6. Process / Strategy Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.chinaUnicom.sections.process.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.chinaUnicom.sections.process.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* 7. Image Section C */}
        <section className="project-section">
          <div className="image-grid">
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
        </section>
        
        {/* 8. Outcome Section */}
        <section className="project-section">
          <div className="section-header">
            <span className="section-tag">{t.projectPages.chinaUnicom.sections.outcome.tag}</span>
          </div>
          <div className="section-content">
            {t.projectPages.chinaUnicom.sections.outcome.content.map((paragraph, index) => (
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

export default ChinaUnicomProject;