import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const nav1Props = ['Model S','Model 3','Model X','Model Y','Solar Panels']
const nav2Props = ['Shop','Account','Menu']

function Navbutton() {

    const [state, setstate] = useState(false)

    const message = (prop)=>{
        console.log(prop)
    }
    return (
        <div className="flex-1 flex ">
            <ul className="hidden xl:flex-1 xl:flex justify-center items-center xl:pl-32 ">
            {
            nav1Props.map((element,index)=>{
                return (<li 
                    key={index} 
                    className='cursor-pointer px-5 font-semibold transition duration-500 ease-in-out hover:bg-gray-400 py-1 hover:border rounded-md' 
                    onClick={()=>{message(element)}}>
                    {element}
                </li>);
            })
            }
            </ul>
            <ul className="flex-1 xl:flex-none flex items-center pr-5 justify-end">
            {
            nav2Props.map((element,index)=>{
                return (<li 
                    key={index} 
                    className='cursor-pointer px-5 font-semibold transition duration-500 ease-in-out hover:bg-gray-400 py-1 hover:border rounded-md' 
                    onClick={()=>{message(element)}}>
                    {element}
                </li>);
            })
            }
            <CustomMenu onClick={()=>setstate(true)} />
            </ul>

            <BurgerMenu toggle={state}>
            <div style={{backdropFilter:'blur(5px)'}} className="flex-1"></div>

            <div style={{flexBasis:'250px'}} className="flex flex-col bg-white">
                <div className="flex justify-end px-3 py-3">
                    <CustomClose onClick={()=>setstate(false)}/>
                </div>
                <div className="h-screen flex flex-col items-start  pt-5 font-semibold" >
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>Test Drive</li>
                <li>Cyber Truck</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Support</li>
                <li>Find Us</li>
                </div>
            </div>
            </BurgerMenu>


        </div>
    )
}

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const BurgerMenu = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
left:0;
width: 100%;
height: 100vh;
display: flex;
transform: ${props=> props.toggle ? `translateX(0)`: `translateX(100%)`};
li{
    list-style:none;
    width:100%;
    padding-top: 2rem;
    padding-left:1.5rem;
    cursor:pointer;
}
`

export default Navbutton
