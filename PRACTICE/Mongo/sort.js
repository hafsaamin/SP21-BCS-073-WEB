db.inventory.find().skip(1);
db.inventory.find().sort({qty:1});//increasing order
db.inventory.find().sort({qty:-1}); //decreasing order
db.inventory.find().limit(1); //show first document in output

//pagination example

// page no 1 to 10
// no=8 //number of blogs
// db.inventory.find().skip(0).limit(no)
// db.inventory.find().skip((pagenNo-1)*no).limit(no)
// page no=1 db.inventory.find().skip((pagenNo-1)*8).limit(8)

