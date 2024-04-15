import { Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
const ProductDetail = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Stack.Screen options={{
                title: "Product Detail" + " " + id
            }} />
            <Text>Product Detail {id}</Text>
        </View>
    )
}
export default ProductDetail
const styles = StyleSheet.create({})