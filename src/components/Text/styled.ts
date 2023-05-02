import styled from 'styled-components'
import { ThemeColor, FontVariant } from '../../style/theme'

type Props = {
  as: FontVariant
  color: ThemeColor
  paddingRight?: boolean
}

export const StyledText = styled.span<Props>`
  font-size: ${({ theme, as }) => {
    const textSize = theme.fonts[as].size
    return theme.fontSizes[textSize]
  }}rem;
  color: ${({ theme, color }) => theme.colors[color]};
  padding-right: ${({ paddingRight }) => (paddingRight ? '1rem' : null)};
`
