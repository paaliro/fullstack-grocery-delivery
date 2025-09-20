export type Product = {
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
