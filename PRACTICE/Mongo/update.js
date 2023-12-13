db.inventory.updateOne(
    { item: 'mat' },
    {
      $set: { 'size.uom': 'mm', qty: 35 },
      $currentDate: { lastModified: true }
    }
  );

  db.inventory.updateMany(
    { qty: { $lt: 50 } },
    {
      $set: { 'size.uom': 'in', status: 'P' },
      $currentDate: { lastModified: true }
    }
  );