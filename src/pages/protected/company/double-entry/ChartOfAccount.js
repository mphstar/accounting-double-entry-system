import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import ChartOfAccount from '../../../../features/company/double-entry/chart-of-account'


function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])
      
    return(
        <ChartOfAccount />
    )
}

export default InternalPage