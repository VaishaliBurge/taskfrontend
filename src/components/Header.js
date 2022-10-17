import { AppBar, Container, Toolbar, Typography, makeStyles, createTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const useSyles = makeStyles ( () =>  ({
    title:{
        flex: 1,
        color: "greenyellow",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer"
    }
}) )


const Header = () => {

    const navigate = useNavigate()
    const classes = useSyles()

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#fff"
            },
          type: 'dark',
        },
      });
    
    return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline>
        <AppBar color='black' position='static' >
            <Container>
                <Toolbar>
                    <Typography 
                            onClick = {() => navigate("/") } 
                            className={classes.title }>
                           Marley Spoon
                    </Typography>               
                </Toolbar>
            </Container>
        </AppBar>
        </CssBaseline>
        </ThemeProvider>
    </div>
  )
}

export default Header
