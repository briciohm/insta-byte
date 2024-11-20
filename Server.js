import express from "express";


const posts = [ 
        {
          id: 1, descricao: "Uma foto teste",
          imagem: "https://placecats.com/millie/300/150"
        },
        {
          id: 2, descricao: "Gato fofo dormindo",
          imagem: "https://placecats.com/millie/300/150"
        },
        {
          id:3, descricao: "Gatinho brincando com um novelo de lã",
          imagem: "https://placecats.com/millie/300/150"
        },
        {
          id:4, descricao: "Paisagem com um gato",
          imagem: "https://placecats.com/millie/300/150"
        },
        {
          id:5, descricao: "Gato preto misterioso",
          imagem: "https://placecats.com/millie/300/150"
        },
        {
          id:6, descricao: "Gato olhando pela janela",
          imagem: "https://placecats.com/millie/300/150"
        }
      ];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
function buscarPostsPorid(id) {
   return posts.findIndex((post) => {
    return post.id === Number(id)
   }) 
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorid(req.params.id)
    res.status(200).json(posts[index]);
});