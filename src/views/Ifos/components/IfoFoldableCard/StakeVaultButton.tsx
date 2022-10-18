import { Button } from '@metaviralswap/uikit'

import { useTranslation } from 'contexts/Localization'

const StakeVaultButton = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} disabled>
      {t('Stake MTN in IFO pool')}
    </Button>
  )
}

export default StakeVaultButton
