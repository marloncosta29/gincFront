import React, { useState, Children } from 'react'
import { useStylesMenu } from './MenuBar.styles'
import { Divider, Hidden, Drawer, Theme, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useTheme } from '@material-ui/styles';
import menuItems from './menuItems.json'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

interface Iprops {
  mobileOpen: boolean;
  handleDrawerToggle(): void
}

export default function MenuBar(props: Iprops) {
  const menus: any = {}

  const [state, setStateCustom] = useState(menus);
  const handleClick = (item: any, open: any) => {
    setStateCustom({ ...state, [item]: !open })
    console.log(item, state)
  }
  const classes = useStylesMenu()
  const theme: Theme = useTheme();


  const handler = (children: any) => {
    return children.map((subOption: any) => {

      if (!subOption.children) {
        return <div key={subOption.name}>
          <ListItem
            button
            key={subOption.name}>
            <Link
              to={subOption.url}
              className={classes.links}>
              <ListItemText
                inset
                primary={subOption.name}
              />
            </Link>
          </ListItem>
        </div>
      }
      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.name, state[subOption.name])}>
            <ListItemText
              inset
              primary={subOption.name} />
            {state[subOption.name] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse
            in={state[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      )

    })

  }


  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Divider />
        <List>
          <ListItem
            key="menuHeading"
            divider
            disableGutters
          >
            <ListItemText
              className={classes.menuHeader}
              inset
              primary="Nested Menu"
            />
          </ListItem>
          {handler(menuItems.data)}
        </List>
      </div>
    </div>
  )



  return (<nav className={classes.drawer} aria-label="mailbox folders">
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        {drawer}
      </Drawer>
    </Hidden>
  </nav>)
}