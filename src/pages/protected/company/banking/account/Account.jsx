import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import Account from '@/features/company/banking/account/Account'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Bank Account"}))
      }, [])
      
    return(
        <Account />
    )
}

export default InternalPage