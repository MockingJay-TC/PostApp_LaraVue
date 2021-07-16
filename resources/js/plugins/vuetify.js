// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    // default - only for display purposes
  },
  breakpoint: {
      scrollBarWidth: 16,
      thresholds: {
          xs: 600,
          sm: 900,
          md: 1080,
          lg: 1920,
      }
  },
  themes: {
      light: {
        primary: "#dd5928",
        gray: "#f2f2f2",
        secondary: "#424242",
        accent: "#6e6f71",
        error: "#ff5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#fdd24f"
      },

  },
  options: {
      customProperties: true,
  },

})