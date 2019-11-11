import { makeStyles } from '@material-ui/core/styles'
import { Theme, createStyles } from "@material-ui/core";



const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    hide: {
      display: 'none',
    },
  })
)