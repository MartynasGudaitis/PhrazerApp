import React, { Component } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { Favorite, FavoriteBorder, Delete } from '@material-ui/icons'
import axios from 'axios'

class PhraseCard extends Component {

  deletePhrase(id){
    axios.delete(`api/phrases/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.phrase.translation}
          </Typography>
          <Typography component="p">
            {this.props.phrase.phrase}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            {this.props.phrase.favorite ? <Favorite /> : <FavoriteBorder />}
          </Button>
          <Button>
            <Delete onClick={this.deletePhrase(this.props.phrase._id)}/>
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default PhraseCard;