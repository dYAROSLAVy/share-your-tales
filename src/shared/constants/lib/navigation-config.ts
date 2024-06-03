import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const DEFAULT_STACK_OPTIONS = {
  headerShown: false,
  animation: 'slide_from_right',
  orientation: 'portrait_up',
  gestureEnabled: true,
  lazy: true,
} as NativeStackNavigationOptions;
