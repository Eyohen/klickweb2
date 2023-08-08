import axios from 'axios'
import {
    useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'


import { BASE_URL ,  convertObjectToStringWithArrays } from '../utils/api'

import queryString from 'query-string';

const token = localStorage.getItem('access_token');

// Get all Products wihoutQuery
export function useGetOrdersWithoutQuery(){
    return useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/order/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            return data
        }

    })
}


// Get all Products with Query
export function useGetOrders(query){
    let _query = {...query}
    console.log(query)
    const arrayParams = convertObjectToStringWithArrays(_query)
    const queryparams = query ? queryString.stringify(_query): ""
    const finalqueryparams = arrayParams !== "" && arrayParams ? queryparams + "?" + arrayParams : queryparams
    return useQuery({
        queryKey: ["order", query],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/order/?${finalqueryparams}`)
            return data
        }

    })
}

// Get a single product

export function useGetSingleOrder(id){
    return useQuery({
        queryKey: ["order",id],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/order/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            return data
        }

    })
}




//  Create A Product

export function useCreateOrder(){
    return useMutation({
        mutationFn: (newProduct) => {
            return axios.post(
                `${BASE_URL}'product/?storeId=f0b4d892-c911-49fa-a161-55d48e494ee7&category=039c6ea9-45d7-493f-beb1-fd74fb40399d`,
                newProduct
                )
        }
    })
}