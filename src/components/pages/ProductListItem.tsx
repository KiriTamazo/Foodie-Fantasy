import { ProductsProps } from "@/src/types";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductListItem = ({ product }: { product: ProductsProps }) => {
  return (
    <View className="bg-white p-5 rounded">
      <Image source={{ uri: product?.image }} className="w-full aspect-[1]" />
      <Text className="font-semibold text-lg">{product?.name}</Text>
      <Text>{product?.price}</Text>
    </View>
  );
};
export default ProductListItem;
const styles = StyleSheet.create({});
