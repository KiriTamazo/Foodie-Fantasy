import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const MenuLayout = () => {
    return (
        <Stack screenOptions={{
            headerTitleAlign: 'center',
            headerRight: () => (
                <Link href="/cart" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <MaterialCommunityIcons
                                name="shopping-outline"
                                className='fill-primary-500'
                                size={25}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            ),

        }}>
            <Stack.Screen name='index' options={{
                title: "Menu"
            }} />

        </Stack>
    )
}
export default MenuLayout
const styles = StyleSheet.create({})