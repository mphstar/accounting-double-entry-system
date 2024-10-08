import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import Order from '@/features/super-admin/Order/Order'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Order"}))
      }, [])
      
    return(
        <Order />
    )
}

export default InternalPage