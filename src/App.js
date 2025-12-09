// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

// User Auth
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import AuthSuccess from './pages/AuthSuccess';
import VerifySuccess from './pages/VerifySuccess';
import VerifyError from './pages/VerifyError';
import EmailVerification from './pages/EmailVerificationPending';
import CheckEmail from './pages/CheckEmail';

// AdOwner
import SelectPlatforms from './pages/SelectPlatforms'
import UserInfoForm from './pages/UserInfoForm'
import CampaignReview from './pages/CampaignReview'
import Dashboard from './pages/Dashboard';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* User Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/success" element={<AuthSuccess />} />
              <Route path="/verify-success" element={<VerifySuccess />} />
              <Route path="/verify-error" element={<VerifyError />} />
              <Route path="/email-verification" element={<EmailVerification />} />
              <Route path="/check-email" element={<CheckEmail />} />

              {/* AdOwner */}
              <Route path="/select-platforms" element={<SelectPlatforms />} />
              <Route path="/user-info" element={<UserInfoForm />} />

              <Route path="/review" element={
                <ProtectedRoute>
                  <CampaignReview />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
      
      
      {/* Add React Query DevTools for development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;