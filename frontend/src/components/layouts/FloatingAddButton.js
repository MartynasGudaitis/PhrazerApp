import React, { Component } from 'react'
import { Fab, Chip }from '@material-ui/core'
import { Add } from '@material-ui/icons'
import CategoryCreate from './CategoryCreate'
import PhraseCreate from './PhraseCreate'
import { Consumer } from '../../context'

class FloatingAddButton extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { handleAddButtonOptions, 
                  openFloatingAddButtonOptions,
                  handleCreateNewCategoryDialog,
                  handleCreateNewPhraseDialog } = value;
          return (
            <div>
              <CategoryCreate />
              <PhraseCreate />
              <div style={openFloatingAddButtonOptions ? {} : { display: 'none' }}>
                <Chip onClick={() => handleCreateNewCategoryDialog()} label="Category" style={{ right: 30, bottom: 130, position: 'fixed' }} />
                <br />
                <Chip onClick={() => handleCreateNewPhraseDialog()} label="Phrase" style={{ right: 50, bottom: 85, position: 'fixed' }} />
                <br />
              </div>
              <Fab onClick={() => handleAddButtonOptions()} color="primary" aria-label="Add" style={{ right: 20, bottom: 20, position: 'fixed' }}>
                <Add />
              </Fab>
            </div>
          )
        }}
      </Consumer>
    )
  }
}


export default FloatingAddButton;
