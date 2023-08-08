import axios from 'axios'
import {
    useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

const token = localStorage.getItem('access_token');

// Get all Products wihoutQuery
export function useLoggedInUser(id){
    return useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            const {data} = await axios.get(`${BASE_URL}/auth/user/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            return data
        }

    })
}
