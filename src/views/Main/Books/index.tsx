import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import bookService from "../../../services/bookService/bookService";

const Books = () => {
  const { navigateQuery } = usePageRouter();
  const user = useSelector((state: any) => state.auth.user)

  const { data: bookList, refetch, isLoading } = useQuery<any>(
    ["GET_BOOK_LIST", user],
    () => {
      return bookService.getList({ key: user.key, sign: user.secret });
    },
    {
      enabled: !!user.key,
    }
  );
    
  const headColumns = useMemo(() => {
    return [
      {
        title: 'NO',
        id: 'order',
      },
      {
        title: "title",
        id: "title",
      },
      {
        title: 'author',
        id: 'author'
      },
      {
        title: 'published_year',
        id: 'published'
      },
      {
        title: 'pages',
        id: 'pages'
      },
      {
        title: 'ISBN',
        id: 'isbn'
      },
      {
        title: "",
        id: "actions",
        permission: ['edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return bookList?.map((item: any, order: number) => {
      return { ...item.book, order: order + 1 }
    }) ?? []
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
      <CTable isLoading={isLoading} headColumns={headColumns} bodyColumns={bodyColumns} count={bodyColumns.length} disablePagination={true} />

      <Form refetch={refetch} user={user} />
    </>
  );
};

export default Books;
