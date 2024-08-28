import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import Transaction from '@/features/company/report/transaction/Transaction'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Transaction"}))
      }, [])
      
    return(
        <Transaction />
    )
}

export default InternalPage