db.orders.insertMany([
  { orderId: 101, customer: "Aarav", item: "Laptop", qty: 1, status: "delivered" },
  { orderId: 102, customer: "Priya", item: "Mouse", qty: 2, status: "pending" },
  { orderId: 103, customer: "Rohan", item: "Keyboard", qty: 1, status: "delivered" }
]);

db.orders.aggregate([
    {
        $match: { status: "delivered" }
    },
    {
        $project: {
            _id: 0,
            customer: 1,
            item: 1,
            qty: 1
        }
    }
]);
