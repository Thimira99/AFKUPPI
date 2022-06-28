const { findByIdAndUpdate } = require('../model/author');
const author = require('../model/author');

const post = async (ctx) => {
    try {
        const data = ctx.request.body;
        const authorr = await author.create(data);
        return (ctx.body = authorr);
    } catch (err) {
        return (ctx.body = ({ message: "Error" }), (ctx.status = 201))
    }
}

const getAll = async (ctx) => {
    try {
        const data = await author.find();
        return (ctx.body = data);
    } catch (err) {
        return (ctx.body = ({ message: "Error" }))
    }
}

const getById = async (ctx) => {
    try {
        const id = ctx.params.id;
        console.log(id);
        const data = await author.findById(id);
        return (ctx.body = data);
    } catch (err) {
        return (ctx.body = ({ message: "Error" }))
    }
}

const updateById = async (ctx) => {
    try {
        const id = ctx.params.id;

        const { firstName, lastName, nationality } = ctx.request.body;
        const newData = {
            firstName, lastName, nationality
        }
        const data = await author.findByIdAndUpdate(id, newData);
        return (ctx.body = data);
    } catch (err) {
        return (ctx.body = ({ message: "error" }))
    }
}

const deleteById = async (ctx) => {
    try {
        const id = ctx.params.id;
        const data = await author.findByIdAndDelete(id);
        return (ctx.body = data);

    } catch (err) {
        return (ctx.body = ({ message: err }))
    }
}

module.exports = { post, getAll, getById, updateById, deleteById }