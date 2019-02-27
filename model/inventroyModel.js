
var mongoose = require('mongoose');

Inventroy = db.collection('inventroy');
Inventroy.aggregate([
    { $lookup:
        {
            from:'contacts',
            localField: 'customer_id',
            foreignField:'_id',
            as:'inventroy_data'
        }

    }
], function(err, result){
    if(err) throw err;
    console.log(result);
});



// var inventroyschema = mongoose.Schema({
//     sku: String,
//     description: String,
//     instock:String,
//     customer_id:String
// }); 

// var Inventroy = module.exports = mongoose.model('inventroy', inventroyschema);
// module.exports.get = function (callback, limit){
//     Inventroy.find(callback).limit(limit);
// }