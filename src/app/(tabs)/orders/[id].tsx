import { Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
const OrderDetail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View className='p-4'>
            <Stack.Screen options={{
                headerTitle: "Orders #" + id
            }} />
            <Text>OrderDetail</Text>
        </View>
    )
}
export default OrderDetail
const styles = StyleSheet.create({})