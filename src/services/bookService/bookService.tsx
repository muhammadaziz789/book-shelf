import { md5Generator } from "../../utils/md5Generator";
import request from "../../utils/request";
const bookService = {
  getList: (data: { key: string; sign: string }) =>
    request({
      url: "books",
      method: "GET",
      headers: {
        Key: data.key,
        Sign: md5Generator("GET", "/books", "", data.sign),
      },
    }),
  createElement: (data: { key: string; sign: string; data: any }) => {
    const payload = {
      ...data.data
    };
    return request({
      url: "books",
      method: "POST",
      headers: {
        Key: data.key,
        Sign: md5Generator(
          "POST",
          "/books",
          JSON.stringify(payload),
          data.sign
        ),
      },
      data: JSON.stringify(payload), 
    });
  },
};

export default bookService;
