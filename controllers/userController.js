const db = require('../models');

module.exports = {
    packages : async (req, res) => {
        try {
            const tb_packages = await db.packages.findAll();

            res.json({ tb_packages })
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    services : async (req, res) => {
        try {
            const tb_services = await db.services.findAll();

            res.json({ tb_services });
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    gallery : async (req, res) => {
        try {
            const tb_gallery = await db.gallery.findAll();

            res.json({ tb_gallery })
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    review : async (req, res) => {
        try {
            const tb_reviews = await db.review.findAll();

            res.json ({ tb_reviews })
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    postBooking : async (req, res) => {
        try {
            const data = {
                place_name : req.body.place_name,
                guest : req.body.guest,
                arrival : req.body.arrival,
                leave : req.body.leave
            }

            const book = await db.booking.create(data);
            res.send({ book })
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    getBooking : async (req, res) => {
        try {
            const tb_bookings = await db.booking.findAll();

            res.send({ tb_bookings })
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    postContact : async (req, res) => {
        try {
            const data = {
                name : req.body.name,
                email : req.body.email,
                number : req.body.number,
                subject : req.body.subject,
                message : req.body.message
            }

            const contact = await db.contact.create(data);
            res.send({ contact });
        } catch (error) {
            res.send({ message : error.message });
        }
    }
}