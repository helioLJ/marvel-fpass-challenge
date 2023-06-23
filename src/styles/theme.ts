interface ThemeType {
  COLORS: {
    WHITE: string
    BLACK: string
    MARVEL_RED: string
    GRAY: string
    MARVEL_GRADIENT: string
  }
}

const theme: ThemeType = {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    MARVEL_RED: '#ED1D24',
    GRAY: '#71717A',
    MARVEL_GRADIENT:
      'var(--marvel-gradient, linear-gradient(132deg, #ED1D24 0%, #A51116 31.25%, #73090D 63.54%, #3E0103 100%))',
  },
}

export default theme
