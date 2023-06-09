import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryCard } from '../../components/CategoryCard'
import { tagActions } from '../../features/tags/reducer'
import { selectSelectedTagId, selectTags } from '../../features/tags/selectors'
import { CategoryWrapper } from './styled'

export const CategorySection = memo(() => {
  const categories = useSelector(selectTags)
  const dispatch = useDispatch()
  const categoryFiltered = categories.filter(({ hidden }) => !hidden)
  const selectedCategory = useSelector(selectSelectedTagId)
  useEffect(() => {
    dispatch(tagActions.fetchTags())
  }, [dispatch])

  return (
    <CategoryWrapper>
      {categoryFiltered.length &&
        categoryFiltered.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            selected={selectedCategory === category.id}
          />
        ))}
    </CategoryWrapper>
  )
})
