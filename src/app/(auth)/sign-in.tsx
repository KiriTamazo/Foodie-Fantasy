import Button from '@/src/components/ui/Button'
import FormInput from '@/src/components/ui/FormField'
import { SignInSchema, SignInType } from '@/src/types/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
const SignIn = () => {
    const { control, handleSubmit } = useForm<SignInType>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(SignInSchema)
    })
    const onSubmit: SubmitHandler<SignInType> = (data) => {
        console.log('ckicj', data)
    }
    return (
        <View className='px-4 flex flex-1 justify-center'>
            <View>
                <FormInput name='email' control={control} />
            </View>
            <View>
                <FormInput name='password' control={control} />
            </View>
            <Button onPress={handleSubmit(onSubmit)} text='Login' />
            <Link className='text-blue-500 text-center' href={'/(auth)/sign-up'}>Dont Have An Account? Sign Up</Link>
            <Link href='/(tabs)/menu/'>Menu</Link>
        </View >
    )
}
export default SignIn