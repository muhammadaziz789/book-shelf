import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import bookService from "../../../services/bookService";

const Books = () => {
  const { navigateQuery } = usePageRouter();
  const user = useSelector((state: any) => state.auth.user)

  const { data: bookList } = useQuery<any>(
    ["GET_BOOK_LIST", user],
    () => {
      return bookService.getList({ key: user.key, sign: user.secret });
    },
    {
      enabled: !!user.key,
    }
  );
    console.log('bookList 22', bookList);
    
  const headColumns = useMemo(() => {
    return [
      {
        title: "title",
        id: "title",
      },
      {
        title: "cover",
        id: "cover",
      },
      {
        title: 'author',
        id: 'author'
      },
      {
        title: 'published',
        id: 'published'
      },
      {
        title: "",
        id: "actions",
        permission: ['edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return bookList ?? []
  }, [bookList])

  return (
    <>
      <SectionHeader title="books_list">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_book"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable headColumns={headColumns} bodyColumns={bodyColumns} count={10} />

      <Form />
    </>
  );
};

export default Books;
