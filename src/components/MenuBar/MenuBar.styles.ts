import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240

export const useStylesMenu = makeStyles((theme: Theme) => {
  console.log(theme)
  return createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    links: {
      textDecoration: 'none',
    },
    menuHeader: {
      paddingLeft: '30px'
    }
  })
}
);