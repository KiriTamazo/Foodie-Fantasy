import products from "@/assets/data/products";
import ProductListItem from "@/src/components/global/ProductListItem";
import { FlatList, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View >
      <FlatList
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        numColumns={2} data={products}
        renderItem={({ item }) => (
          <ProductListItem product={item} key={item?.id} />
        )}
      />
    </View>
  );
}