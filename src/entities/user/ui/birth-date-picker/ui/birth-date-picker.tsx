import { createStyles } from "./birth-date-picker.styles";
import { useThemeObject } from "@shared/themes";
import DatePicker from "react-native-date-picker";
import { FC, useState } from "react";

type BirthDatePickerProps = {
  initialDate: string;
  open: boolean;
  setNewDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BirthDatePicker: FC<BirthDatePickerProps> = ({
  open,
  initialDate,
  setNewDate,
  setOpen,
}) => {
  const styles = useThemeObject(createStyles);

  const [date, setDate] = useState(new Date(initialDate));

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
        setNewDate(date.toISOString().substring(0, 10));
      }}
      open={open}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
};
