import Colors from '@/src/constants/Colors'
import { useIsAdmin } from '@/src/stores/authStore'
import { Feather, FontAwesome6 } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'

const AdminMenuLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{
                title: 'Menu',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <Link href="/(tabs)/menu/create" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <Feather
                                    name={"plus"}
                                    size={25}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    color={Colors.light.tint}

                                />
                            )}
                        </Pressable>
                    </Link>
                )
            }}
            />
            <Stack.Screen name='[id]' options={
                {
                    title: 'Menu',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <Link href="/cart" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <Feather
                                        name="edit"
                                        size={25}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                        color={Colors.light.tint}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }
            } />
        </Stack>
    )
}
const UserMenuLayout = () => {
    return (<Stack screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => (
            <Link href="/cart" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <Feather
                            name="shopping-bag"
                            size={25}
                            color={Colors.light.tint}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                    )}
                </Pressable>
            </Link>
        ),

    }} />)
}

const MenuLayout = () => {
    const admin = useIsAdmin()
    console.log(admin)



    return (
        admin ? <AdminMenuLayout /> : <UserMenuLayout />
    )
}
export default MenuLayout
const styles = StyleSheet.create({})