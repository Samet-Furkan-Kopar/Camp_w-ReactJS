import React from 'react'
import {Menu, Image, Dropdown} from 'semantic-ui-react'
import { Link } from "react-router-dom";
//cıkıs yapa tıklanıldgı anda handlesignout devreye girer
export default function SignetIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://img-s1.onedio.com/id-541020a45dda1ba021ca09e6/rev-0/w-620/f-jpg/s-48763637f91b34513c5e670585de969a61063b3d.jpg"></Image>
            <Dropdown pointing="top left" text='Samet'>
                <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut}  text="Cikis Yap" icon="sign-out"><Link style={{color:"black"}} to={"/user/login"}>Çıkış yap</Link></Dropdown.Item>

                
                </Dropdown.Menu>
            </Dropdown>
        
        </Menu.Item>
    </div>
  )
}
