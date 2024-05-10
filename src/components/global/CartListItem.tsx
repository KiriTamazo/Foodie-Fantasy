import { CartItem, ProductsProps } from '@/src/types'
import { Image, Pressable, Text, View } from 'react-native'
import Button from '../ui/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useCartStore } from '@/src/stores/cartStore'

type CartItemProp = {
    cartItem: CartItem
}
const CartListItem = ({ cartItem }: CartItemProp) => {
    const updateQuantity = useCartStore(state => state.updateQuantity)
    return (
        <View className='bg-white flex-row items-center rounded my-1 space-x-3 px-2 py-2'>
            <Image
                width={60}
                height={60}
                source={{ uri: cartItem?.product?.image }}
            />
            <View className='space-y-1 flex-1'>
                <Text className='font-medium'>{cartItem.product.name}</Text>
                <View className='flex-row gap-x-2'>
                    <Text className='text-blue-500'>${cartItem.product.price}</Text>
                    <Text>Size : {cartItem.size}</Text>
                </View>
            </View>
            <View className='flex-row items-center gap-x-2'>
                <MaterialCommunityIcons onPress={() => updateQuantity(cartItem.id, -1)} name='minus' size={18} />
                <Text className='text-lg bg-slate-50 py-1 px-3 rounded'>{cartItem.quantity}</Text>
                <MaterialCommunityIcons onPress={() => updateQuantity(cartItem.id, 1)} name='plus' size={18} />
            </View>
        </View>
    )
}
export default CartListItem
