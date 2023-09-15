import { useTranslation } from "react-i18next";
import ContextMenu from "../../ContextMenu";
import { useMemo, useState } from "react";
import { ArrowDownFilled } from "../../IconGenerator/Svg";
import { MenuItem } from "@mui/material";

const Languages = () => {
  const [menu, setMenu] = useState(false);
  const { i18n } = useTranslation();

  const langs = useMemo(() => {
    return [
      {
        value: "uz",
        label: `O‘zbek tili`,
      },
      {
        value: "ru",
        label: "Русский",
      },
      {
        value: "en",
        label: "English",
      },
    ];
  }, []);

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
    window.location.reload()
  }

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div
      className={`${
        i18n.language == "uz" ? "w-[120px]" : "w-[100px]"
      } relative`}
      onClick={() => handleMenu()}
    >
      <div className="flex items-center space-x-3 cursor-pointer">
        <span>{langs[i18n.language === "uz" ? 0 : 1]?.label}</span>
        <div className={menu ? "rotate-0" : "rotate-[180deg]"}>
          <ArrowDownFilled />
        </div>
      </div>
      <ContextMenu
        visible={menu}
        position={{ y: 30, x: 0 }}
        closeContextMenu={(e) => {
          e.preventDefault();
          handleMenu();
        }}
        classes="py-0 px-0"
      >
        {langs.map((item: any) => (
          <MenuItem
            key={item.value}
            className="text-baseBlack"
            onClick={() => {
                handleMenu()
                changeLanguage(item.value)
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </ContextMenu>
    </div>
  );
};
export default Languages;
