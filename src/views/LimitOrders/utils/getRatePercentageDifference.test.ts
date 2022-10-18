import { JSBI, Price, Token, Percent } from '@danielvindax/metaviral-sdk'
import getRatePercentageDifference from './getRatePercentageDifference'

const MTN = new Token(10434, '0xd30854a284C72Ef4969B74b64628DB4bD697e900', 18, 'MTN', 'metaviralswap Token')
const MUSD = new Token(10434, '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288', 18, 'MUSD', 'Binance USD')
const DOGE = new Token(10434, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'Binance-Peg Dogecoin')

const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const TEN = JSBI.multiply(JSBI.BigInt(10), EIGHTEEN_DECIMALS)
const FIFTEEN = JSBI.multiply(JSBI.BigInt(15), EIGHTEEN_DECIMALS)

describe('limitOrders/utils/getRatePercentageDifference', () => {
  describe('18 decimal tokens', () => {
    const marketPrice = new Price(MTN, MUSD, EIGHTEEN_DECIMALS, TEN) // 10 MUSD per 1 CAKE
    it('returns correct positive percentage', () => {
      const price = new Price(MTN, MUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 MUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct negative percentage', () => {
      const price = new Price(MTN, MUSD, EIGHTEEN_DECIMALS, FIVE) // 5 MUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(-50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct equal percentage', () => {
      const price = new Price(MTN, MUSD, EIGHTEEN_DECIMALS, TEN) // 50 MUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(0, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
  })
  describe('18 decimal token and 8 decimal token', () => {
    const marketPrice = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, TEN) // 10 MUSD per 1 DOGE
    it('returns correct positive percentage', () => {
      const price = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 MUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct negative percentage', () => {
      const price = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, FIVE) // 5 MUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(-50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct equal percentage', () => {
      const price = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, TEN) // 50 MUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(0, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
  })
  describe('gracefully handles undefined arguments', () => {
    it('with undefined market price', () => {
      const price = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 MUSD per 1 DOGE
      const rate = getRatePercentageDifference(undefined, price)
      expect(rate).toBeUndefined()
    })
    it('with undefined price', () => {
      const marketPrice = new Price(DOGE, MUSD, EIGHTEEN_DECIMALS, TEN) // 10 MUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, undefined)
      expect(rate).toBeUndefined()
    })
    it('with both prices undefined', () => {
      const rate = getRatePercentageDifference(undefined, undefined)
      expect(rate).toBeUndefined()
    })
  })
})
