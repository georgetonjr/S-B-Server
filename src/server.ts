import { App } from "./app";
import { router } from './routes';

const app = new App({port: process.env.PORT, router})

app.initialize();