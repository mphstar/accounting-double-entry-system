import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../../features/common/headerSlice'
import ConstantCategory from '../../../../../features/super-admin/constant/category/ConstantCategory'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])
      
    return(
        <ConstantCategory />
    )
}

export default InternalPage