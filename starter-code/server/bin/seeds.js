const MONGOOSE = require('mongoose');
MONGOOSE.connect('mongodb://localhost/journal-development');

const JOURNAL_ENTRY = require('../models/journal-entry.js');

const ENTRIES = [
  {
    date: new Date(),
    title: '1',
    content: 'A'
  },
  {
    date: new Date(),
    title: '2',
    content: 'B'
  },
  {
    date: new Date(),
    title: '3',
    content: 'C'
  },
  {
    date: new Date(),
    title: '4',
    content: 'D'
  },
  {
    date: new Date(),
    title: '5',
    content: 'E'
  },
  {
    date: new Date(),
    title: '6',
    content: 'F'
  },
  {
    date: new Date(),
    title: '7',
    content: 'G'
  },
  {
    date: new Date(),
    title: '8',
    content: 'H'
  },
  {
    date: new Date(),
    title: '9',
    content: 'I'
  },
  {
    date: new Date(),
    title: '10',
    content: 'J'
  },
];

JOURNAL_ENTRY.create(ENTRIES, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneEntry) => {
    console.log(`${oneEntry.title} ${oneEntry._id}`);
  });

  MONGOOSE.disconnect();
});
