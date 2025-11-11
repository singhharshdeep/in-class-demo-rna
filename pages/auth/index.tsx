import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

const validEmail = "user@email.com";
const validPassword = "password";

const AuthPage = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    email: null,
    password: null,
  });

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (errors.email || errors.password) {
      alert("Invalid Email/Password");
    }
    login(email, password);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target?.value;
    if (!newValue.includes("@")) {
      setErrors({
        ...errors,
        email: "Invalid Email",
      });
    } else {
      setErrors({
        ...errors,
        email: null,
      });
    }

    setEmail(newValue);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target?.value;
    if (newValue.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be atleast 6 characters",
      });
    } else {
      setErrors({
        ...errors,
        password: null,
      });
    }

    setPassword(newValue);
  }

  return (
    <div className="flex justify-center mt-6">
      <form className="border p-12 rounded-3xl" onSubmit={handleLogin}>
        <div>
          <div>
            <label className="text-2xl">Email</label>
          </div>
          <input
            value={email}
            onChange={handleEmailChange}
            className="border-gray-700 my-2 p-2 w-[300px] border"
            type="email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <div className="text-2xl">
            <label>Password</label>
          </div>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="border-gray-700 my-2 p-2 w-[300px] border"
            type="password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button className="mt-4 border border-gray-700 p-4 rounded-2xl hover:bg-gray-700" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthPage;
