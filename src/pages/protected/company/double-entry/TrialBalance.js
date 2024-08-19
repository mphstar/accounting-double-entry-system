import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import TrialBalance from '../../../../features/company/double-entry/trial-balance'


function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])
      
    return(
        <TrialBalance />
    )
}

export default InternalPage