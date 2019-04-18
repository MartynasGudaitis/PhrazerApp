import React, { Component } from 'react'
import { DialogTitle, DialogContent, DialogActions, TextField, Button, FormControl, Select, OutlinedInput, InputLabel, Dialog } from '@material-ui/core/'
import { Consumer } from '../../context'
import axios from 'axios'

class PhraseCreate extends Component {
  constructor() {
    super();

    this.state = {
      phrase: '',
      translation: '',
      category_id: ''
    }
    this.createNewPhrase = this.createNewPhrase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  createNewPhrase() {
    axios.post('/api/phrases', {
      phrase: this.state.phrase,
      translation: this.state.translation,
      category_id: this.state.category_id
    })
      .then(function (response) {
        console.log(response);
      })
      .then(window.location.reload())
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { openCreateNewPhraseDialog, handleCreateNewPhraseDialog, all_categories } = value;

          return (
            <React.Fragment>
              <Dialog
                open={openCreateNewPhraseDialog}
                onClose={() => handleCreateNewPhraseDialog()}
              >
                <DialogTitle>
                  Create New Phrase
                </DialogTitle>
                <DialogContent>
                  <TextField
                    label="Phrase"
                    name="phrase"
                    placeholder="ex. Guten Tag. Mein Name ist Andreas Zilinski"
                    margin="normal"
                    variant="outlined"
                    value={this.state.phrase}
                    onChange={this.handleChange}
                    style={{ width: 300 }}
                  />
                  <br />
                  <TextField
                    label="Translation"
                    name="translation"
                    placeholder="ex. Good afternoon. My name is Adreas Zilinski"
                    margin="normal"
                    variant="outlined"
                    value={this.state.translation}
                    onChange={this.handleChange}
                    style={{ width: 300, paddingBottom: 18}}
                  />
                  <br />
                  <FormControl variant="outlined">
                    <InputLabel style={{background: '#fff', paddingBottom: 4, paddingLeft: 4, paddingRight: 4}}>
                      Category
                    </InputLabel>
                    <Select
                      
                      native
                      value={this.state.category_id}
                      onChange={this.handleChange}
                      style={{ width: 300}}
                      input={
                        <OutlinedInput
                          name="category_id"
                          labelWidth={0}
                        />
                      }
                    >
                      {all_categories === undefined ?
                        <option value="">None</option>
                        :
                        all_categories.map(item => (
                          <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                      }
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button color="primary" autoFocus onClick={this.createNewPhrase}>
                    Create
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default PhraseCreate;
