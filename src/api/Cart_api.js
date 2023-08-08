import axios from 'axios'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'


import { BASE_URL ,  convertObjectToStringWithArrays } from '../utils/api'




// cart

export function useGetCart(id){
    return useQuery({
        queryKey: ["cart",id],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/cart/${id}`)
            return data
        }

    })
}




//  Update cart

export function useUpdateCart(){

    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({id, ...items}) => {
            return axios.put(`${BASE_URL}/cart/update/${id}`,items)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        },
    })
}