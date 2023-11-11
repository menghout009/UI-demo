import { useState } from "react";
import NavbarLanding from "./components/navbar/NavbarLanding";
import "./App.css";
import SignUp from "./pages/Authentication/SignUp";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/Authentication/SignInPage";
import ForgotPassword from "./pages/Authentication/forgotPasswordPage/ForgotPassword";
import EmailSending from "./pages/Authentication/forgotPasswordPage/EmailSending";
import ResetPasswordForm from "./pages/Authentication/forgotPasswordPage/ResetPasswordForm";
import ListAllProject from "./pages/myProjectPage/ListAllProject";
import Databasepage from "./pages/database/Databasepage";
import Deployment from "./pages/deployment/Deployment";
import Domain from "./pages/domain/Domain";
import HTTPS from "./pages/HTTPS/HTTPS";
import Root from "./Root";
import SupportPage from "./pages/SupportPage";
import DocumentPage from "./pages/DocumentPage";
import SettingPage from "./pages/userProfile/SettingPage";
import UserProflePage from "./pages/userProfile/UserProflePage";
import DashboardPage from "./pages/myProjectPage/DashboardPage";
import AlertPage from "./pages/userProfile/AlertPage";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
// import { ProtectedRoute } from "../../../Downloads/document_engine_ui/src/routes/ProtectedRoute";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/email-sending" element={<EmailSending />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/support" element={<SupportPage />} />


        <Route path="/allproject" element={
          <ProtectedRoute>
            <ListAllProject />
          </ProtectedRoute>

        } />
        <Route path="/allproject/:id/" element={<ProtectedRoute>
          <Root />
        </ProtectedRoute>
        }>
          <Route index path="dashboard" element={<DashboardPage />} />
          <Route path="deployment" element={<Deployment />} />
          <Route path="database" element={<Databasepage />} />
          <Route path="domain" element={<Domain />} />
          <Route path="https" element={<HTTPS />} />
          <Route path="document" element={<DocumentPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="profile" element={<UserProflePage />} />
          <Route path="alert" element={<AlertPage />} />

        </Route>
      </Routes>


    </div>
  );
}

export default App;
