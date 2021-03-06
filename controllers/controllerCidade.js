const mongoose = require("mongoose");
const Cidade = mongoose.model("Cidade");

exports.index = async (req, res) => {
  try {
    const data = await Cidade.find({}, { _id: 0 });
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.indexFrontEnd = async (req, res) => {
  try {
    const data = await Cidade.aggregate([
      {
       
        $lookup:
         {
          from: "uf",
          localField: "uf_id_",
          foreignField: "_id",
          as: "uf",
        },
      },
      {
        $unwind:'$uf',

       
      },
      
      { $sort: {
        'descricao_cidade': 1, 
        
    } }
      

    ]);
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.add = async (req, res) => {
  const cidade = new Cidade(req.body);

  const c = await cidade.save();

  res.json(c);
};
