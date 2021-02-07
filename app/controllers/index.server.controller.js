exports.displayInfo = function (req, res) {
    //get user input using request object
    var email = req.body.email;
    var password=req.body.password;
    //make a reference to the session object
    var session = req.session;
    //store the email in session object

    if(email){
        session.email = email;
        session.password = password;
        console.log("email in session: " + session.email);
        console.log("password in session: " + session.password);
    
        res.redirect('/comment');
    }
    else{
        res.render('index');
    }
    
}; //end of function
