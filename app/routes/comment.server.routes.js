//this function handles routing of requests
module.exports = function (app) {
    //load the controller(s)
    var comment=require('../controllers/comment.server.controller');

    app.get('/comment',(req,res)=>{
        if(req.session.email){
            res.render('comment',{email:req.session.email});
        }
        else{
            res.redirect('/');
        }

    })

    app.post('/comment', (req, res) => {
        //use the controller function
        comment.displayComments(req, res); 
    });
};
