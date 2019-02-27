var Inventory = require('../model/inventroyModel.js');

exports.index = function (req, res){
    // res.send('Hello');
    console.log(Inventory);
    Inventory.get(function (err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: result
        });
    });
}