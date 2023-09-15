import { useState } from "react";
import CSearchInput from "../../CElements/CSearchInput";
import bookService from "../../../services/bookService/bookService";
import { useSelector } from "react-redux";
import useDebounce from "../../../hooks/useDebounce";
import List from "./List"

const Search = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [list, setList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const SearchBook = ({ search = "" }: { search: string }) => {
    bookService
      .handleElement({
        key: user.key,
        sign: user.secret,
        id: search,
        method: "GET",
      })
      .then((res) => {
        setList(res ?? []);
      })
      .catch((err) => {
        if (err) setList([]);
      })
      .finally(() => setLoading(false));
  };

  const handleSearch = useDebounce((search) => {
    setLoading(true);
    SearchBook({ search: search });
  }, 500);

  return (
    <div className="relative">
      <CSearchInput
        onChange={(e: any) => handleSearch(e.target.value)}
        loading={loading}
      />

      {list.length ? <List list={list} /> : ""}
    </div>
  );
};

export default Search;
