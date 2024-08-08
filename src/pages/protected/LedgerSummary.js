import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import JournalAccount from '../../features/double-entry/journal-account'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])
      
    return(
        <JournalAccount />
    )
}

export default InternalPage