import { Routes, Route } from "react-router-dom";

import {
  Home,
} from "@/_root/pages";

import "./globals.css";
import SignInForm from "@/_auth/forms/SignIn";
import RootLayout from "@/_root/RootLayout"
import AuthLayout from "@/_auth/AuthLayout"
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  return (
    <main>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
          
          </Route>
          
          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          
          </Route>
        </Routes>
      </ThemeProvider>
    </main>
  );
};

export default App;