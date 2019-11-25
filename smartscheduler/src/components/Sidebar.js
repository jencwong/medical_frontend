import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
  return (
    <div className="sidebar">
        <img className="userImg" src="https://vignette.wikia.nocookie.net/harrypotter/images/1/15/MOLLY1.jpg/revision/latest/scale-to-width-down/350?cb=20150828155116"></img>
        <p className="menu-label">
          Welcome Molly Weasley
        </p>
        <br></br>
        <List disablePadding dense>
        <ListItem button>
            <ListItemText>Dasbboard</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>User Profile</ListItemText>
        </ListItem>
        </List>
    </div>
  )
}

export default Sidebar