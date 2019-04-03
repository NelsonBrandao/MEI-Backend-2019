const Koa = require('koa');
const cors = require('koa2-cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require('./db');

const app = new Koa();
const router = new Router();

router.get('/something', async ctx => {});

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(4000);

console.log('Listening on port 4000');