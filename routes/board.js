var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gridbuild', function (req, res) {
    let query = req.query;
    console.log(`rows ${query.rows}`);
    console.log(`cols ${query.cols}`);
    res.render('board', { title: 'Board Display', query: query });
    function computeCellValue(row, col, rows, cols) {
        if (row === col) {
          return 1;
        } else if (row === col + 1) {
          return 2;
        } else if (row === col - 1) {
          return row;
        }
        return 0;
      }
      
      
      
});

module.exports = router;
