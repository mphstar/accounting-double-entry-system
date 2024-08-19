import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../../features/common/headerSlice'
import ConstantContract from '../../../../../features/company/constant/contract-type/ConstantContract'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])
      
    return(
        <ConstantContract />
    )
}

export default InternalPage