import products from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
const sizes = ["s", "m", "l", "xl"];
const ProductDetail = () => {
    const { id } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);
    const [selectedSize, setSelectedSize] = useState("s");

    if (!product) return <Text>Product Not Found</Text>;

    return (
        <View className="bg-white flex-1 p-[10px]">
            <Stack.Screen
                options={{
                    title: product.name,
                }}
            />
            <Image className="w-full aspect-[1]" source={{ uri: product.image }} />
            <Text className="text-lg font-semibold">Select Size</Text>
            <View className="flex-row justify-around gap-4 my-[10px]">
                {sizes.map((size) => (
                    <Pressable
                        onPress={() => setSelectedSize(size)}
                        className={`${selectedSize === size ? 'bg-gray-200' : ''} w-[50px] aspect-[1] items-center justify-center rounded-full`}
                    >
                        <Text
                            className={`${selectedSize !== size ? 'text-gray-600' : ''} text-[20px] capitalize font-medium`}
                            key={size}>
                            {size}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <Text className="text-lg font-bold">${product.price}</Text>
        </View>
    );
};
export default ProductDetail;
