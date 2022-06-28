const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const { dbConnect } = require('./Db/db.js');
const { authorRouter } = require('./Router/authorRouter.js');

const app = new koa();

app.use(bodyParser());

app.use(cors({
    origin: "*"
}));

app.use(authorRouter.routes()).use(authorRouter.allowedMethods());
app.listen(2000, () => {
    dbConnect();
    console.log("listen On Port 2000")
})