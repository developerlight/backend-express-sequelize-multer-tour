const db = require('../models');


module.exports = {

    getPackages : async (req, res) => {
        try {
            const tb_packages = await db.packages.findAll();

            res.json({tb_packages});
            
        } catch (error) {
            res.send({ message : error.message });
        }
    },

    postPackages : async (req, res) => {
        const fileName = req.file.filename;
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${fileName}`;
        try {
            const data = {
                placeName : req.body.placeName,
                description : req.body.description,
                rating : req.body.rating,
                price : req.body.price,
                image : fileUrl
            };

            const result = await db.packages.create(data);
            res.json({ result });

        } catch (error) {
            res.send({ message : error.message });
        }
    }

}