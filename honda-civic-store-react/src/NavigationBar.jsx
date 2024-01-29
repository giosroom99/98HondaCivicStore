import NavigationItem from "./NavigationItem";
export const navigation = [
  { title: "Product", link: "product" },
  { title: "Accessories", link: "accessories" },
  { title: "Gallery", link: "gallery" },
  { title: "Cart", link: "cart" },
];

function NavigationBar() {
  return (
    <nav>
      <ul>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
