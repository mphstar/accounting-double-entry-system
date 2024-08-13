import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import LedgerSummary from '../../../../features/super-admin/double-entry/ledger-summary'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])
      
    return(
        <LedgerSummary />
    )
}

export default InternalPage