import axios from 'axios'
import {
    useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'


import { BASE_URL ,  convertObjectToStringWithArrays } from '../utils/api'

import queryString from 'query-string';

// Get all Products wihoutQuery
export function useGetProductsWithQuery(){
    return useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/product/`)
            return data
        }

    })
}


// Get all Products with Query
export function useGetProducts(query){
    let _query = {...query}
    console.log(query)
    const arrayParams = convertObjectToStringWithArrays(_query)
    const queryparams = query ? queryString.stringify(_query): ""
    const finalqueryparams = arrayParams !== "" && arrayParams ? queryparams + "?" + arrayParams : queryparams
    return useQuery({
        queryKey: ["product", query],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/product/?${finalqueryparams}`)
            return data
        }

    })
}

// Get a single product

export function useGetSingleProduct(id){
    return useQuery({
        queryKey: ["product",id],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/product/${id}`)
            return data
        }

    })
}




//  Create A Product

export function useCreateProduct(){
    return useMutation({
        mutationFn: (newProduct) => {
            return axios.post(
                `${BASE_URL}'product/?storeId=f0b4d892-c911-49fa-a161-55d48e494ee7&category=039c6ea9-45d7-493f-beb1-fd74fb40399d`,
                newProduct
                )
        }
    })
}