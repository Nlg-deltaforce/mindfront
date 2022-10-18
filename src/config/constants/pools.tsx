import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto MTN</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.mtn.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake MTN</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.mtn.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO MTN',
    description: <Trans>Stake MTN to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.mtn.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.mtn,
    earningToken: serializedTokens.mtn,
    contractAddress: {
      38626: '',
      10434: '0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  }
].filter((p) => !!p.contractAddress[CHAIN_ID])

// known finished pools
const finishedPools = [
  // {
  //   sousId: 280,
  //   stakingToken: serializedTokens.mtn,
  //   earningToken: serializedTokens.xrp,
  //   contractAddress: {
  //     38626: '',
  //     10434: '0xd30854a284C72Ef4969B74b64628DB4bD697e900',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.01331',
  //   version: 3,
  // }
]
  .filter((p) => !!p.contractAddress[CHAIN_ID])
  .map((p) => ({ ...p, isFinished: true }))

export default [...pools, ...finishedPools]
