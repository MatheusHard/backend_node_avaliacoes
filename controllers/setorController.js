const mongoose = require('mongoose');
const Setor = mongoose.model('Setor');

exports.index = async (req, res)=>{


    try {
        const data = await Setor.find({});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    