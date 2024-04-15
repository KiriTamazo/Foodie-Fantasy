import { defaultPizzaImage } from "@/assets/data/products";
import { ProductsProps } from "@/src/types";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
type ProductListItemProp = {
  product: ProductsProps;
}
const ProductListItem = ({ product }: ProductListItemProp) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className="bg-white flex-1 max-w-[50%] p-2 rounded">
        <Image resizeMode="contain"
          source={{ uri: product?.image || defaultPizzaImage }} className="w-full aspect-[1] mb-2"
        />
        <Text className="font-semibold text-lg">
          {product?.name}
        </Text>
        <Text>${product?.price}</Text>

      </Pressable >
    </Link>
  );
};
export default ProductListItem;
const styles = StyleSheet.create({});
