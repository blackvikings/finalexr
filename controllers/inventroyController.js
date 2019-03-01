Inventory = require('../model/inventroyModel.js');
Contact = require('../model/contactModel.js');
var db = require('../database.js');
var async = require('async');

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

exports.join = async function(req, res) {

    async.waterfall([
        function (callback) {
            Inventory.find(callback);

        },
        function(inventories, callback){
            Contact.find({
                "_id":{ "$in": inventories.map(function(el){
                    return el.customer_id;
                }) }
            },callback);
        }
    ], function(err, results){
        if(err){
            throw err;
        }
        else{
            res.json({
                data:results
            })
        }
    });


}

// db.collection('inventories').aggregate([{
        //     $lookup: {
        //         form:'contacts',
        //         localField: 'customer_id',
        //         foreignField: '_id',
        //         as:"inventory_doc"
        //     }
        // }]).exec(function (err, results){
        //     if(err){
        //         throw err;
        //     }
        //     else {
        //         res.json({
        //             status:'success',
        //             data: results
        //         });
        //     }
        // });