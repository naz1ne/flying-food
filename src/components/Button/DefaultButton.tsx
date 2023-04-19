import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ButtonProps, IconWrapper, StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>

export const DefaultButton = ({
  color = 'primary',
  colorText = 'text',
  font = 'span',
  padding = 'lg',
  iconColor,
  iconBackground,
  title,
  rounded,
  outline,
  children,
  iconName,

  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color}
      iconBackground={iconBackground}
      colorText={colorText}
      font={font}
      padding={padding}
      rounded={rounded}
      outline={outline}
      {...rest}
    >
      {title && <Text color={colorText} variant={font} text={title} />}
      {iconName && (
        <IconWrapper background={iconBackground}>
          <Icon color={color} iconName={iconName} />
        </IconWrapper>
      )}
    </StyledButton>
  )
}