import AuthProvider from "./auth/contex/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
