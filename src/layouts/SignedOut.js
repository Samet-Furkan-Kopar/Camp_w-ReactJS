import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu} from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
        <Menu.Item>
        <Button onClick={signIn} primary><Link style={{color:"white"}} to={"/user/login"}>Giriş Yap</Link></Button>
        <Button primary style={{marginLeft:"0.5em" }} > <Link style={{color:"white"}} to={"/user/register"}>Kayıt ol</Link> </Button>
        </Menu.Item>
        
    </div>
  )
}
