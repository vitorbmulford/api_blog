const Controller = require("./Controller.js");
const PostCategoryServices = require("../services/PostCategoryServices.js");

const postCategoryServices = new PostCategoryServices();

class PostCategoryController extends Controller {
  constructor() {
    super(postCategoryServices);
  }
  
}
module.exports = PostCategoryController;
