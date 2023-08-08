import axios from 'axios'
import {
    useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

const token = localStorage.getItem('access_token');

// Get all Products wihoutQuery
export function useStoreDetails(id){
    return useQuery({
        queryKey: ["store", id],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/store/:id/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            return data
        }

    })
}