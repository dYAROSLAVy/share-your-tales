import { View } from "react-native";
import { createStyles } from "./sort-tabs.styles";
import { useThemeObject } from "@shared/themes";
import { FC, useState } from "react";
import { ButtonTab } from "@shared/ui/buttons";

type Tab = {
  text: string;
  isLeft?: boolean;
  isRight?: boolean;
  id: string;
};

type SortTabsProps = {
  tabs: Tab[];
  selectedTabIndex: number;
  createTabClickHandler: (id: string) => () => void;
};

export const SortTabs: FC<SortTabsProps> = ({
  tabs,
  selectedTabIndex,
  createTabClickHandler,
}) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.root}>
      {tabs.map((tab, index) => {
        return (
          <ButtonTab
            text={tab.text}
            isLeft={tab.isLeft}
            isRight={tab.isRight}
            isActive={index == selectedTabIndex}
            key={tab.id}
            onPress={createTabClickHandler(tab.id)}
          />
        );
      })}
    </View>
  );
};
