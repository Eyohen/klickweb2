import React from 'react'
import { useGetCategories } from '../../api/Categories_api'
import Tags from './Tags'

const TodayDealTags = ({setSelectCat , selectCat}) => {

    const {data , isLoading , isError} = useGetCategories()
  return (
    <div className="flex flex-nowrap items-center space-x-5 mb-8 overflow-x-scroll scrollbar-hide">
        <Tags tag={"All"} onClick={()=>{setSelectCat((prevState) =>null)}} active={(null === selectCat)} />
        
        {
            data?.data?.map((item)=>{
                return <Tags tag={item?.name} onClick={()=>{setSelectCat((prevState) => item)}
                } active={(item?.name === selectCat?.name)} />
            })
        }
    </div>
  )
}

export default TodayDealTags