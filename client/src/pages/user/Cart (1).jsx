import React from 'react'
import { useFetch } from '../../hooks/useFetch'

function Cart() {

    const [cartData, error] = useFetch('/cart/get-cart')

  return (
    <div>Cart</div>
  )
}

export default Cart