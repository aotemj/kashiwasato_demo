import React, { createContext, useState } from "react"

export const SearchKeyWordContext = createContext({
  keyword: "",
  handleChangeKeyWord: (e: any) => {},
})

type SearchKeyWordContextTypes = {
  children: React.ReactNode
}
export const SearchKeyWordProvider: React.FC<SearchKeyWordContextTypes> = ({ children }) => {
  const [keyword, setKeyword] = useState("")
  const handleChangeKeyWord = (e: any) => {
    setKeyword(e.target.value)
  }

  return (
    <SearchKeyWordContext.Provider
      value={{
        keyword,
        handleChangeKeyWord,
      }}
    >
      {children}
    </SearchKeyWordContext.Provider>
  )
}
