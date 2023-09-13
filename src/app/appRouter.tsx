import { Route, Routes } from "react-router-dom"
import { BookPage } from "../pages/BookPage"
import { MainPage } from "../pages/MainPage"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<BookPage />} />
    </Routes>
  )
}

export default AppRouter
