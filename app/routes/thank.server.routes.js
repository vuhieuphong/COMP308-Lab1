//this function handles routing of requests
module.exports = function (app) {
    //load the controller(s)
    var thank=require('../controllers/thank.server.controller');
    
    app.get('/thank',(req,res)=>{
        if(req.session.email&&req.session.evaluation){
            res.render('thank',{
                email:req.session.email,
                evaluation:req.session.evaluation
            });
        }
        else{
            res.redirect('/');
        }
    })

    app.post('/thank',(req,res)=>{
        thank.logout(req,res);
    })
};
