import { StyleSheet, View } from 'react-native'
import FormInput from '@/src/components/ui/FormField'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInType, SignUpSchema, SignUpType } from '@/src/types/form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/src/components/ui/Button'

const SignUp = () => {
    const { control, handleSubmit } = useForm<SignInType & SignUpType>({
        defaultValues: {
            email: '',
            password: '',
            confirm_password: ''
        },
        resolver: zodResolver(SignUpSchema)
    })
    const onSubmit: SubmitHandler<SignInType & SignUpType> = (data) => {
        console.log('ckick', data)
    }
    return (
        <View className='px-4 flex flex-1 justify-center'>
            <View>
                <FormInput name='email' control={control} />
            </View>
            <View>
                <FormInput name='password' control={control} />
            </View>
            <View>
                <FormInput name='confirm_password' control={control} />
            </View>
            <Button onPress={handleSubmit(onSubmit)} text='Sign Up' />
        </View >
    )
}
export default SignUp
const styles = StyleSheet.create({})