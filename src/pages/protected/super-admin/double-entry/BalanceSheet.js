import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import BalanceSheet from '../../../../features/super-admin/double-entry/balance-sheet'


function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])
      
    return(
        <BalanceSheet />
    )
}

export default InternalPage