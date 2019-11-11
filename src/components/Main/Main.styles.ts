import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const drawerWidth = 240;

export const useStylesMain = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}))