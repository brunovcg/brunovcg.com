import styled from 'styled-components'
import { appConfigs } from 'configs/appConfigs'

interface IStyled {
  optionsSize: number
}

export const Styled = styled.div<IStyled>`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${`${appConfigs.windowBreakpoint}px`}) {
    flex-direction: column;
  }

  .upperHeader {
    display: flex;
    align-items: center;
    width: 100%;
    h1 {
      color: var(--red);
      width: 20%;
      text-align: center;

      @media (max-width: ${`${appConfigs.windowBreakpoint}px`}) {
        width: 50%;
      }
    }

    nav {
      width: 60%;

      ul {
        display: flex;
        justify-content: center;
        gap: 60px;
        li {
          width: calc(100% / ${(props) => props.optionsSize});
          display: flex;
          justify-content: center;
        }
      }
    }
    .languages {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;

      .css-1yjjitx-MuiSwitch-track {
        background-color: var(--white) !important;
      }
      @media (max-width: ${`${appConfigs.windowBreakpoint}px`}) {
        width: 50%;
      }
    }
  }
  .underHeader {
    width: 100%;

    nav {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 15px;

        li {
          width: calc(100% / ${(props) => props.optionsSize});
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`
