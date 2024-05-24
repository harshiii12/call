const mongoose = require('mongoose')
const LogsSchema = new mongoose.Schema({
    log: {type: String}
}, {timestamps: true})

const logs = mongoose.model('logs', LogsSchema)

module.exports = logs