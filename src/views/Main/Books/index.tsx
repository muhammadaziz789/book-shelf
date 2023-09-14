import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import bookService from "../../../services/bookService";
import { useQuery } from "react-query";

const Books = () => {
  const { navigateQuery } = usePageRouter();

  // const {
  //   data: books,
  //   isLoading,
  //   refetch,
  // } = useQuery(
  //   ["GET_BOOK_LIST"],
  //   () => {
  //     return bookService.getList();
  //   }
  // );
  //     console.log('books', books);
      
  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Viloyat",
        id: "region",
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birth_date",
      },
      {
        title: "",
        id: "actions",
        permission: ['edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = [
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
    {
      full_name: "Javohir Zokirov",
      region: "Qashqadaryo",
      phone_number: "+998 99 499 31 30",
      birth_date: "2001-yil, 17-dekabr",
    },
  ];

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
