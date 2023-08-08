import axios from 'axios'
import {
    useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { BASE_URL } from '../utils/api'

// Get all Categories
export function useGetCategories(){
  return useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
          const {data} = await axios.get(`${BASE_URL}/category/getAll`)
          return data
      }

  })
}
