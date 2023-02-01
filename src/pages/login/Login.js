import React from 'react'
import { useDispatch } from "react-redux";
import UserService from "../../services/UserService";
import * as Yup from "yup";
import { Formik, Form } from 'formik'
import { Link } from "react-router-dom";
import { Button,Message } from "semantic-ui-react";
import { userLogin } from "../../store/actions/authAction";
import KisaltTextInput from '../../utilities/customFormControl/KisaltTextInput'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify'

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleLogin = (user) => {
        dispatch(userLogin(user));
    };
    const userService = new UserService()
    const initialValues = { email: "", password: "" }
    const schema = Yup.object().shape({

        email: Yup.string()
            .required("Email alanı zorunludur")
            .email("Geçerli bir email değil"),
        password: Yup.string()
            .required("Şifre zorunludur")
            .min(6, "Şifre en az 6 karakter uzunlugunda olmalıdır")

    });

    return (
        <div style={{ margin: "auto", marginLeft: "50px" }}>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    userService.login(values).then((result) => {
                        handleLogin(result.data.data)
                        toast.success(result.data.message)
                        navigate("/")
                        
                    }).catch((error) => {
                        console.log(error)
                    })
                }}   >

                <Form className='ui form'>
                    <KisaltTextInput name="email" placeholder='E-mail' />
                    <KisaltTextInput name="password" type="password" placeholder='Şifre' />
                    <Button color='green' type='submit'>Giriş yap</Button>
                </Form>
                
            </Formik>
            <Message info color="black">
      You're not registered? - 
        <b>
          <Link to={"/user/register"} > Register Now</Link>
        </b>
      </Message>
        </div>
    )
}
