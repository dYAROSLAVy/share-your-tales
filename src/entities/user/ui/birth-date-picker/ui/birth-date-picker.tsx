import { createStyles } from "./birth-date-picker.styles";
import { useThemeObject } from "@shared/themes";
import DatePicker from "react-native-date-picker";
import { FC, useState } from "react";

type BirthDatePickerProps = {
  datee: any;
  open: boolean;
  setDatee: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BirthDatePicker: FC<BirthDatePickerProps> = ({
  open,
  datee,
  setDatee,
  setOpen,
}) => {
  const styles = useThemeObject(createStyles);

  const [date, setDate] = useState(new Date(datee));

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      mode="date"
      modal
      title={"Pick the date of your birth"}
      onConfirm={(date) => {
        setOpen(false);
        setDate(date);
        setDatee(date.toISOString().substring(0, 10));
      }}
      open={open}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
};
