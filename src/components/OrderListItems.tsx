import { Link, useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Order } from '../types'
import dayjs from '../ultis/dayjs'
const OrderListItems = ({
    id,
    created_at,
    total,
    user_id,
    status,
    order_items
}: Order) => {
    const router = useRouter()
    const handleNavigate = () => {
        router.navigate(`/(tabs)/orders/${id}`)
    }
    return (
        <Pressable onPress={handleNavigate} className='flex  flex-row justify-between items-center p-4 bg-white rounded shadow-sm my-2'
        >
            <View className='flex gap-2'>
                <Text className='text-lg font-medium'>Order #{id}</Text>
                <Text className='text-gray-600 text-sm'>{dayjs(parseInt(created_at)).fromNow()}</Text>
            </View>
            <View className=''>
                <Text className='font-medium text-lg'>{status}</Text>
            </View>
        </Pressable>
    )
}
export default OrderListItems
const styles = StyleSheet.create({})