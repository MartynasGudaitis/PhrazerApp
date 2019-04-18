import React, { Component } from 'react'
import { Consumer } from '../../context'
import PhraseCard from './PhraseCard'
import { Grid, Typography, CircularProgress } from '@material-ui/core'

class Phrases extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { all_phrases, heading } = value;
          if (all_phrases === undefined || all_phrases.length === 0) {
            return (
              <React.Fragment>
                <CircularProgress />
              </React.Fragment>
            )
          }
          else {
            return (
              <React.Fragment>
                <Typography variant="h6" color="inherit" style={{ paddingLeft: 24, paddingTop: 72 }}>
                  {heading}
                </Typography>
                <Grid container spacing={24} style={{ padding: 24 }}>
                  {all_phrases.map(item => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} key={item._id}>
                      <PhraseCard phrase={item} />
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Phrases;
