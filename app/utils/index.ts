import dayjs from "dayjs";

export const capitalize = (str: string) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

export const deleteProtocol = (str: string) => {
  return str?.replace("https://www.", "");
};

export const transformDate = (date: string) => {
  return dayjs(date).format("DD/MMMM/YYYY");
};
