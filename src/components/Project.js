import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function Project({ projectImage, projectName, projectBlurb, projectLink, gitHubLink }) {
  return (
    <Card className="project">
      <CardActionArea>
        <img className="projectpic" src={projectImage} alt={projectName} />
        <CardContent>
          <h1 className="title">{projectName}</h1>
          <p className="projecttext">{projectBlurb}</p>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button href={projectLink} size="small" color="primary">Visit</Button>
        <Button href={gitHubLink} size="small" color="primary">GitHub</Button>
      </CardActions>
    </Card>
  );
}
export default Project;
