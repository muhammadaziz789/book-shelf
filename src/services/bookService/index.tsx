import { md5Generator } from "../../utils/md5Generator";
import request from "../../utils/request";
const bookService = {
  getList: (data: {key: string, sign: string}) => request({
    url: "books",
    method: "GET",
    headers: {
      Key: data.key,
      Sign: md5Generator("GET", "/books", "", data.sign),
    },
  })
};

export default bookService;
