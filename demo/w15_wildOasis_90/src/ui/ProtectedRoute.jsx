import styled from 'styled-components'
import { useUser } from '../features/authentication/useUser'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Spinner from './Spinner'

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated use, redirect to landing page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/landing')
  }, [isAuthenticated, isLoading, navigate]);
  // 3. while loading, show a spinner
  if (isLoading) {
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    )
  }
  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}
export default ProtectedRoute;
