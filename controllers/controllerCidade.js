const mongoose = require('mongoose');
const Cidade = mongoose.model('Cidade');

exports.index = (req, res)=>{
    res.send('Cidade');
    };

    exports.add = async (req, res) =>{

        //const { descricao_cidade, uf_id} = req.body;
        
        /*const cidade = new Cidade({

        });*/
        const cidade = new Cidade(req.body);

        const c = await cidade.save();


        res.json(c);
        };