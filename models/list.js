const mongoose = require('mongoose');

const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const BucketList = mongoose.model('BucketList', BucketlistSchema);

module.exports = BucketList;

module.exports.getAllLists = (cb) => {
    BucketList.find(cb);
}

module.exports.addList = (newList, cb) => {
    newList.save(cb);
}

module.exports.deleteListById = (id, cb) => {
    let query = { _id: id };
    BucketList.remove(query, cb);
}