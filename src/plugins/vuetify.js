// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const theme = {
  dark: false,
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    success: '#4CAF50',
    warning: '#FB8C00',
    error: '#B00020',
    info: '#2196F3'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: { theme }
  }
})
