import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


const extraContent = (movieParam,deleteMovie) => {
  return (<div className="ui two buttons">
  <Button animated as={Link} to={`/movie/edit/${movieParam.id}`}>
    <Button.Content visible>Edit</Button.Content>
    <Button.Content hidden>
      <Icon name='edit outline' />
    </Button.Content>
  </Button>
  <Button animated='vertical' onClick={()=>deleteMovie(movieParam.id)}>
    <Button.Content hidden>Delete</Button.Content>
    <Button.Content visible>
      <Icon name='trash alternate outline' />
    </Button.Content>
  </Button>
</div>
);
}

const MovieCard = ({propsMovie,deleteMovie}) => (
  <Card
    image={propsMovie.cover}
    header={propsMovie.title}
    // meta='20..'
    extra={extraContent(propsMovie,deleteMovie)}
  />
)

export default MovieCard