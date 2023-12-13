module.exports=function(req,res,next){            //next is a middle ware
    console.log(req.method + ":" + req.url);
    next();
};

