import { Formik, Form } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import ProductService from '../services/ProductService'
import KisaltTextInput from '../utilities/customFormControl/KisaltTextInput'
import { toast} from 'react-toastify'


export default function ProductAdd() {
    let addService = new ProductService();
    const initialValues = { productName: "", unitPrice: "" }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Birim fiyat zorunlu")
    })//validation için
    
    return (
        <div >

            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={ (values) => {
                     addService.addProduct(values).then((result)=>{
                        toast.success(result.data.message)
                    }).catch((error)=>{
                        console.log(error)
                    })
                }}   >

                <Form className='ui form'>
                    <KisaltTextInput name="productName" placeholder='Ürün Adı' />
                    <KisaltTextInput name="unitPrice" placeholder='Ürün Fiyatı' />
                    <Button color='green' type='submit'>Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
