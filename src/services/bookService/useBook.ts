import { useMutation } from "react-query";
import bookService from "./bookService";

interface Props {
  createProps?: any;
}

const useBook = ({ createProps }: Props) => {
  const create = useMutation(bookService.createElement, createProps);

  return { create };
};

export default useBook;
