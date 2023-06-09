import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultButton } from '../../components/Button/DefaultButton'
import { Text } from '../../components/Text'
import { StyledText } from './styled'

export const NotFound = memo(() => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => navigate('/catalog'), [navigate])

  return (
    <div className="App notFound">
      <StyledText>
        <Text variant="h1" color="primary">
          Error, not found!
        </Text>
        <DefaultButton
          padding="md"
          color="secondary"
          colorText="text"
          title="Back Catalog"
          onClick={handleNavigate}
        />
      </StyledText>
    </div>
  )
})
