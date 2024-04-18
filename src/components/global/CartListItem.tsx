import { CartItem, ProductsProps } from '@/src/types'
import { Image, Text, View } from 'react-native'

type CartItemProp = {
    cartItem: CartItem
}
const CartListItem = ({ cartItem }: CartItemProp) => {
    return (
        <View className='bg-white flex-row items-center rounded my-2 space-x-2 p-1'>
            <Image
                width={60}
                height={60}
                source={{ uri: cartItem?.product?.image }}
            />
            <View className='space-y-1'>
                <Text className='font-medium'>{cartItem.product.name}</Text>
                <View className='flex-row gap-x-2'>
                    <Text className='text-blue-500'>${cartItem.product.price}</Text>
                    <Text>Size : {cartItem.size}</Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}
export default CartListItem
