import React,{useState} from 'react'
import {Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignetIn from './SignetIn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//suan true signin durumunda
export default function Navi() {
const {cartItems} = useSelector(state => state.cart)
const [isAuthenticated, setIsAuthenticated] = useState(false)
const navigate = useNavigate()
function handleSignOut(){
    setIsAuthenticated(false)
    navigate("/")
}
function handleSignIn(){
    setIsAuthenticated(true)
}
    return (
        <div><Menu inverted fixed="top">
            <Container>
            <Menu.Item
                name='home'
            
            />
            <Menu.Item
                name='messages'
                
            />

            <Menu.Menu position='right'>
              
            {cartItems.length>0&&<CartSummary/>/*cart summuryyi lenghti 0 dan buyukse render et demek*/}
            
            {isAuthenticated?<SignetIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                
                
            </Menu.Menu>
            </Container>
            
        </Menu></div>
    )
}
