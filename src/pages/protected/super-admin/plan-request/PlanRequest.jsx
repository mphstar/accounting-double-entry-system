import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import PlanRequest from '../../../../features/super-admin/plan-request/PlanRequest'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Feature Request"}))
      }, [])
      
    return(
        <PlanRequest />
    )
}

export default InternalPage