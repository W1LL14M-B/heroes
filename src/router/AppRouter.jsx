import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heores";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>


      <Routes>

        <Route path="login" element={

          <PublicRoute >
    
      <LoginPage /> 
          </PublicRoute>

        } />

        {/*         <Route path="login" element={<LoginPage />} /> */}

        <Route path="/*" element={

          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>} />

        {/*      <Route path="/*" element={<HeroesRoutes />} /> */}


      </Routes>


    </>
  );
};
