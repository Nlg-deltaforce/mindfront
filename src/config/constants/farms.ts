import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
   {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'MTN',
    lpAddresses: {
      38626: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
      10434: '0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wmtv,
  },
  {
    pid: 2,
    // v1pid: 1,
    lpSymbol: 'MTN-MTV LP',
    lpAddresses: {
      38626: '0x04a87d67A487C38089736C738aEBc13D6B981c76',
      10434: '0xaaefa928b5b5b68bdcf2354a861fafff0177d9e0',
    },
    token: serializedTokens.mtn,
    quoteToken: serializedTokens.wmtv,
  },
  {
    pid: 3,
    // v1pid: 2,
    lpSymbol: 'MUSD-MTV LP',
    lpAddresses: {
      38626: '0xc8EdeC730CC6aBb57c213c840633071164357357',
      10434: '0x5b1E355f1F77b3cEDEf922927f4A1a894e91Cff3',
    },
    token: serializedTokens.musd,
    quoteToken: serializedTokens.wmtv,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 4,
    // v1pid: 3,
    lpSymbol: 'USDT-MTV LP',
    lpAddresses: {
      38626: '0x0DC8b02c393B3FD37dA5B3944Ad9d301377C5849',
      10434: '0x42D340a69E9f684A33c9B449AAF9aDEC0F9d79cd',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wmtv,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'ETH-MTV LP',
  //   lpAddresses: {
  //     38626: '',
  //     10434: '0xD30916af2D1E8F5da477057A95958e724528bcCa',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wmtv,
  // },


  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
