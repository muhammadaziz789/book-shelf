import { t } from "i18next";
import cls from "./style.module.scss";
import getSubstring from "../../../utils/getSubstring";
import { useMemo } from "react";
const List = ({ list = [] }: { list?: object[] }) => {
  const newList = useMemo(() => {
    return list;
  }, [list]);

  return (
    <div className={cls.list}>
      <div className={cls.wrapper}>
        {newList?.map((element: any) => (
          <div key={element.title} className={cls.item}>
            <div className="flex items-center space-x-3">
              <div className="w-[80px]">
                <div className={cls.image}>
                  <img src={element?.cover} alt={element?.cover || "image"} />
                </div>
              </div>
              <div className={cls.content}>
                <h3 className={cls.title}>{element.author}</h3>
                <p className={cls.info}>
                  {t("title")}:{" "}
                  <span>{getSubstring(element.title, 70, true)}</span>
                </p>
                <p className={cls.info}>
                  ISBN: <span>{element.isbn}</span>
                </p>
                <p className={cls.info}>
                  {t("published_year")}: <span>{element.published}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
