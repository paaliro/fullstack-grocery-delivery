import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { SearchContextType } from "../assets/interface";

export const SearchContext = createContext<SearchContextType>({
    searchTerm: "",
    setSearchTerm: () => { },
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
