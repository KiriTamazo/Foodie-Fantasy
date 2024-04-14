import products from "@/assets/data/products";
import { Image, StyleSheet, Text, View } from "react-native";

const product = products[1];
export default function TabOneScreen() {
  return (
    <View className="bg-white p-5 rounded">
      <Image source={{ uri: product?.image }} className="w-full aspect-[1]" />
      <Text className="font-semibold text-lg">{product?.name}</Text>
      <Text>{product?.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
