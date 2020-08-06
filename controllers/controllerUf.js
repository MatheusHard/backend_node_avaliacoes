const mongoose = require('mongoose');
const Uf = mongoose.model('Uf');

exports.index = async (req, res)=>{


    try {
        const data = await Uf.find({});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    