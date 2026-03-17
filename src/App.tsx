import { Link } from 'react-router-dom';
import './App.css'
import { useLanguage } from './context/LanguageContext';
import { translations } from './content/i18n';
import becaredCover from './assets/image/becared-cover.png';
import beingCover from './assets/image/being-cover.png';
import goalmasterCover from './assets/image/goalmaster-cover.png';
import mythosCover from './assets/image/mythos-cover.png';
import logo from './assets/image/logo.png';
import { useState, useEffect, useRef } from 'react';

function App() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  
  // Refs for sections
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.classList.add('clicked');
    
    setTimeout(() => {
      target.classList.remove('clicked');
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Parallax effect for images
      const parallaxElements = document.querySelectorAll('.parallax-img');
      parallaxElements.forEach((element) => {
        const speed = 0.03;
        const htmlElement = element as HTMLElement;
        const elementRect = htmlElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when element is in viewport
        if (elementRect.top < windowHeight && elementRect.bottom > 0) {
          // Calculate parallax based on element's position in viewport
          const scrollPosition = window.scrollY;
          const elementTop = htmlElement.offsetTop;
          const yPos = -((scrollPosition - elementTop) * speed);
          
          // Limit the parallax range to prevent images from moving too much
          const maxParallax = 20;
          const limitedYPos = Math.max(-maxParallax, Math.min(maxParallax, yPos));
          
          htmlElement.style.transform = `translateY(${limitedYPos}px)`;
        }
      });

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

      // Observe sections
      if (projectsRef.current) observer.observe(projectsRef.current);
      if (aboutRef.current) observer.observe(aboutRef.current);
      if (contactRef.current) observer.observe(contactRef.current);

      return () => {
        if (projectsRef.current) observer.unobserve(projectsRef.current);
        if (aboutRef.current) observer.unobserve(aboutRef.current);
        if (contactRef.current) observer.unobserve(contactRef.current);
      };
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="app">
      {/* 导航栏 */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} alt="Logo" className="logo-icon" />
            Lulusplanet
          </a>
          <div className="nav-links">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e)}
            >{t.nav.home}</a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e)}
            >{t.nav.projects}</a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e)}
            >{t.nav.about}</a>
            <Link 
              to="/beyond-design" 
              onClick={(e) => handleNavClick(e)}
              className="beyond-design-link"
            >{t.nav.beyondDesign}</Link>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e)}
            >{t.nav.contact}</a>
            <button className="language-toggle" onClick={toggleLanguage}>
              <span className={`language-option ${lang === 'zh' ? 'active' : 'inactive'}`}>CN</span>
              <span className="language-separator">/</span>
              <span className={`language-option ${lang === 'en' ? 'active' : 'inactive'}`}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 主页Hero部分 */}
      <section id="home" className="hero parallax-bg">
        <div className="container">
          <div className="hero-content">
            <h1>{t.home.heroTitle}</h1>
            <p>{t.home.heroSubtitle}</p>
            {lang === 'zh' ? (
              <>
                <p>{t.home.heroDescription.split('，')[0]}，</p>
                <p>{t.home.heroDescription.split('，')[1]}。</p>
              </>
            ) : (
              <p lang="en">{t.home.heroDescription}</p>
            )}
            <p className="tagline">{t.hero.tagline}</p>
          </div>
        </div>
      </section>

      {/* 作品展示部分 */}
      <section id="projects" className="projects" ref={projectsRef}>
        <div className="container">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
          <div className="projects-grid">
            <Link to="/projects/be-cared" className="project-item-link">
              <div className="project-card">
                <img src={becaredCover} alt="BeCared Project" className="project-cover parallax-img" />
                <div className="project-card-header">
                  <h3>{t.projects.cards.beCared.title}</h3>
                  <span className="project-type-tag team">{t.projects.tags.team}</span>
                </div>
                <p>{t.projects.cards.beCared.subtitle}</p>
              </div>
            </Link>
            <Link to="/projects/being" className="project-item-link">
              <div className="project-card">
                <img src={beingCover} alt="BEING Project" className="project-cover parallax-img" />
                <div className="project-card-header">
                  <h3>{t.projects.cards.being.title}</h3>
                  <span className="project-type-tag team">{t.projects.tags.team}</span>
                </div>
                <p>{t.projects.cards.being.subtitle}</p>
              </div>
            </Link>
            <Link to="/projects/goal-master" className="project-item-link">
              <div className="project-card">
                <img src={goalmasterCover} alt="GoalMaster Project" className="project-cover parallax-img" />
                <div className="project-card-header">
                  <h3>{t.projects.cards.goalMaster.title}</h3>
                  <span className="project-type-tag team">{t.projects.tags.team}</span>
                </div>
                <p>{t.projects.cards.goalMaster.subtitle}</p>
              </div>
            </Link>
            <Link to="/projects/mythos" className="project-item-link">
              <div className="project-card">
                <img src={mythosCover} alt="MythOS Project" className="project-cover parallax-img" />
                <div className="project-card-header">
                  <h3>{t.projects.cards.mythos.title}</h3>
                  <span className="project-type-tag individual">{t.projects.tags.individual}</span>
                </div>
                <p>{t.projects.cards.mythos.subtitle}</p>
              </div>
            </Link>
          </div>
          <div className="projects-footer">
            <a href="/src/assets/PDF/all.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              直接查看PDF合集（中文版）
            </a>
          </div>
        </div>
      </section>

      {/* 关于我部分 */}
      <section id="about" className="about" ref={aboutRef}>
        <div className="container">
          <h2>{t.about.title}</h2>
          <p>{t.about.description}</p>
          <div className="education">
            <h3>{t.about.education.title}</h3>
            {t.about.education.items.map((item, index) => (
              <div key={index} className="education-item">
                <h4>{item.title}</h4>
                <p>{item.period}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="achievements">
            <h3>{t.about.achievements.title}</h3>
            <h4>{t.about.achievements.subtitle}</h4>
            
            <div className="achievement-section">
              <h5>{lang === 'zh' ? '荣誉与奖项' : 'Recognition & Awards'}</h5>
              
              <h6>{t.about.achievements.academic.title}</h6>
              <ul className="achievement-list">
                {t.about.achievements.academic.items.map((item, index) => (
                  <li key={index}><span className="achievement-icon">•</span> {item}</li>
                ))}
              </ul>
              
              <h6>{t.about.achievements.early.title}</h6>
              <ul className="achievement-list">
                {t.about.achievements.early.items.map((item, index) => (
                  <li key={index}><span className="achievement-icon">•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="project-experience">
            <h3>{t.about.experience.title}</h3>
            {t.about.experience.items.map((item, index) => {
              let projectPath = '';
              switch (item.title) {
                case 'ChorockSoft AI 赛事预测 APP 使用体验优化':
                case 'ChorockSoft AI Sports Prediction APP User Experience Optimization':
                  projectPath = '/projects/chorocksoft';
                  break;
                case '里加国际机场旅客体验优化项目':
                case 'Riga International Airport Passenger Experience Optimization Project':
                  projectPath = '/projects/riga-airport';
                  break;
                case '中国联通机场通信服务创新项目（天府国际机场）':
                case 'China Unicom Airport Communication Service Innovation Project (Tianfu International Airport)':
                  projectPath = '/projects/china-unicom';
                  break;
                case 'AI算力平台产品规划与官网设计':
                case 'AI Computing Platform Product Planning and Official Website Design':
                  projectPath = '/projects/ai-computing';
                  break;
                default:
                  projectPath = '#';
              }
              
              return (
                <Link key={index} to={projectPath} className="project-item-link">
                  <div className="project-item">
                    <div className="project-header">
                      <h4>{item.title}</h4>
                      {item.internship ? (
                        <div className="project-tags">
                          <span className={`tag internship-tag ${item.expired ? 'expired' : ''}`}>
                            {lang === 'zh' ? '实习' : 'Internship'}
                          </span>
                          <span className="arrow-icon">→</span>
                        </div>
                      ) : (
                        <span className="arrow-icon">→</span>
                      )}
                    </div>
                    <p>{item.period}</p>
                    <p>{item.role}</p>
                    {item.description && <p className="project-description">{item.description}</p>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 联系方式部分 */}
      <section id="contact" className="contact" ref={contactRef}>
        <div className="container">
          <h2>{t.contact.title}</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="submit-btn">{t.contact.form.submit}</button>
          </form>
          <div className="social-links">
            <a href="mailto:18576766820@163.com">{t.contact.social.email}</a>
            <a href="https://www.linkedin.com/in/yulu-liu-8ab409296/" target="_blank" rel="noopener noreferrer">{t.contact.social.linkedin}</a>
            <a href="#">{t.contact.social.behance}</a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#home">{t.nav.home}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="legal-links">
            <a href="#">{lang === 'zh' ? '隐私' : 'Privacy'}</a>
            <a href="#">{lang === 'zh' ? '条款' : 'Terms'}</a>
            <a href="#">{lang === 'zh' ? '印记' : 'Imprint'}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App