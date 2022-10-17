import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {RecepieList} from '../../src/config/api'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'


const useSyles = makeStyles ( () =>  ({
    title:{
        height: "50%",
        display:"flex",
        alignItems:"center"
    },
    carouselItem:{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        textTransform:"uppercase",
        cursor:"pointer",
        color:"white"
    }
    ,image:{
      flexDirection: "column",
  },
}) )

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const Carousel = () => {

  const [recepieList,setRecepieList] = useState([]) 
  const classes = useSyles() 
  

  const fetchRecepieList = async () => {
    const {data} = await axios.get(RecepieList())
    setRecepieList(data)
    console.log(data)
  }

  useEffect(() => {
    fetchRecepieList()
    },[])

  
  const items = recepieList.map((data) => {

    return (
            <Link 
            className={classes.carouselItem} 
            to={`/recipe/${data.title}`}
            >
            <img className={classes.image}
                src = {data?.photo}
                alt = {data.name}
                height = "400"
                style = {{margin : 10 ,flexDirection:"column"}}
            />
            <span style = {{ fontFamily:"Montserrat", fontSize:15 , marginTop:20}}>
                {data?.title}  
                &nbsp;&nbsp;
            </span>
           
        </Link>
    )
    } )

  const responsive = {
    0:{
        items:1,
    },
    512: {
        items:2
    }
  }  

  return (
    <div className={classes.Carousel} style={{flexDirection:"column", width :"100%"}}>
      <AliceCarousel  
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={700}
      disableButtonsControls
      disableDotsControls
      responsive = {responsive}
      autoPlay
      items={items}
      
      >
        
      </AliceCarousel>
    </div>
  )
}

export default Carousel
