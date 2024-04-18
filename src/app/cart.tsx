import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useCartStore } from '../stores/cartStore'
import CartListItem from '../components/global/CartListItem'
const CartScreen = () => {
    const cartItems = useCartStore((state) => state.items)
    return (
        <View className='flex-1 px-4 py-2 '>
            {cartItems.map((cartItem) => (
                <CartListItem cartItem={cartItem} key={cartItem.id} />
            ))}

            {/* <Text>CartScreen {cartItems?.length > 0 ? cartItems?.length : ''}</Text> */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

        </View>
    )
}
export default CartScreen
const styles = StyleSheet.create({})