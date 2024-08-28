import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import AccountStatement from '@/features/company/report/account-statement/AccountStatement'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Account Statement"}))
      }, [])
      
    return(
        <AccountStatement />
    )
}

export default InternalPage