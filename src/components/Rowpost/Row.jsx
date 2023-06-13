import React,{useState,useEffect} from 'react'
import './Row.css'
import  Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY,IMG} from '../../constants/constants'
function Row(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlId]= useState('')
    useEffect(()=>{
        axios.get(props.url).then(Response=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
            alert('Network Error')
        })
    },[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


    const handlemovie = (id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        console.log(response.data)
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array Empty')
        }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='poster'>
        {movies.map((obj)=> 

          <img onClick={()=>handlemovie(obj.id)} className={props.isSmall?'smallposter':'posters'} src={`${IMG+obj.backdrop_path}`} alt="" />
             
          
        )}
       
       
      </div>
     {urlid && <Youtube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default Row
