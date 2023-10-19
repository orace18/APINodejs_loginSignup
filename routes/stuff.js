const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const ctrlStuff = require('../controllers/stuff');

router.post('/', ctrlStuff.createThing);

router.put('/:id', ctrlStuff.modifyThing);

router.delete('/:id',  ctrlStuff.deleteThing);

router.get('/:id',  ctrlStuff.getOneThing);

router.get('/',  ctrlStuff.getAllThings);


module.exports = router;