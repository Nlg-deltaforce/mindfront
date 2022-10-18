import { Colors, Heading, TextProps } from '@metaviralswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
  firstColor?: keyof Colors
}

const ColoredWordHeading: React.FC<HeadingProps> = ({ text, firstColor, mb = '24px', ...props }) => {
  const { theme } = useTheme()
  const split = text.split(' ')
  const firstWord = split[0]
  const remainingWords = split.slice(1).join(' ')
  const displayedColor = (theme.colors[firstColor] as string) ?? theme.colors.secondary

  return (
    <Heading scale="xl" mb={mb} {...props}>
      {firstWord}
      <span style={{ color: '#EFAC00' }}> {remainingWords}</span>
      
    </Heading>
  )
}

export default ColoredWordHeading
