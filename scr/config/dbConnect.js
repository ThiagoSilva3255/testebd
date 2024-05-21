import mongoose from "mongoose";

async function conectaDataBase() {
    try {
        await mongoose.connect("mongodb+srv://eletrobd:eletro123@cluster0.xacux4o.mongodb.net/eletrobd?retryWrites=true&w=majority&appName=Cluster0"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        console.log("Conexão com o banco de dados estabelecida com sucesso");

        return mongoose.connection; // Retorna o objeto de conexão
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

export default conectaDataBase;
