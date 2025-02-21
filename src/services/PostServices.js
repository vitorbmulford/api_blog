const Services = require("./Services");
const dataSouce = require("../models"); 

class PostServices extends Services {
  constructor() {
    super("Post");
  }

  // Adicionar lógica de deletação específica para Post
  async deleteRecord(id) {
    try {
      // Verifica se existem comentários associados ao post
      const post = await dataSouce.Post.findByPk(id);
      if (!post) {
        throw new Error("Post não encontrado.");
      }

      // Excluir os comentários associados ao post
      await dataSouce.Comment.destroy({
        where: { post_id: id },
      });

      // Agora, podemos chamar o deleteRecord "cru" da classe base para deletar o post
      return super.deleteRecord(id);
    } catch (error) {
      console.error("Erro ao deletar o post:", error.message);
      throw new Error(`Erro ao deletar o post: ${error.message}`);
    }
  }
}

module.exports = PostServices;
