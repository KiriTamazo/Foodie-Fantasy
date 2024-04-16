import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useCartStore } from '../stores/cartStore'
const CartScreen = () => {
    const cartItems = useCartStore((state) => state.items)
    return (
        <View>
            <Text>CartScreen {cartItems?.length > 0 ? cartItems?.length : ''}</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

        </View>
    )
}
export default CartScreen
const styles = StyleSheet.create({})