const   express = require('express'),
        router = express.Router(),
        validations = require("./validations"),
        feriadosController = require("./controller")
      
/* GET home page. */
router.get('/', feriadosController.list);

router.post('/',feriadosController.crear);

router.post('/popular',feriadosController.popular);

router.put('/:id', feriadosController.put);

router.delete('/:id', feriadosController.delete);

module.exports = router;
