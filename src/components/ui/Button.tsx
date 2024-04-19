import { forwardRef } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
type ButtonProps = {
    text: string
} & React.ComponentPropsWithoutRef<typeof Pressable>
const Button = forwardRef<View | null, ButtonProps>(({ text, ...pressableProps }, ref) => {
    return (
        <Pressable
            className='bg-blue-500 p-[15px] items-center rounded my-[10px]'
            ref={ref}
            {...pressableProps}
        >
            <Text className='text-base font-semibold text-white uppercase'>{text}</Text>
        </Pressable>
    )
})
export default Button
const styles = StyleSheet.create({})