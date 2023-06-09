import { ChangeEvent, memo, useContext } from 'react'
import { currencyContext } from '../../context/currency'
import { CurrencySymbol } from '../../context/currency'
import { StyledCurrency } from './styled'

const options: CurrencySymbol[] = ['EUR', 'USD', 'JPY', 'GBP']

export const CurrencySelect = memo(() => {
  const { currency, setCurrency } = useContext(currencyContext)

  return (
    <StyledCurrency
      value={currency}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as CurrencySymbol
        setCurrency(value)
      }}
    >
      {options.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </StyledCurrency>
  )
})
