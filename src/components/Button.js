import React, { useContext } from 'react'
import { css } from '@mxenabled/cssinjs'

import { ThemeContext } from '../App'

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  NEUTRAL: 'neutral',
  TRANSPARENT: 'transparent',
}

export const Button = (props) => {
  const { disabled = false, onClick, variant = BUTTON_VARIANTS.PRIMARY, children, ...rest } = props
  const theme = useContext(ThemeContext)
  const styles = getStyles(theme, disabled)

  return (
    <button
      aria-disabled={disabled}
      className={`${css(styles)} atomic10-button atomic10-${variant} ${
        disabled ? 'atomic10-button-disabled' : ''
      }`}
      onClick={!disabled ? onClick : (e) => e.preventDefault()}
      // ref={ref}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

const getStyles = (theme, disabled) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 4,
  cursor: disabled ? 'not-allowed' : 'pointer',
  whiteSpace: 'nowrap',
  fontSize: 16,
  fontFamily: 'ProximaNovaSemibold, Helvetica, Arial, sans-serif',
  position: 'relative',
  padding: `0px 16px`,
  margin: 0,
  width: 'auto',
  height: '44px',
  transition: `all ${300}ms cubic-bezier(.475,.425,0,.995)`,
  '&:focus': {
    outline: 'none',
    boxShadow: '0px 0px 0px 2px rgba(82, 138, 224, 0.8)',
  },
  [`&.atomic10-${BUTTON_VARIANTS.PRIMARY}`]: {
    backgroundColor: theme[theme.colorScheme].button.primaryBackground,
    color: theme[theme.colorScheme].button.primaryText,
    '&:not(.atomic10-button-disabled):hover': {
      backgroundColor: theme[theme.colorScheme].button.primaryBackgroundHover,
      color: theme[theme.colorScheme].button.primaryText,
    },
    ...(disabled && {
      backgroundColor: theme[theme.colorScheme].button.primaryBackgroundDisabled,
      color: theme[theme.colorScheme].button.primaryTextDisabled,
    }),
  },
  [`&.atomic10-${BUTTON_VARIANTS.NEUTRAL}`]: {
    backgroundColor: theme[theme.colorScheme].button.neutralBackground,
    border: '1px solid',
    borderColor: '#CDD3DD',
    color: theme[theme.colorScheme].button.neutralText,
    '&:not(.atomic10-button-disabled):hover': {
      color: theme[theme.colorScheme].button.neutralTextHover,
      backgroundColor: theme[theme.colorScheme].button.neutralbackgroundHover,
      borderColor: '#165ECC',
    },
    ...(disabled && {
      backgroundColor: theme[theme.colorScheme].button.neutralBackgroundDisabled,
      color: theme[theme.colorScheme].button.neutralTextDisabled,
    }),
  },
})
