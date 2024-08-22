import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import PlanRequest from '../../../../features/super-admin/plan-request/PlanRequest'
import Coupon from '../../../../features/super-admin/coupon/Coupon'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Coupon"}))
      }, [])
      
    return(
        <Coupon />
    )
}

export default InternalPage