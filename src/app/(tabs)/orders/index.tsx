import orders from '@/assets/data/orders'
import OrderListItems from '@/src/components/OrderListItems'
import { Stack } from 'expo-router'
import { FlatList, View } from 'react-native'
const Orders = () => {
    return (
        <View className='p-4'>
            <Stack.Screen options={{
                headerTitle: "Orders"
            }} />
            <FlatList data={orders}
                renderItem={({ item }) => <OrderListItems key={item.id} {...item}
                />}
            />

        </View>
    )
}
export default Orders