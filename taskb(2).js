db.books.insertMany([
  { title: "Operating Systems", author: "Silberschatz", copies: 6 },
  { title: "Database Systems", author: "Elmasri", copies: 3 }
]);


db.books.updateOne(
    { title: "Database Systems" },
    {
        $inc: { copies: -1 }
    }
);


db.books.find({}, { _id: 0 });
