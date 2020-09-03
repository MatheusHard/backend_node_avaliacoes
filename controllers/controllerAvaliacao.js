const mongoose = require('mongoose');
const Avaliacao = mongoose.model('Avaliacao');

exports.index = async (req, res)=>{


    try {
        const data = await Avaliacao.find({});
        console.log(data);
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    exports.add = async (req, res) =>{
        console.log(req.body);

        const avaliacao = new Avaliacao(req.body);
        const a = await avaliacao.save();
        res.json(a);
        };

