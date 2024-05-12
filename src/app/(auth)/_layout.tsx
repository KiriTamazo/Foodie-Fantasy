import { Link, Stack } from 'expo-router'
import { TabBarIcon } from '../(tabs)/_layout'
import { Text } from 'react-native'
const AuthLayout = () => {
    return (
        <Stack >
            <Stack.Screen name='sign-in' options={{
                headerTitleAlign: 'center',
                title: 'Sign In',
            }}
            />
            <Stack.Screen name='sign-up' options={{
                headerTitleAlign: 'center',
                title: 'Sign Up',
                headerLeft: () => <Link className='' href='/sign-in'>
                    <TabBarIcon name='arrow-left' color='#000' />
                    <Text className='text-lg  text-blue-500 font-medium'>
                        Sign In
                    </Text>
                </Link>

            }}
            />
        </Stack>
    )
}
export default AuthLayout
