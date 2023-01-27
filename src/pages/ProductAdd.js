import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { FormField, Button, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import KisaltTextInput from '../utilities/customFormControl/KisaltTextInput'


export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("birim fiyat zorunlu")
    })//validation için
    return (
        <div >
            
            <Formik initialValues={initialValues} 
                 validationSchema={schema} 
                onSubmit = {(values)=> {
                    console.log(values)
                }}   >

                <Form className='ui form'>
                <KisaltTextInput name="productName" placeholder='Ürün Adı'/>
                <KisaltTextInput name="unitPrice" placeholder='Ürün Fiyatı'/>   
                    <Button color='green' type='submit'>Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
