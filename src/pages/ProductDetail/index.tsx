import { memo, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FormReview } from '../../components/FormReview'
import { Loader } from '../../components/Loader'
import { Modal } from '../../components/Modal/Modal'
import { useGetProductByIdQuery } from '../../features/api/endpoints/productsEndpoints'
import { CardDetail } from './components/CardDetail'
import { Recommended } from './components/Recommended'
import { Reviews } from './components/Reviews'
import { RowButton, StyledDetails } from './styled'

export const ProductDetail = memo(() => {
  const { id } = useParams()
  const { data: product, isLoading } = useGetProductByIdQuery(id!)

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const toggleModal = useCallback(() => {
    setShowModal((state) => !state)
  }, [setShowModal])

  const handleNavigate = useCallback(() => {
    navigate('/catalog')
  }, [navigate])
  if (isLoading) return <Loader />
  return (
    <>
      <Modal opened={showModal} onClose={toggleModal}>
        <FormReview id={id!} onClose={toggleModal} />
      </Modal>
      <StyledDetails>
        <RowButton>
          <Button
            border="1"
            font="h5"
            outline
            padding="lg"
            title="Return To Catalog"
            paddingRight
            iconName="right"
            colorText="text"
            onClick={handleNavigate}
          />
        </RowButton>
        <CardDetail id={id!} loading={isLoading} product={product!} />
        <Reviews onClick={toggleModal} productId={product!.id} />
        <Recommended />
      </StyledDetails>
    </>
  )
})
