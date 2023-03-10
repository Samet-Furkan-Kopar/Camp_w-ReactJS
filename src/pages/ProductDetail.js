import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/ProductService'
import { Button, Card, Image } from 'semantic-ui-react'
export default function ProductDetail() {
  let { name } = useParams()

  const [product, setProduct] = useState({})//hook
  //component yuklendiğinde yapılmasını istefiğimiz kodu bunun içine yazıyoruz
  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data))
  }, [])

  return (
    <div>

      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Sepete Ekle
              </Button>
              <Button basic color='red'>
                Favorilere Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
