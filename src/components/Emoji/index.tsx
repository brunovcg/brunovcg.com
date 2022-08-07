import { IEmoji } from './types'

export function Emoji({ label, symbol, size = 'medium' }: IEmoji) {
  const handleEmoji = (): string => {
    if (size === 'large') {
      return '20px'
    }
    if (size === 'medium') {
      return '16px'
    }
    return '10px'
  }

  return (
    <span
      className='emoji'
      role='img'
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
      style={{
        fontSize: handleEmoji()
      }}
    >
      {symbol}
    </span>
  )
}
