const mongoose = require('mongoose');
const Uf = mongoose.model('Uf');

exports.index = async (req, res)=>{


    try {
        const data = await Uf.find({}, {_id: 0});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    