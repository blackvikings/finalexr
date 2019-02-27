
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inventorySchema = new Schema({
    sku:String,
    description:String,
    instock: Number,
    customer_id: String
});

var Inventory =  mongoose.model('Inventory', inventorySchema );
module.exports.get = function (callback, limit){
    Inventory.find(callback).limit(limit);
} 