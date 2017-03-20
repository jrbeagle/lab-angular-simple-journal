const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const ENTRY_SCHEMA = new SCHEMA({
  date: {type: Date, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true}
});

const JOURNAL_ENTRY = MONGOOSE.model('journal_entries', ENTRY_SCHEMA);

module.exports = JOURNAL_ENTRY;
