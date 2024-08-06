import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home/index" 
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            headerLeft: () => <DrawerToggleButton />,
          }}          
        />
        <Drawer.Screen
          name="settings" 
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
        <Drawer.Screen
          name="notifications/index" 
          options={{
            drawerLabel: 'Notifications',
            title: 'Notifications',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
