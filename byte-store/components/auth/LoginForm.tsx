"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginDataStep1 = {
  identifier: string; //email or phone
};

type LoginDataStep2 = {
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const [step, setStep] = useState<1 | 2>(2);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataStep1>();

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<LoginDataStep2>();

  const onSubmitStep1 = (data: LoginDataStep1) => {
    console.log("Step 1 data", data);
    setStep(2);
  };

  const onSubmitStep2 = (data: LoginDataStep2) => {
    console.log("Step 2 data", data);
  };

  return (
    <>
      {/* logo section */}
      <div className="w-full py-6 text-center rounded-t-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-[var(--color-orange-one)] tracking-wide">
          BYTE<span className="text-[var(--color-white-one)]">-Store</span>
        </h2>
      </div>
      {/* login box */}
      <div className="mx-auto w-full bg-[var(--color-black-two)] rounded-lg shadow-lg p-8 border border-[var(--color-black-one)] text-[var(--color-white-one)]">
        <div className="text-left mb-6 border-b border-[var(--color-grey-two)] pb-2">
          <h3 className="text-lg font-medium">Sign in</h3>
        </div>
        {step === 1 ? (
          <form
            onSubmit={handleSubmit(onSubmitStep1)}
            className="flex flex-col gap-6 bg-[var(--color-black-two)]"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-[var(--color-white-one)]"
              >
                Email or mobile phone number
              </label>
              <input
                {...register("identifier", {
                  required: "This field is required",
                })}
                type="text"
                placeholder="Email or Mobile phone Number"
                className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                  errors.identifier
                    ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                    : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
                }`}
              />
              {errors.identifier && (
                <p className="text-[var(--color-red-two)] text-xs mt-1">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[var(--color-orange-one)] text-black py-3 rounded-md font-semibold tracking-wide hover:bg-[var(--color-orange-two)] transition cursor-pointer"
            >
              Continue
            </button>
            <p className="text-sm text-center text-[var(--color-grey-two)]">
              Don't have an account?{" "}
              <span className="text-[var(--color-orange-one)] hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitStep2(onSubmitStep2)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[var(--color-white-one)]"
              >
                Password
              </label>
              <input
                {...registerStep2("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                  errorsStep2.password
                    ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                    : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
                }`}
              />
              {errorsStep2.password && (
                <p className="text-[var(--color-red-two)] text-xs mt-1">
                  {errorsStep2.password.message}
                </p>
              )}
            </div>
            {/* options */}
            <div className="flex items-center justify-between text-sm text-[var(--color-grey-two)]">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...registerStep2("rememberMe")}
                  className="accent-[var(--color-orange-one)] cursor-pointer scale-150"
                />
                Save password
              </label>
              <span className="cursor-pointer">Forgot your password?</span>
            </div>

            <button
              type="submit"
              className="bg-[var(--color-orange-one)] text-black py-3 rounded-md font-semibold tracking-wide hover:bg-[var(--color-orange-two)] transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginForm;
