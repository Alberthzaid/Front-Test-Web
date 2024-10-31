import React from 'react'
import { TableStock } from './TableStock.jsx'

import { API_GET_PRODUCTS } from '../../../Helpers/ApiConfig/Controllers/Apis'

export const TableStockContainer = () => {

  return (
    <div className='Content-TableStock'>
        <TableStock api ={API_GET_PRODUCTS}/>
    </div>
  )
}
