
const newsController = {
    index(req,res) {
        res.render('news');
    },
    detail(req,res){
        res.render('detail');
    }
}

module.exports = newsController;

