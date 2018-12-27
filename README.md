# alacart_vuetify

With this repo you can reproduce my Discod issue. The issue is that if vuetify is insalled in the parent project (alacart_vuetify) AND in the child project (app_alacart_vuetify) then VTimePicker and VDatePicker do not render correctly 

To reportduce:
```
cd app_alacart_vuetify
npm run serve (The components will not render correctly)
cd .. 
npm uninstall vuetify --save
cd app_alacart_vuetify
npm run serve (The components will render correctly)
```

The file stucture I have set up looks strange, I know. My ultimate goal is to have all the components and their unit tests in the parent project (stripping out everyting else). Each child project would be a app with its own compiled package I could deploy. That's the dream.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
