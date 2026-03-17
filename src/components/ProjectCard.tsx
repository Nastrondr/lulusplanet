import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  description,
  image,
  link
}) => {
  return (
    <Link to={link} className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-type">{type}</p>
        <p className="project-description">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;