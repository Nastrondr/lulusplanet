import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/i18n';
import '../App.css';

const BeyondDesign = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];
  
  // Refs for sections
  const sectionsRef = useRef<HTMLCollectionOf<HTMLElement> | null>(null);

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

    // Observe all beyond-section elements
    const sections = document.querySelectorAll('.beyond-section');
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
    <div className="beyond-design-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← {t.beyondDesign.back}
        </button>
        
        {/* Hero Section */}
        <section className="beyond-hero">
          <h1>{t.beyondDesign.hero.title}</h1>
          <h2>{t.beyondDesign.hero.subtitle}</h2>
          <p className="intro-text">
            {t.beyondDesign.hero.description}
          </p>
        </section>
        
        {/* Intro Section */}
        <section className="beyond-intro">
          <p>
            {t.beyondDesign.intro}
          </p>
        </section>
        
        {/* Music Section */}
        <section className="beyond-section">
          <h3>{t.beyondDesign.sections.music.title}</h3>
          {t.beyondDesign.sections.music.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="image-grid">
            <img src="/src/assets/image/beyonddesign-2.png" alt="Music" className="project-image parallax-img" />
          </div>
        </section>
        
        {/* Writing and Speaking Section */}
        <section className="beyond-section">
          <h3>{t.beyondDesign.sections.writing.title}</h3>
          {t.beyondDesign.sections.writing.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="image-grid">
            <img src="/src/assets/image/beyonddesign-4.png" alt="Writing and Speaking" className="project-image parallax-img" />
          </div>
        </section>
        
        {/* Games and Experimental Creation Section */}
        <section className="beyond-section">
          <h3>{t.beyondDesign.sections.games.title}</h3>
          {t.beyondDesign.sections.games.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="single-image-container">
            <img src="/src/assets/image/beyonddesign-5.png" alt="Games and Experimental Creation" className="project-image parallax-img" />
            <a href="https://shamitahmed.itch.io/monstercleaninginc" target="_blank" rel="noopener noreferrer" className="project-link">
              Cleaning Monster CMTK 2024
            </a>
          </div>
        </section>
        
        {/* Cross-Cultural Experience Section */}
        <section className="beyond-section">
          <h3>{t.beyondDesign.sections.crossCultural.title}</h3>
          {t.beyondDesign.sections.crossCultural.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="image-grid">
            <img src="/src/assets/image/beyonddesign.png" alt="Cross-Cultural Experience" className="project-image parallax-img" />
          </div>
        </section>
        

        
        {/* Closing Section */}
        <section className="beyond-closing">
          <p>
            {t.beyondDesign.closing}
          </p>
        </section>
      </div>
    </div>
  );
};

export default BeyondDesign;