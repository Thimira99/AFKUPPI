const koaRouter = require('@koa/router');

const { post, getAll, getById, updateById, deleteById } = require('../Controller/authorController');

const authorRouter = new koaRouter({
    prefix: '/author'
});

authorRouter.post('/', post);
authorRouter.get('/', getAll);
authorRouter.get('/getById/:id', getById);
authorRouter.put('/updateById/:id', updateById);
authorRouter.delete('/deleteById/:id', deleteById);

module.exports = { authorRouter };