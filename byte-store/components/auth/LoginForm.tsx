"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginDataStep1 = {
  identifier: string; //email or phone
};

type LoginDataStep2 = {
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Step 1
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDataStep1>();

  // Step 2
  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<LoginDataStep2>();

  // Step 1 submit
  const onSubmitStep1 = (data: LoginDataStep1) => {
    setIdentifier(data.identifier);
    setStep(2);
  };

  // Step 2 submit
  const onSubmitStep2 = async (data: LoginDataStep2) => {
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      identifier: identifier,
      password: data.password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
      const timer = setTimeout(() => {
        reset();
        setIdentifier("");
        setError("");
        setStep(1);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (result?.ok) {
      router.push("/");
    }
  };

  return (
    <>
      {/* logo section */}
      <div className="w-full py-6 text-center rounded-t-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-orange-one tracking-wide">
          BYTE<span className="text-white-one">-Store</span>
        </h2>
      </div>
      {/* login box */}
      <div className="mx-auto w-full bg-black-two rounded-lg shadow-lg p-8 border border-black-one text-white-one">
        <div className="text-left mb-6 border-b border-grey-two pb-2">
          <h3 className="text-lg font-medium">Sign in</h3>
        </div>
        {/* Error from NextAuth */}
        {error && (
          <div className="mb-4 p-3">
            <p className="text-red-two text-md">{error}</p>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 ? (
          <form
            onSubmit={handleSubmit(onSubmitStep1)}
            className="flex flex-col gap-6 bg-black-two"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-white-one"
              >
                Email or mobile phone number
              </label>
              <input
                {...register("identifier", {
                  required: "This field is required",
                })}
                type="text"
                placeholder="Email or Mobile phone Number"
                className={`p-3 rounded-md border bg-black-three text-white-one placeholder:text-gray-two focus:outline-none
                  ${
                    errors.identifier
                      ? "border-red-two/70 focus:border-red-two"
                      : "border-grey-two focus:border-orange-one"
                  }`}
              />
              {errors.identifier && (
                <p className="text-red-two text-xs mt-1">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-orange-one text-black py-3 rounded-md font-semibold tracking-wide hover:bg-orange-two transition cursor-pointer"
            >
              Continue
            </button>
            <p className="text-sm text-center text-grey-two">
              Don&apos;t have an account?{" "}
              <span className="text-orange-one hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitStep2(onSubmitStep2)}
            className="flex flex-col gap-6"
          >
            <p className="text-sm">
              Signing in as{" "}
              <span className="text-white-one font-semibold">{identifier}</span>
            </p>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-white-one"
              >
                Password
              </label>
              <input
                {...registerStep2("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className={`p-3 rounded-md border bg-black-three text-white-one placeholder:text-grey-two focus:outline-none ${
                  errorsStep2.password || error
                    ? "border-red-two/70 focus:border-red-two"
                    : "border-grey-two focus:border-orange-one"
                }`}
              />
              {errorsStep2.password && (
                <p className="text-red-two text-xs mt-1">
                  {errorsStep2.password.message}
                </p>
              )}
            </div>
            {/* options */}
            <div className="flex items-center justify-between text-sm text-grey-two">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...registerStep2("rememberMe")}
                  className="accent-orange-one cursor-pointer scale-150"
                />
                Save password
              </label>
              <span className="cursor-pointer">Forgot your password?</span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`py-3 rounded-md font-semibold tracking-wide transition cursor-pointer ${
                isLoading
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-orange-one text-black hover:bg-orange-two"
              }`}
            >
              {isLoading ? "Signing in ..." : "Sign In"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginForm;
