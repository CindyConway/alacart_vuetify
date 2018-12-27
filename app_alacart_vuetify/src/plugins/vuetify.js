import Vue from 'vue';
import 'vuetify/src/stylus/app.styl';

import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VTimePicker,
  VDatePicker,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VTimePicker,
    VDatePicker,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  customProperties: true,
  iconfont: 'md',
});
