import { Switch } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'hooks/windowDimensions'
import { Styled } from './styles'
import { Emoji } from '../Emoji'

export function Header() {
  const { t, i18n } = useTranslation()

  const { isMobile } = useWindowDimensions()

  const options = [
    { id: 1, text: t('header.nav.options.home'), href: '#home' },
    { id: 2, text: t('header.nav.options.about'), href: '#about' },
    { id: 3, text: t('header.nav.options.portfolio'), href: '#portfolio' },
    { id: 4, text: t('header.nav.options.contact'), href: '#contact' }
  ]

  const handleSwitch = () => {
    if (i18n.language === 'pt-BR') {
      i18n.changeLanguage('en-US')
    } else {
      i18n.changeLanguage('pt-BR')
    }
  }

  const navMenu = (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )

  return (
    <Styled optionsSize={options.length}>
      <div className='upperHeader'>
        <h1>{t('header.title')}</h1>

        {!isMobile ? navMenu : null}

        <div className='languages'>
          <Emoji label='usa' symbol='🇧🇷' size='large' />
          <Switch defaultChecked color='default' onChange={handleSwitch} />
          <Emoji label='usa' symbol='🇺🇸' size='large' />
        </div>
      </div>
      {isMobile ? <div className='underHeader'>{navMenu}</div> : null}
    </Styled>
  )
}
