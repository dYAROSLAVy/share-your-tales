import { View } from "react-native";
import { createStyles } from "./sort-tabs.styles";
import { useThemeObject } from "@shared/themes";
import { useState } from "react";
import { ButtonTab } from "@shared/ui/buttons";

export const SortTabs = () => {
  const styles = useThemeObject(createStyles);

  const TABS = [
    {
      text: "New",
      isLeft: true,
      id: "NEW",
    },
    {
      text: "Top",
      isRight: true,
      id: "TOP",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(TABS[0].id);
  const selectedTabIndex = TABS.findIndex((tab) => tab.id === selectedTab);

  const createTabClickHandler = (id: string) => () => {
    setSelectedTab(id);
  };

  return (
    <View style={styles.root}>
      {TABS.map((tab, index) => {
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
