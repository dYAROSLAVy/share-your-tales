import { useThemeObject } from "@shared/themes";
import { ButtonPrimary } from "@shared/ui/buttons";
import { FC, PropsWithChildren, useState } from "react";
import { Modal, SafeAreaView, View } from "react-native";
import { createStyles } from "./base-modal.styles";

export type BaseModalProps = {
  modalVisible: boolean;
} & PropsWithChildren;

export const BaseModal: FC<BaseModalProps> = ({ children, modalVisible }) => {
  const styles = useThemeObject(createStyles);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.root}>
        <View style={styles.inner}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
};
