import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

//rfc tab yap
export default function Dashboard() {
  return (
    <div>
      
      <Grid>
        <GridRow>
        <GridColumn width={5}><Categories></Categories></GridColumn>
        <GridColumn width={11}><ProductList></ProductList></GridColumn>
        </GridRow>
      </Grid>




    </div>
  )
}
