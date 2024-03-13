'use client';

import "./globals.css";
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './store/ConfigureStore';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
