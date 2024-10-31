import React from 'react'
import { TableBrand } from './TableBrands'
import { API_GET_BRAND } from '../../../Helpers/ApiConfig/Controllers/Apis'

export const TableBrandsContainer = () => {
    const api = API_GET_BRAND
  return (
    <div className='Content-TableBrand'>
        <TableBrand api={api}/>
    </div>
  )
}
