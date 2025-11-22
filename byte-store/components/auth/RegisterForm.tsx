"use client";

import { useForm } from "react-hook-form";

type RegisterFormData = {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  country: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form data", data);
  };

  return (
    <>
      <div className="w-full py-6 text-center rounded-t-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-[var(--color-orange-one)] tracking-wide">
          BYTE<span className="text-[var(--color-white-one)]">-Store</span>
        </h2>
      </div>

      <div className="mx-auto w-full max-w-md text-center px-8 py-10 bg-[var(--color-black-three)] rounded-lg shadow-lg p-6 border border-[var(--color-black-three)]">
        {/* Header */}
        <div className="text-left mb-8 border-b border-[var(--color-grey-two)] pb-2">
          <div className="text-xl mb-2 font-medium text-[var(--color-white-one)] ">
            Create Account
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 text-left text-[var(--color-white-one)]"
        >
          {/* email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium ">
              Email
            </label>
            <input
              {...(register("email"),
              {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder=" Your Email"
              className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                errors.email
                  ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                  : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
              }`}
            />
            {errors.email && (
              <p className="text-[var(--color-red-two)] text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* mobile number */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">
              Mobile Number
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+\d{1,3}\s?\d{9,10}$/,
                  message: "Please enter your phone number",
                },
              })}
              type="text"
              placeholder=" +(Code country) 10 digit mobile number"
              className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                errors.email
                  ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                  : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
              }`}
            />
            {errors.phone && (
              <p className="text-[var(--color-red-two)] text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message:
                    "Create a password which has at least 8 characters and includes at least 1 uppercase letter, 1 lowercase letter and 1 number",
                },
                validate: (value) =>
                  (/[A-Z]/.test(value) &&
                    /[a-z]/.test(value) &&
                    /\d/.test(value)) ||
                  "Must contain uppercase, lowercase and a number",
              })}
              type="text"
              placeholder="Password"
              className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                errors.password
                  ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                  : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
              }`}
            />
            {errors.password && (
              <p className="text-[var(--color-red-two)] text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* confirm password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Password do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] placeholder:text-[var(--color-gray-three)] focus:outline-none ${
                errors.confirmPassword
                  ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                  : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-[var(--color-red-two)] text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* country */}
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="text-sm font-medium">
              Country or region
            </label>
            <select
              {...register("country", {
                required: "Please select your country.",
              })}
              className={`p-3 rounded-md border bg-[var(--color-black-three)] text-[var(--color-white-one)] focus:outline-none ${
                errors.country
                  ? "border-[var(--color-red-two)] focus:border-[var(--color-red-two)]"
                  : "border-[var(--color-grey-two)] focus:border-[var(--color-orange-one)]"
              }`}
            >
              <option value="">Select your country</option>
              <option value="PL">Polska</option>
              <option value="CZ">Czechy</option>
              <option value="EN">Wielka brytania</option>
            </select>
            {errors.country && (
              <p className="text-[var(--color-red-two)] text-xs mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* terms */}
          <div className="flex justify-center align-middle gap-3 text-sm mt-4 text-[var(--color-grey-two)]">
            <input
              type="checkbox"
              className="accent-[var(--color-orange-one)] cursor-pointer scale-150 "
            />
            <p>
              By creating an account and check, you agree to the{" "}
              <span className="text-[var(--color-orange-one)]">
                Condition of Use
              </span>{" "}
              and{" "}
              <span className="text-[var(--color-orange-one)]">
                Privacy Notice
              </span>{" "}
              .
            </p>
          </div>

          {/* button */}
          <button
            type="submit"
            className="mt-6 bg-[var(--color-orange-one)] text-block py-3 rounded-md font-semibold tracking-wide hover:bg-[var(--color-orange-two)] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};
export default RegisterForm;

{
  /* <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.3333 27L31.1666 56.1667L18.6664 43.6667M77 39.5C77 60.2107 60.2107 77 39.5 77C18.7893 77 2 60.2107 2 39.5C2 18.7893 18.7893 2 39.5 2C60.2107 2 77 18.7893 77 39.5Z"
          stroke="#86EFAD"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg> */
}
