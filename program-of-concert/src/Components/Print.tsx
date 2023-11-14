import { IoMdPrint } from "react-icons/io";

interface Props {
  printPage: () => void;
}

export const Print = ({ printPage }: Props) => {
  return (
    <IoMdPrint
      style={{ cursor: "pointer", fontSize: "25px" }}
      onClick={printPage}
    />
  );
};
