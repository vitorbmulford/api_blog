const Controller = require("./Controller.js");
const CommentServices = require("../services/CommentServices.js");

const commentServices = new CommentServices();

class CommentController extends Controller {
  constructor() {
    super(commentServices);
  }
}
module.exports = CommentController;
