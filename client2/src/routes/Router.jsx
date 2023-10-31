import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SandBox from "../sandBox/SandBox";
import Password from "../sandBox/stateHook/Password";
import LoginPage from "../users/pages/LoginPage";
import SignUpPage from "../users/pages/SignUpPage";
import ROUTES from "./routesModel";
import Counter from "../sandBox/stateHook/Counter";
import MyDetails from "../sandBox/stateHook/MyDetails";

import Todo from "../sandBox/stateHook/Todo";
import FirstEffect from "../sandBox/effectHook/FirstEffect";
import Countries from "../sandBox/effectHook/Countries";
import RenderComponent from "../sandBox/render/RenderComponent";
import MyForm from "../sandBox/forms/MyForm";

import Nir from "../sandBox/stateHook/Nir";
import Testing from "../sandBox/stateHook/Testing";
import TestForm from "../sandBox/TestForm";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import EditCardPage from "../cards/pages/EditCardPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditUserPage from "../users/pages/EditUserPage";
import UserPage from "../users/pages/UserPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Password />} />
        <Route path="todo" element={<Todo />} />
        <Route path="firstEffect" element={<FirstEffect />} />
        <Route path="countries" element={<Countries />} />
        <Route path="render" element={<RenderComponent />} />
        <Route path="test" element={<Testing />} />

        <Route path="nir" element={<Nir />} />
      </Route>
      <Route path="test" element={<MyForm />} />
      <Route path="form" element={<TestForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
