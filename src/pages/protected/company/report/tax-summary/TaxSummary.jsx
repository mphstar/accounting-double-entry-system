import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import TaxSummary from '@/features/company/report/tax-summary/TaxSummary'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Tax Report"}))
      }, [])
      
    return(
        <TaxSummary />
    )
}

export default InternalPage