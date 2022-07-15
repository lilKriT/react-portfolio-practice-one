import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbox">
        <img src={imgURL} />
        <div className="proj-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
