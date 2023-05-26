import OnuUI from 'onu-ui'
import { createApp } from 'vue'
import App from './Popup.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'
import 'onu-ui/dist/style.css'

const app = createApp(App)
app.use(OnuUI)
setupApp(app)
app.mount('#app')
