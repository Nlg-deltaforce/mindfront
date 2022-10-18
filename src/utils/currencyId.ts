import { Currency, ETHER, Token } from '@danielvindax/metaviral-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MTV'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
