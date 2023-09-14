import request from "../../utils/request";
const bookService = {
  getList: () => request.get("/books")
};

export default bookService;
