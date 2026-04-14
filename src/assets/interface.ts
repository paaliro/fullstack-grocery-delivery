export type Product = {
  id: string;
  imgPath: string;
  categoryName: string;
  productName: string;
  actualPrice: number;
  oldPrice: number;
};

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export interface FoodItem {
  id: string;
  imgPath: string;
  categoryName: string;
  productName: string;
  actualPrice: number;
  oldPrice: number;
}

export interface CartItem extends FoodItem {
  quantity: number;
}
