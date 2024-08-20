import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Company from '../../../../features/super-admin/company/Company'
import { setPageTitle } from '../../../../features/common/headerSlice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Company"}))
      }, [])
      
    return(
        <Company />
    )
}

export default InternalPage