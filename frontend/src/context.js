import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_phrases: [],
      all_categories: [],
      heading: 'All Phrases',
      openFloatingAddButtonOptions: false,
      openCreateNewCategoryDialog: false,
      openCreateNewPhraseDialog: false,
      handleAddButtonOptions: () => this.handleAddButtonOptions(),
      handleCreateNewCategoryDialog: () => this.handleCreateNewCategoryDialog(),
      handleCreateNewPhraseDialog: () => this.handleCreateNewPhraseDialog()
    };
  }

  handleAddButtonOptions(){
    if(this.state.openFloatingAddButtonOptions){
      this.setState({ openFloatingAddButtonOptions: false });
    } else {
      this.setState({ openFloatingAddButtonOptions: true });
    }
  }

  handleCreateNewCategoryDialog(){
    if(this.state.openCreateNewCategoryDialog){
      this.setState({ openCreateNewCategoryDialog: false });
    } else {
      this.setState({ openCreateNewCategoryDialog: true });
    }
  }

  handleCreateNewPhraseDialog(){
    if(this.state.openCreateNewPhraseDialog){
      this.setState({ openCreateNewPhraseDialog: false });
    } else {
      this.setState({ openCreateNewPhraseDialog: true });
    }
  }

  componentDidMount(){
    // all_phrases
    axios
      .get('http://localhost:3000/api/phrases')
      .then(res => {
        this.setState({all_phrases: res.data});
      })
      .catch(err => console.log(err));

    // all_categories  
    axios
      .get('http://localhost:3000/api/categories')
      .then(res => {
        this.setState({all_categories: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;