import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    10434: '0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    38626: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
  }

  it(`get address for mainnet (chainId 10434)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '10434'
    const expected = address[10434]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 38626)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '38626'
    const expected = address[38626]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[10434]
    expect(getAddress(address)).toEqual(expected)
  })
})
