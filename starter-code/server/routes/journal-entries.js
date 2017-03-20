const express       = require('express');
const router        = express.Router();
const JOURNAL_ENTRY = require('../models/journal-entry.js');
const MONGOOSE = require('mongoose');

router.get('/journal-entries', (req, res, next) => {
  console.log(`In Route`);
  JOURNAL_ENTRY.find((err, entryList) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json(entryList);
  });
});

module.exports = router;
