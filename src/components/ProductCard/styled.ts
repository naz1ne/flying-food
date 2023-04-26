import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type ProductCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
}
export const StyledCard = styled.div`
  margin-top: 4rem;
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  width: 250px;
  height: 320px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  position: relative;
  padding: 2rem 0.8rem;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: absolute;
  width: 120px;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
`

export const TextWrapper = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  flex-grow: 1;
`
export const FooterCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterRightWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
