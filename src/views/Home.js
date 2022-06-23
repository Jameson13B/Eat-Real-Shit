import React, { useContext } from 'react'

import { ThemeContext } from '../App'

import { Button } from '../components/Button'
import { Container } from '../components/Container'

export const Home = (props) => {
  const theme = useContext(ThemeContext)
  const styles = getStyles(theme)

  return (
    <Container>
      <h1>Eat Real Shit</h1>
      <p>
        Eat, drink, and be merry with us! A collection of picnics in the park with sandwiches from a
        local shop, trying a new restaurant/bar, or a potluck event(with food actually worth
        eating).
      </p>
      <h4>Types of Future Events:</h4>
      <ul>
        <li>Buds plant based sandwiches at the city park.</li>
        <li>Rooftop bar/restaurant at upcoming West Quarter</li>
        <li>BBQ and beer pool party.</li>
        <li>Themed potluck(bring tacos from your favorite restaurant, etc.).</li>
        <li>And so much more!</li>
      </ul>
      <p style={styles.disclaimer}>
        *Eat Real Shit is a private invite-only group to maintain quality, value, and benefit. Learn
        more or request an invite below.
      </p>
      <Button onClick={() => alert('Coming soon!')} style={styles.learnMore} variant="primary">
        Learn More
      </Button>
      <hr style={styles.hr} />
      <h5 style={styles.themeTitle}>Change your prefered theme here:</h5>
      <div style={styles.buttons}>
        <Button
          onClick={() => props.setColorScheme('light')}
          style={styles.colorSchemeButtons}
          variant="neutral"
        >
          Light
        </Button>
        <Button
          onClick={() => props.setColorScheme('dark')}
          style={{ ...styles.colorSchemeButtons, marginLeft: '2%' }}
          variant="neutral"
        >
          Dark
        </Button>
      </div>
    </Container>
  )
}

const getStyles = (theme) => ({
  disclaimer: {
    fontStyle: 'italic',
  },
  learnMore: {
    width: '100%',
    marginBottom: theme.spacing.small,
  },
  hr: {
    margin: `${theme.spacing.large} ${theme.spacing.medium} 0`,
  },
  themeTitle: {
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  colorSchemeButtons: {
    width: '48%',
  },
})
