import { LinearProgress, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecepieDetail } from '../config/api'
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';  

export function parseWithLinks(text) {
    const options = {
      replace: ({ name, attribs, children }) => {
        if (name === 'a' && attribs.href) {
          return <Link to={attribs.href}>{domToReact(children)}</Link>;
        }
      }
    };
        
    return parse(text, options);
  }

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
const useStyles = makeStyles ( (theme) => ({
      container:{
        display:"flex",
        [theme.breakpoints.down("md")]:{
          flexDirection : "column",
   
        } 
      },
      sidebar :{
        display:"flex",
        width:"95%",
        flexDirection :"column",
        alignItems:"center",
        margin:25,
        borderBottom:"2px solid grey",
        [theme.breakpoints.down("md")]:{
            width:"100%"
     
          } 
      },
      heading : { 
        fontFamily:"Montserrat",
        fontWeight:"bold",
        textAlign:"center"
      },
      desc :{
        width:"100%",
        fontFamily : "Montserrat",
        padding:20,
        alignItems:"center",
        textAlign:"justify"
      },
}) )

const Details = () => {

  const {title} =  useParams()
  const [loading,setLoading] = useState([])
  const [recepie,setRecepie] = useState()
  
  //const {currency,symbol} = CryptoState()
  console.log("title",title)
  const fetchRecepieDetail = async () => {
    setLoading(true)
    const {data} = await axios.get(RecepieDetail(title))
    setRecepie(data[0])
    setLoading(false)
    console.log(data[0])
  }

  useEffect ( ()=> {fetchRecepieDetail() } , [title])

  const classes = useStyles()
  
  if(!recepie) return <LinearProgress color='secondary' />

  return (
    <div className={classes.container}>
      <div className= {classes.sidebar}>
        
        <Typography style={{margin : 20, marginTop:20}}
          variant="h4"
          className = {classes.heading}>
          {recepie?.title}
        </Typography>

        <img
          src={recepie?.photo}
          alt={recepie?.title}
          height = "500"
          style={{
            padding:30,
          }}
        />

        <Typography className={classes.desc}>
            {parseWithLinks(recepie?.description)}       
        </Typography> 
        

        <Typography style={{margin : 20, marginTop:20, marginBottom:40}}
        variant="h4"
        className = {classes.heading}>
        Calories -&nbsp;&nbsp;{recepie?.calories}
        </Typography>
  
      </div>
    </div>
  )
}

export default Details
