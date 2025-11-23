"use client";

import AuthContainer from "@/components/ui/AuthContainer";
import RegisterForm from "@/components/auth/RegisterForm";
import RegisterSuccess from "@/app/(auth)/register/RegisterSuccess";
import { useState } from "react";

const RegisterPage = () => {
  const [succes, setSuccess] = useState(false);

  return (
    <AuthContainer>
      {!succes ? (
        <RegisterForm onSuccess={() => setSuccess(true)} />
      ) : (
        <RegisterSuccess />
      )}
    </AuthContainer>
  );
};

export default RegisterPage;
