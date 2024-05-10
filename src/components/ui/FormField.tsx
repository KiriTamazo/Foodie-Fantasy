import { Text, TextInput, TextInputProps } from 'react-native'
import { Control, Controller, FieldValues } from 'react-hook-form';
import { _twMerge } from '@/src/ultis/twMerge';
import { View } from '../Themed';
type FormProps = {
    control: Control<any>,
    name: string,
    label?: string,
    labelClassName?: string,
    inputClassName?: string,
    errorClassName?: string,
} & TextInputProps;

const FormInput = ({ control, name, label, labelClassName, inputClassName, errorClassName, ...otherProps }: FormProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View className='my-2 bg-transparent space-y-2'>
                    <Text className={_twMerge('capitalize', labelClassName)}>{label ?? name}</Text>
                    <TextInput
                        className={_twMerge('bg-white p-2.5 rounded', inputClassName)}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        {...otherProps}
                    />
                    {error &&
                        <Text
                            className={_twMerge('text-red-500', errorClassName)}
                        >
                            {error.message}
                        </Text>
                    }
                </View>
            )}
        />
    )
}
export default FormInput;
