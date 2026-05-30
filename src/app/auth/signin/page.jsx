"use client";

import Link from "next/link";
import { useState } from "react";
import {
  EyeSlash,
  Eye,
  ArrowLeft,
  Envelope,
  Lock,
} from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import {
  Input,
  Label,
  InputGroup,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });
      console.log(result)
      if (result?.error) {
        setError(result.error.message || "Login failed");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-3 py-10">
      <Card className="w-full max-w-md shadow-xl border border-gray-300/10">
        
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-500 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-300">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to your account.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-500/30 text-red-700 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-5"
        >
          {/* Email */}
          <TextField className="w-full">
            <Label>Email</Label>

            <InputGroup>
              <InputGroup.Suffix>
                <Envelope className="text-default-400 text-lg" />
              </InputGroup.Suffix>

              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </InputGroup>
          </TextField>

          {/* Password */}
          <TextField className="w-full">
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Suffix>
                <Lock className="text-default-400 text-lg" />
              </InputGroup.Suffix>

              <Input
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
              />

              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="focus:outline-none flex items-center justify-center text-default-400 hover:text-default-600 transition"
                >
                  {isVisible ? (
                    <EyeSlash className="text-lg" />
                  ) : (
                    <Eye className="text-lg" />
                  )}
                </button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-purple-800 font-semibold"
            radius="lg"
            isLoading={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          New to Hireloop?{" "}
          <Link
            href="/auth/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default SignInPage;