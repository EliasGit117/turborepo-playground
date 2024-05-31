import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './components/BaseLayout.tsx';
import React from 'react';
import IndexPage from './pages/IndexPage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';

export const router = createBrowserRouter([{
  path: '/',
  element: <BaseLayout/>,
  children: [
    { path: '/', element: <IndexPage/> },
    { path: 'sign-in', element: <SignInPage/> },
    { path: 'sign-up', element: <SignUpPage/> }
  ]
}]);
