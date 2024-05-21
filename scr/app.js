import express from "express";
import conectaDataBase from "./config/dbConnect.js";

const app = express();

(async () => {
    try {
        const conexao = await conectaDataBase(); // Chame a função para obter a conexão
        
        // Lidar com os eventos da conexão
        conexao.on("error", (erro) => {
            console.error("Erro de conexão:", erro);
        });

        conexao.once("open", () => {
            console.log("Conexão com o banco de dados estabelecida com sucesso");
        });

        // Definir rotas após a conexão ser estabelecida
        app.get("/", (req, res) => {
            res.status(200).send("PABLO DYEGO");
        });

        // Inicie o servidor Express
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1); // Encerre o processo com falha
    }
})();

export default app;
