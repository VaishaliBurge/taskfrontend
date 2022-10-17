import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles ( () => ({
    
    banner1:{
        backgroundImage: "url(./banner.jpg)"
    },
    bannerContent: {
        height:200,
        display:"flex",
        flexDirection : "column",
        paddingTop:25,
        justifyContent: "space-around",

    },
    tagline:{
        height:"40%",
        display:"flex",
        flexDirection : "column",
        textAlign:"center",
        justifyContent: "center",

    }
}) 
)

const Banner = () => {

  const classes = useStyles()

  return (
    <div  className={classes.banner}>
      <Container className= {classes.bannerContent}>
     
        <div className= {classes.tagline }>
            <Typography 
            variant= "h2"
            style={{
                fontWeight:"bold",
                fontFamily:"Montserrat",
                marginBottom:15,
                color:"white"
            }}>
            Marley Spoon
            </Typography>

            <Typography 
            variant= "subtitle2"
            style={{
                fontWeight:"darkgrey",
                fontFamily:"Montserrat",
                textTransform:"capitalize",
                marginBottom:15, 
                fontSize:15,
                color:"white"
            }}>
           Get all the available recepie list at a single glance.
            </Typography>
            
        </div>

      </Container>
    
    </div>
  )
}

export default Banner
