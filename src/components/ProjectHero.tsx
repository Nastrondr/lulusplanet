import { useNavigate } from 'react-router-dom';

interface ProjectHeroProps {
  title: string;
  type: string;
  year: string;
  role: string;
  image: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  type,
  year,
  role,
  image
}) => {
  const navigate = useNavigate();

  return (
    <section className="project-hero">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/#projects')}>
          ← 返回项目列表
        </button>
        
        <div className="project-hero-content">
          <div className="project-hero-info">
            <h1>{title}</h1>
            <p className="project-hero-type">{type}</p>
            <p className="project-hero-year">{year}</p>
            <p className="project-hero-role">Role: {role}</p>
          </div>
          
          <div className="project-hero-image">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;