import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useCartStore } from '../stores/cartStore'
import CartListItem from '../components/global/CartListItem'
import Button from '../components/ui/Button'
import { ScrollView } from 'react-native'
import { Redirect, useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const CartScreen = () => {
    const cartItems = useCartStore((state) => state.items)
    const totalPrice = useCartStore((state) => state.totalPrice())
    const router = useRouter()
    // if (cartItems.length < 1) {
    //     router.replace('/(tabs)/menu')
    // }
    console.log(cartItems.length)
    return (
        <>
            <View className='flex-1 px-4 py-2 '>

                {cartItems.length > 0
                    ? <ScrollView showsVerticalScrollIndicator={false}>
                        {cartItems.map((cartItem) => (
                            <CartListItem cartItem={cartItem} key={cartItem.id} />
                        ))}
                    </ScrollView>
                    : <View className='flex-1 max-h-[90vh] items-center justify-center bg-white rounded p-4'>
                        <MaterialCommunityIcons size={200} name='cart-remove' />
                        <Text className='text-xl'>
                            No Item In The Cart
                        </Text>
                    </View>}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            </View >
            {cartItems?.length > 0 ?
                <View className='bg-white pt-3 px-6'>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-medium'>Total :</Text>
                        <Text className='text-lg font-medium'>${totalPrice}</Text>
                    </View>
                    <Button text='Check Out' />
                </View> :
                null
            }
        </>
    )
}
export default CartScreen
const styles = StyleSheet.create({})