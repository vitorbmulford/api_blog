Projeto Blog - Sistema de Blog com Categorias e Comentários

Este projeto foi criado exclusivamente para estudos e aprendizado. Trata-se de um sistema de blog que permite a criação de posts (artigos) por usuários, categorização desses posts e interação através de comentários. O modelo de banco de dados é flexível e pode ser expandido para incluir novas funcionalidades, como tags, curtidas, moderação e notificações.
Visão Geral do Sistema

    Cadastro e Login:
    Usuários se registram e efetuam login utilizando seu email e senha. Após autenticados, podem criar posts e interagir por meio de comentários.

    Criação de Posts:
    Autores criam posts fornecendo título e conteúdo. Cada post é vinculado ao autor, possibilitando a identificação do criador.

    Categorização de Posts:
    Os posts podem ser organizados em categorias (como "Tecnologia", "Esportes", etc.), facilitando a navegação e a busca de conteúdo. Um post pode pertencer a mais de uma categoria.

    Interação via Comentários:
    Leitores podem comentar os posts, promovendo a interação e discussão. Cada comentário está associado a um post e a um usuário.

    Navegação e Exploração:
    Usuários podem buscar posts por categoria, visualizar todos os posts de um autor e acompanhar os comentários de cada post.

Visão Geral do Banco de Dados

O modelo de banco de dados foi projetado para suportar as funcionalidades principais do sistema de blog. A seguir, estão as principais entidades e como elas se relacionam:
1. pessoas (Usuários do Sistema)

    Objetivo:
    Armazenar informações sobre os usuários que podem ser autores de posts ou comentaristas.
    Campos:
        id: Identificador único do usuário.
        nome: Nome do usuário.
        email: Email para login e comunicação.
        password: Senha para autenticação.
    Utilidade:
    Define quem cria conteúdo e interage no sistema, garantindo segurança e personalização.

2. posts (Artigos ou Posts do Blog)

    Objetivo:
    Armazenar os posts criados pelos usuários.
    Campos:
        id: Identificador único do post.
        user_id: Relacionamento com a tabela pessoas para identificar o autor.
        title: Título do post.
        content: Conteúdo do post (texto longo ou HTML).
    Utilidade:
    Mantém os artigos do blog, possibilitando a criação e publicação de conteúdos pelos usuários.

3. comentarios (Comentários nos Posts)

    Objetivo:
    Armazenar os comentários feitos pelos usuários em cada post.
    Campos:
        id: Identificador único do comentário.
        user_id: Relacionamento com a tabela pessoas para identificar quem comentou.
        post_id: Relacionamento com a tabela posts para vincular o comentário ao respectivo post.
        content: Texto do comentário.
    Utilidade:
    Permite a interação direta dos leitores com os posts, estimulando discussões e feedback.

4. categorias (Categorias para os Posts)

    Objetivo:
    Organizar os posts em categorias para facilitar a navegação.
    Campos:
        id: Identificador único da categoria.
        name: Nome da categoria (por exemplo: "Tecnologia", "Esportes").
    Utilidade:
    Facilita a classificação dos posts e a busca por temas específicos.

5. post_categorias (Relacionamento entre Posts e Categorias)

    Objetivo:
    Relacionar posts a uma ou mais categorias, implementando uma associação muitos-para-muitos.
    Campos:
        post_id: Relacionamento com a tabela posts.
        categoria_id: Relacionamento com a tabela categorias.
    Utilidade:
    Permite que um post seja categorizado em diversas categorias sem duplicação de dados.

Instalação
Pré-Requisitos

    Node.js (versão recomendada: >= 14.x)
    npm
    Banco de dados relacional (MySQL, PostgreSQL, etc.) configurado conforme o arquivo config/config.json

Passos de Instalação

    Clone o repositório:

git clone https://github.com/your-username/your-project.git

Instale as dependências:

cd your-project
npm install

Configure a conexão com o banco de dados:

    Edite o arquivo config/config.json com as credenciais do seu banco de dados.

Execute as migrações do banco de dados:

    npx sequelize-cli db:migrate

Uso

Após a instalação e configuração, inicie o servidor para utilizar a API:

    Inicie o servidor:

    npm start

    Acesse a aplicação:
        A API ficará disponível em: http://localhost:3000

Endpoints da API

A API oferece os seguintes endpoints para interagir com o sistema:
Pessoas

    GET /pessoas
    Retorna todos os usuários.
    POST /pessoas
    Cria um novo usuário.
    PUT /pessoas/:id
    Atualiza os dados de um usuário existente.
    DELETE /pessoas/:id
    Remove um usuário.

Posts

    GET /posts
    Retorna todos os posts.
    POST /posts
    Cria um novo post (necessário estar autenticado).
    PUT /posts/:id
    Atualiza um post existente.
    DELETE /posts/:id
    Remove um post.
    GET /pessoas/:userId/posts
    Retorna todos os posts de um usuário específico.

Comentários

    GET /posts/:postId/comentarios
    Lista todos os comentários de um post.
    POST /posts/:postId/comentarios
    Adiciona um comentário a um post.
    PUT /comentarios/:id
    Atualiza um comentário.
    DELETE /comentarios/:id
    Remove um comentário.

Categorias

    GET /categorias
    Retorna todas as categorias.
    POST /categorias
    Cria uma nova categoria.
    PUT /categorias/:id
    Atualiza uma categoria.
    DELETE /categorias/:id
    Remove uma categoria.

    Nota: A associação entre posts e categorias é gerenciada através da tabela post_categorias, que pode ser manipulada via endpoints específicos ou de forma automática ao criar/atualizar um post.

Testes

Para garantir que todas as funcionalidades estão operando corretamente, testes automatizados foram implementados para:

    Métodos dos controllers
    Lógica dos serviços
    Modelos do banco de dados

Executar os testes:

npm test

Contribuição

Contribuições são sempre bem-vindas! Siga estes passos para colaborar:

    Fork do repositório
    Crie uma branch para sua feature:

git checkout -b feature/nome-da-sua-feature

Realize suas alterações e faça commit:

git commit -am 'Adiciona nova feature'

Envie sua branch para o repositório remoto:

    git push origin feature/nome-da-sua-feature

    Abra um Pull Request para revisão.

Licença

Este projeto está licenciado sob a MIT License.
Considerações Finais

Este repositório foi desenvolvido para servir como uma base de estudo sobre a criação de sistemas de blog utilizando Node.js, Express e Sequelize. O modelo de banco de dados, com suas entidades e relacionamentos, é simples, mas poderoso, e pode ser facilmente adaptado e expandido para atender a novos requisitos e funcionalidades.

Sinta-se à vontade para explorar, modificar e contribuir com este projeto. Boas práticas de desenvolvimento e a constante busca por melhorias são essenciais para o aprendizado contínuo.

Happy coding!
