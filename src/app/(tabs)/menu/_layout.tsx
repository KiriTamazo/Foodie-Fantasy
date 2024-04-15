import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
const MenuLayout = () => {
    return (
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name='index' options={{
                title: "Menu"
            }} />
          
        </Stack>
    )
}
export default MenuLayout
const styles = StyleSheet.create({})