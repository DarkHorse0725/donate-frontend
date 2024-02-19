import { useContext } from 'react'
import { RefreshContext } from '../context/RefreshContext'

const useRefresh = () => {
  const { fast, slow, low } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow, lowRefresh: low }
}

export default useRefresh
