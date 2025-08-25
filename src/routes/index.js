
const newRouter = require("./news")
const siteRouter = require("./site")
function route(app){
app.use('/search', newRouter);
app.use('/site', siteRouter);
}
module.exports = route;