import products from "@/assets/data/products";
import ProductListItem from "@/src/components/pages/ProductListItem";
import { StyleSheet, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      {products?.map((product) => (
        <ProductListItem product={product} key={product?.id} />
      ))}
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
