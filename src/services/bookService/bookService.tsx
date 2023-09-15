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
  updateElement: (data: { key: string; sign: string; data: any, id: string }) => {
    const payload = {
      ...data.data
    };
    const url = `books/${data.id}`
    return request({
      url,
      method: "PATCH",
      headers: {
        Key: data.key,
        Sign: md5Generator(
          "PATCH",
          "/"+url,
          JSON.stringify(payload),
          data.sign
        ),
      },
      data: JSON.stringify(payload), 
    });
  },
  handleElement: (data: { key: string; sign: string, id: string, method: string }) => {
    const url = `books/${data.id}`
    return request({
      url,
      method: data.method,
      headers: {
        Key: data.key,
        Sign: md5Generator(data.method, '/'+url, "", data.sign),
      },
    })
  },

};

export default bookService;
