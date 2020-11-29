/*
    Design a DB for Hall Booking Application

    Hall Collection
        - Name
        - sqFt
        - Number of seats
        - price-per-hour

    Customers
        - name
        - email
        - phoneNumber

    Orders
        - hallId
        - customerId
        - startDateAndTime
        - endDateAndTime
        - Total amount

    - Show total amount of orders done by customerA
    - Show total amount of value ordered by Hall 1
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let halls = [];
let customers = [];
let bookings = [];

// Get all halls
app.get("/api/halls", (req, res) => {
    res.json(halls);
});

// Add new hall
app.post("/api/hall", (req, res) => {
    req.body.id = halls.length + 1;
    halls.push(req.body);
    res.json({
        "success": "Hall created"
    });
});

// Get a particular hall
app.get("/api/hall/:id", (req, res) => {
    let hall = halls.find(obj => obj.id == req.params.id);
    if (hall) {
        res.json(hall);
    } else {
        res.status(404).json({
            "failed": "No Hall Found"
        });
    }
});

// Update a particular hall
app.put("/api/hall/:id", (req, res) => {
    let hall = halls.find(obj => obj.id == req.params.id);
    if (hall) {
        if (req.body.name) {
            hall.name = req.body.name;
        }
        if (req.body.area_in_sqft) {
            hall.area_in_sqft = req.body.area_in_sqft;
        }
        if (req.body.no_of_seats) {
            hall.no_of_seats = req.body.no_of_seats;
        }
        if (req.body.price_per_hour) {
            hall.price_per_hour = req.body.price_per_hour;
        }
        res.json({
            "success": "Details Updated",
            hall
        });
    } else {
        res.status(404).json({
            "failed": "No Hall Found"
        });
    }
});

// Delete a particular hall
app.delete("/api/hall/:id", (req, res) => {
    let index = halls.findIndex(obj => obj.id == req.params.id);
    if (index != -1) {
        halls[index] = {};
        res.json({
            "success": "Hall deleted"
        });
    } else {
        res.status(404).json({
            "failed": "No Hall Found"
        });
    }
});



// Get all customers
app.get("/api/customers", (req, res) => {
    res.json(customers);
});

// Add new customer
app.post("/api/customer", (req, res) => {
    req.body.id = customers.length + 1;
    customers.push(req.body);
    res.json({
        "success": "Customer created"
    });
});

// Get a particular customer
app.get("/api/customer/:id", (req, res) => {
    let customer = customers.find(obj => obj.id == req.params.id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).json({
            "failed": "No Customer Found"
        });
    }
});

// Update a particular customer
app.put("/api/customer/:id", (req, res) => {
    let customer = customers.find(obj => obj.id == req.params.id);
    if (customer) {
        if (req.body.name) {
            customer.name = req.body.name;
        }
        if (req.body.email) {
            customer.email = req.body.email;
        }
        if (req.body.phone) {
            customer.phone = req.body.phone;
        }
        res.json({
            "success": "Details Updated",
            customer
        });
    } else {
        res.status(404).json({
            "failed": "No Customer Found"
        });
    }
});

// Delete a particular customer
app.delete("/api/customer/:id", (req, res) => {
    let index = customers.findIndex(obj => obj.id == req.params.id);
    if (index != -1) {
        customers[index] = {};
        res.json({
            "success": "Customer deleted"
        });
    } else {
        res.status(404).json({
            "failed": "No Customer Found"
        });
    }
});



// Place new booking
app.get("/api/bookings", (req, res) => {res.send(bookings);});
app.post("/api/booking", (req, res) => {
    let dateTime = req.body.startDateAndTime.split(' ');
    let curDate = dateTime[0].split("/");
    let check = new Date(curDate[2], parseInt(curDate[1]) - 1, curDate[0]);
    let available = true;
    for (booking of bookings) {
        let date1 = booking.startDateAndTime.split(" ");
        date1 = date1[0].split("/");
        let date2 = booking.startDateAndTime.split(" ");
        date2 = date2[0].split("/");
        let from = new Date(date1[2], parseInt(date1[1]) - 1, date1[0]);
        let to = new Date(date2[2], parseInt(date2[1]) - 1, date2[0]);
        if (check >= from && check <= to) {
            available = false;
            break;
        }
    }
    if (available) {
        let startDate = new Date(`${curDate[1]}/${curDate[0]}/${curDate[2]} ${dateTime[1]}`).getTime();
        dateTime = req.body.endDateAndTime.split(' ');
        let last = dateTime[0].split("/");
        let endDate = new Date(`${last[1]}/${last[0]}/${last[2]} ${dateTime[1]}`).getTime();
        let hours = ((Math.abs(endDate - startDate)) / (1000 * 60 * 60)).toFixed(1);
        req.body.id = bookings.length + 1;
        req.body.totalHours = hours;
        bookings.push(req.body);
        res.json({
            "success": "Hall Booked"
        });
    } else {
        res.json({
            "failed": "Hall is already booked!"
        });
    }
});



// Get all bookings done by particular customer
app.get("/api/booking/user/:id", (req, res) => {
    let customer = customers.find(obj => obj.id == req.params.id);
    if (customer) {
        let customerBookings = [];
        bookings.map(obj => {
            if (obj.customer_id == req.params.id) {
                let hall = halls.find(hall => hall.id == obj.hall_id);
                customerBookings.push({
                    hall_name: hall.name,
                    startDateAndTime: obj.startDateAndTime,
                    endDateAndTime: obj.endDateAndTime,
                    amount: 35000
                });
            }
        });
        if (customerBookings.length > 0) {
            res.json({
                customer,
                customerBookings
            });
        } else {
            res.json({
                customer,
                "status": "No Booking made"
            });
        }
    } else {
        res.status(404).json({
            "failed": "No Customer Found"
        });
    }
});



// Get all bookings done for particular hall
app.get("/api/booking/hall/:id", (req, res) => {
    let hall = halls.find(obj => obj.id == req.params.id);
    if (hall) {
        let hallBookings = [];
        bookings.map(obj => {
            if (obj.hall_id == req.params.id) {
                let customer = customers.find(ele => ele.id == obj.customer_id);
                hallBookings.push({
                    customer: customer,
                    startDateAndTime: obj.startDateAndTime,
                    endDateAndTime: obj.endDateAndTime,
                    amount: 35000
                });
            }
        });
        if (hallBookings.length > 0) {
            res.json({
                hall,
                hallBookings
            });
        } else {
            res.json({
                hall,
                "status": "No Booking made"
            });
        }
    } else {
        res.status(404).json({
            "failed": "No Hall Found"
        });
    }
});



app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
});