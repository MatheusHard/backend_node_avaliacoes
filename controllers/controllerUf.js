const mongoose = require('mongoose');
const Uf = mongoose.model('Uf');

exports.index = async (req, res)=>{
  
const { descricao } = req.body;
    try {
        const data = await Uf.find({}).sort({descricao});
        
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    