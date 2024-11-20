import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppRoute } from '../../utils/consts'
import { MainPage } from '../../pages/MainPage/MainPage'
import { MenuPage } from '../../pages/MenuPage/MenuPage'

export const RoutesContent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<MainPage />} />
        <Route path={AppRoute.MENU} element={<MenuPage />} />
      </Routes>
    </HashRouter>
  )
}
