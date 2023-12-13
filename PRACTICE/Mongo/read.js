db.inventory.find();
db.inventory.find({ tags: { $in: [ "gel", "D" ] } })
db.inventory.find({ $or: [ { status: "A" }, { qty: { $lt: 30 } } ] })
db.inventory.findOne({ $or: [ { status: "A" }, { qty: { $lt: 30 } } ] })