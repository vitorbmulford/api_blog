const Services = require("./Services.js");

class CategoryServices extends Services {
  constructor() {
    super("Category");
  }
  
  // Substitua o método deleteRecord com a lógica atualizada
  async deleteRecord(id) {
    try {
      // Verificar se a categoria existe
      const category = await dataSouce.Category.findByPk(id);
      if (!category) {
        throw new Error("Categoria não encontrada.");
      }

      console.log(
        `Categoria com ID ${id} encontrada. Excluindo posts associados...`
      );

      // Buscar os posts que pertencem à categoria com o id especificado, incluindo a tabela de junção
      const posts = await dataSouce.Post.findAll({
        include: {
          model: dataSouce.Category,
          where: { id }, // Associando com a categoria
          through: { attributes: [] }, // Garantir que estamos incluindo corretamente a tabela de junção
        },
      });

      // Se não houver posts associados à categoria
      if (posts.length === 0) {
        console.log("Nenhum post encontrado para a categoria.");
      }

      // Para cada post, exclua os comentários associados
      for (const post of posts) {
        console.log(`Excluindo comentários do post com ID ${post.id}`);
        await dataSouce.Comment.destroy({
          where: { post_id: post.id }, // Deleta todos os comentários do post
        });
      }

      // Agora, remova o relacionamento entre a categoria e os posts na tabela de junção
      await dataSouce.PostCategory.destroy({
        where: { category_id: id }, // Remove os posts dessa categoria
      });

      // Agora, tente deletar a categoria
      const result = await dataSouce.Category.destroy({
        where: { id },
      });

      if (result === 0) {
        throw new Error("Categoria não encontrada.");
      }

      console.log(`Categoria com ID ${id} deletada com sucesso.`);
      return { message: `Categoria com ID ${id} deletada com sucesso.` };
    } catch (error) {
      console.error(`Erro ao deletar o registro: ${error.message}`);
      return { error: `Erro ao deletar o registro: ${error.message}` };
    }
  }
}

module.exports = CategoryServices;
