import React, { Component } from 'react'
import { Consumer } from '../../context'
import { AppBar, Drawer, Toolbar, Typography, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { Menu, ChevronLeft } from '@material-ui/icons'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { all_categories} = value;
          return (
            <div>
              <AppBar>
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen.bind(this)}>
                    <Menu />
                  </IconButton>
                  <Typography variant="h6" color="inherit" >
                    Phrazer
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer variant="persistent" anchor="left" open={this.state.open}>
                <IconButton onClick={this.handleDrawerClose.bind(this)}>
                  <ChevronLeft />
                </IconButton>
                {all_categories === undefined || all_categories.length === 0 ?
                  <List>
                    <ListItem button key={0}>
                      <ListItemText primary="No Categories Found" />
                    </ListItem>
                  </List>
                  :
                  <List>
                    {all_categories.map(item => (
                      <ListItem button key={item._id}>
                        <ListItemText primary={item.name} />
                      </ListItem>
                    ))}
                  </List>}
              </Drawer>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Navbar;
