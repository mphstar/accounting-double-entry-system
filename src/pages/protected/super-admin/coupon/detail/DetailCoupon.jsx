import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../../features/common/headerSlice'
import DetailCoupon from '../../../../../features/super-admin/coupon/detail/DetailCoupon'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Coupon"}))
      }, [])
      
    return(
        <DetailCoupon />
    )
}

export default InternalPage