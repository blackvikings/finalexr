Inventory = require('../model/inventroyModel.js');

exports.index = function (req, res) {
    Inventory.get(function (err, results) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: results
        });
    });
};

exports.join = function(req, res) {

        Inventory.aggregate([{
            $lookup: {
                form:'contacts',
                localField: 'customer_id',
                foreignField: '_id',
                as:"inventory_doc"
            }
        }]).exec(function (err, results){
            if(err){
                throw err;
            }
            else {
                res.json({
                    status:'success',
                    data: results
                });
            }
        });
};
