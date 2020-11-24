import { createMuiTheme } from '@material-ui/core/styles'

const themePalete = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white"
      }
    },
    MuiFab: {
      primary: {
        color: "white"
      }
    },
    MuiAppBar: {
      root: {
        zIndex: 1600
      },
      colorDefault: {
        backgroundColor: "black"
      }
    },
    MuiDrawer: {
      paper: {
        top: "50px",
        width: "20vw"
      }
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: "5px"
        }
      }
    }
  },
  palette: {
    primary: { main: "#38BF87" }
  }
})

export default themePalete