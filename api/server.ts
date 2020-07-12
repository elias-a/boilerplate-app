import { App } from './app';
import { api } from './api'

const app = App(api);

app.listen(3000);