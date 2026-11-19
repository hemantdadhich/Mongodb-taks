
db.books.insertMany([
  { title: "Operating Systems", author: "Silberschatz", copies: 6, status: "available" },
  { title: "Database Systems", author: "Elmasri", copies: 2, status: "available" }
]);


db.books.updateOne(
    { title: "Artificial Intelligence" },
    {
        $set: {
            author: "Unknown",
            copies: 4,
            status: "available"
        }
    },
    { upsert: true }
);


db.books.find({}, { _id: 0 });
