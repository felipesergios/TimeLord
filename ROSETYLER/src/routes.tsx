import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./components/ListContracts";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/Main";
import UserProfileEdit from "./components/Profile";
import { isAuthenticated } from "./services/auth";
import AditivesForm from "./components/AdditiveForm";
import RegisterForm from "./components/RegisterForm";
import ErroComponent from './components/ErrorComponent';
import FollowComponent from './components/FollowComponent';

const ProtectedRoute = ({ children }:any) => {
    const authenticated = isAuthenticated()
    if (!authenticated) {
      return <Navigate to="/landing" replace />;
    }
    return children;
  };

const NoMatch = () => <h1>NOT MATCHING</h1>

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Home" element={<ProtectedRoute>
            <Success/>
          </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute>
            <UserProfileEdit/>
          </ProtectedRoute>} />
          <Route path="/Aditivos" element={<ProtectedRoute>
            <AditivesForm/>
          </ProtectedRoute>} />
          <Route path="/Processos" element={<ProtectedRoute>
            <RegisterForm/>
          </ProtectedRoute>} />
          <Route path="/acompanhamento" element={<ProtectedRoute>
            <FollowComponent/>
          </ProtectedRoute>} />
          <Route path="*" element={<ErroComponent />} />
        </Route>
      </Routes>
    </Router>
  )
}


//   <Route path="/postagem/:slug" element={<SinglePost />} />
