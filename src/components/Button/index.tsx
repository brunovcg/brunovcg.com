import { IButton } from './types'
import { Styled } from './styles'

function Button({ text }: IButton) {
  return (
    <Styled>
      <button type='button'>{text}</button>
    </Styled>
  )
}

export default Button
