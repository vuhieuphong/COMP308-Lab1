exports.displayComments=(req,res)=>{
    var {courseCode,courseName,comment,favTopic,favAssignment,rating}=req.body;
    
    var evaluation={
        courseCode,
        courseName,
        comment,
        favTopic,
        favAssignment,
        rating
    }

    req.session.evaluation=evaluation;

    res.redirect('/thank');
    
    console.log("evaluation in session: ", session.evaluation);
}