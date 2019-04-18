import React, { Component } from 'react'
import { DialogTitle, DialogContent, DialogActions, TextField, Button, Dialog } from '@material-ui/core/'
import { Consumer } from '../../context'
import axios from 'axios'

class CategoryCreate extends Component {
  constructor(){
    super();

    this.state ={
      name: ''
    }
    this.createNewCategory = this.createNewCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name : event.target.value});
  };

  createNewCategory(){
    axios.post('/api/categories', {
      name: this.state.name
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
          const { openCreateNewCategoryDialog, handleCreateNewCategoryDialog } = value;
          return (
            <React.Fragment>
              <Dialog
                open={openCreateNewCategoryDialog}
                onClose={() => handleCreateNewCategoryDialog()}
              >
                <DialogTitle>
                  Create New Category
                </DialogTitle>
                <DialogContent>
                  <TextField
                    label="Category Name"
                    placeholder="ex. Cooking"
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button color="primary" autoFocus onClick={this.createNewCategory}> 
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

export default CategoryCreate;
