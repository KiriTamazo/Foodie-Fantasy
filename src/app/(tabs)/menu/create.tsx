import Button from '@/src/components/ui/Button'
import FormInput from '@/src/components/ui/FormField'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Alert, Image, View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductSchema, ProductSchemaType } from '@/src/types/form';
import { defaultPizzaImage } from '@/assets/data/products';
import { Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateRecipe = () => {
    const { id } = useLocalSearchParams();
    const { control, setValue, handleSubmit, reset, watch } = useForm<ProductSchemaType>({
        defaultValues: {
            name: '',
            price: '',
            image: null
        },
        resolver: zodResolver(ProductSchema)
    });

    const isEditProduct = !!id

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setValue('image', result.assets[0].uri);
        }
    };


    const onSubmit: SubmitHandler<ProductSchemaType> = (data) => {
        if (isEditProduct) {
            console.log('update product', data)

        } else {
            console.log('creat product', data)
            reset()
        }

    }
    const confirmDelete = () => {
        Alert.alert('Confirm', 'Are you sure you want to delete?', [
            {
                text: 'Cancle'
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: onDelete,
            }
        ], { cancelable: true })
    }
    const onDelete = () => {
        console.log('delete')
    }
    return (
        <View className='flex-1 justify-center p-2.5 space-y-2'>
            <Stack.Screen
                options={{ title: `${isEditProduct ? "Update" : 'Create'} Product` }}
            />
            <Image source={{ uri: watch('image') || defaultPizzaImage }}
                className='w-[50%] aspect-[1] self-center'
            />
            <Text onPress={pickImage} className='self-center font-bold text-blue-500 my-2.5'>Select Image</Text>
            <FormInput
                name='name'
                control={control}
                placeholder='Name'
            />
            <FormInput
                name='price'
                label='price ($)'
                keyboardType='numeric'
                control={control}
                placeholder='Price'

            />
            <Button onPress={handleSubmit(onSubmit)} text={isEditProduct ? "Update" : 'Create'} />
            {isEditProduct ? <Button onPress={confirmDelete} text='Delete' /> : null}

        </View>
    )
}
export default CreateRecipe
