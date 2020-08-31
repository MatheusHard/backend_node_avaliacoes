const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const avaliacaoSchema = new mongoose.Schema({
  
  radioSim_1: { type: Number, required: true, default: 0 },
  radioNao_1: { type: Number, required: true, default: 0 },

  radioMuito_2: { type: Number, required: true, default: 0 },
  radiobom_2: { type: Number, required: true, default: 0 },
  radioRegular_2: { type: Number, required: true, default: 0 },
  radioRuim_2: { type: Number, required: true, default: 0 },

  radioSeguro_3: { type: Number, required: true, default: 0 },
  radioPoucoSeguro_3: { type: Number, required: true, default: 0 },
  radioInseguro_3: { type: Number, required: true, default: 0 },

  radioExcessiva_4: { type: Number, required: true, default: 0 },
  radioRazoavel_4:{ type: Number, required: true,  default: 0 },
  radioInsuficiente_4: { type: Number, required: true,  default: 0 },

  radioMuito_5: { type: Number, required: true,  default: 0 },
  radiobom_5: { type: Number, required: true,  default: 0 },
  radioRegular_5: { type: Number, required: true,  default: 0 },
  radioRuim_5: { type: Number, required: true,  default: 0 },

  radioMuito_6: { type: Number, required: true,  default: 0 },
  radiobom_6: { type: Number, required: true,  default: 0 },
  radioRegular_6: { type: Number, required: true,  default: 0 },
  radioRuim_6: { type: Number, required: true,  default: 0 },

  radioMuito_7: { type: Number, required: true,  default: 0 },
  radiobom_7: { type: Number, required: true,  default: 0 },
  radioRegular_7: { type: Number, required: true,  default: 0 },
  radioRuim_7: { type: Number, required: true,  default: 0 },

  radioMuito_8: { type: Number, required: true,  default: 0 },
  radiobom_8: { type: Number, required: true,  default: 0 },
  radioRegular_8: { type: Number, required: true, default: 0 },
  radioRuim_8: { type: Number, required: true, default: 0 },

  radioMuito_9: { type: Number, required: true, default: 0 },
  radiobom_9: { type: Number, required: true, default: 0 },
  radioRegular_9: { type: Number, required: true, default: 0 },
  radioRuim_9: { type: Number, required: true,  default: 0 },

  radioMuito_10: { type: Number, required: true,  default: 0 },
  radiobom_10: { type: Number, required: true,  default: 0 },
  radioRegular_10: { type: Number, required: true,  default: 0 },
  radioRuim_10: { type: Number, required: true,  default: 0 },

  descricao: { type: String},

  cpf_profissional: { type: String, required: "Cpf é obrigatório!!!",  maxlength: 11 },
/*  descricao_profissional: { type: String, required: "Nome do Profissional é obrigatório!!!" },
  tipo_profissional: { type: Number, required: true, },
  descricao_tipo_profissional: { type: String, required: "Tipo do Profissional é obrigatório!!!" },

  //datahora: { type: Date, required: "Data é obrigatória!!!" },
  cidade_id: { type: Number, required: "Campo Cidade_id é obrigatório!!!" },
  descricao_cidade: { type: String, required: "Nome da Cidade é obrigatória!!!" },
  uf_id: { type: Number, required: "Uf_id é obrigatória!!!" },
  descricao_uf: { type: String, required: "Nome da Uf é obrigatória!!!" },*/
 
});

module.exports = mongoose.model("Avaliacao", avaliacaoSchema, "avaliacao");