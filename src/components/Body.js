import React,{useEffect, useRef,useState} from 'react'
import Dialogbox from './Dialogbox'
import styled from 'styled-components'

function Body({scroll,cardata,image}) {

    const myref = useRef(0)
    const [height, setheight] = useState(myref.current.offsetHeight)

    useEffect(()=>{
        setheight(myref.current.offsetHeight)
    },[myref.current.offsetHeight])
 
    
    return (
        <div className="h-screen w-screen overflow-hidden z-10" ref={myref} >
            <Dialogbox data={cardata} height={height} scroll ={scroll}/>
            <Container bgImg={image}/>
        </div>
    )
}


const Container = styled.div`
height: 100vh;
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url(${props.bgImg})`}
`;


export default Body
