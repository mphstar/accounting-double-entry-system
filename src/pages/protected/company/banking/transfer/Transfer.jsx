import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import Transfer from '@/features/company/banking/transfer/Transfer'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Bank Balance Transfer"}))
      }, [])
      
    return(
        <Transfer />
    )
}

export default InternalPage