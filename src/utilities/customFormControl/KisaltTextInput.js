import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'
// productadd te işlemi kısaltmak için kullanıyoruz//...props gelen değerler obje olarak gelecek
export default function KisaltTextInput({...props}) {
  
    const [field,meta] = useField(props)//name kısmında bilgileri yakalıyor
    
    return (
    
     <FormField error={meta.touched && !!meta.error}>
     <input {...field} {...props} />
     {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
     ):null}
  </FormField>
    
  )
}
