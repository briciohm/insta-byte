import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
	// Seleciona o banco de dados "Imersão-instabyte"
	const db = conexao.db("Imersão-instabyte");
	// Seleciona a coleção "posts" dentro do banco de dados
	const colecao = db.collection("posts");
	// Retorna todos os documentos (posts) da coleção como um array
	return colecao.find().toArray();
  }