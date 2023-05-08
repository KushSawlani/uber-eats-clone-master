import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "The Meister Burger",
    description:
      "100% Freshly Minced Lamb Patty, Imported Bacon Caramelized Onion",
    price: "₹450",
    image:
      "https://b.zmtcdn.com/data/dish_photos/1d7/24122a65a9b335198bcfaa906f5bf1d7.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "Classic Salted Fries",
    description: "Skin-on French Fries with Salt & Parsley",
    price: "₹160",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d7b/e161dbbe2c10f1ccf7a22f11a2dc8d7b.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "HM Chicken Nuggets ",
    description: "House-Made Chicken Nuggets with Honey Mustard Mayo",
    price: "₹175",
    image:
      "https://b.zmtcdn.com/data/dish_photos/991/f353fe7c93b37a8c9ca8606dd6c90991.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "Paprika Salted Fries",
    description: "Skin-on French Fries tossed with House-made Paprika Powder",
    price: "₹160",
    image:
      "https://b.zmtcdn.com/data/dish_photos/9ed/88d9a162c266b3675c2524dc9b2729ed.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "Mutton Burger",
    description: "Served with chips [1 packet].",
    price: "₹210",
    image:
      "https://b.zmtcdn.com/data/dish_photos/078/749c72741860cb0559e5b8ccbe5aa078.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "Veg Chilli Burger",
    description: "Served with chips [1 packet].",
    price: "₹105",
    image:
      "https://b.zmtcdn.com/data/dish_photos/9d9/1ea546dce4c12820f3848392861c59d9.jpg?fit=around|130:130&crop=130:130;*,*",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "₹13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
