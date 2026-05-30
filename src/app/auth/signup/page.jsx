"use client";

import Link from "next/link";
import { useState } from "react";
import { EyeSlash, Eye, ArrowLeft, Person, Envelope, Lock } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { Input, Label, InputGroup, TextField } from "@heroui/react";
import { Card } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (result?.error) {
        setError(result.error.message || "Signup failed");
      } else {
        setSuccess("Account created successfully!");

        form.reset();

        // Redirect after signup
         router.push("/auth/signin");
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
            href="/auth/signin"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-500 transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-300">
              Create An Account
            </h1>

            <p className="text-gray-500 mt-2">
              Sign up to continue using the platform.
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-4 rounded-lg bg-green-500/30 text-green-700 px-4 py-3 text-sm">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/30 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col space-y-5">
            {/* Name */}
            <TextField className="w-full">
              <Label>Name</Label>
              <InputGroup>
                <InputGroup.Suffix>
                  <Person className="text-default-400 text-lg" />
                </InputGroup.Suffix>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                 required
                />
              </InputGroup>
            </TextField>
            
                
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
                    className="focus:outline-none flex items-center justify-center text-default-400 hover:text-default-600 transition" 
                    type="button" 
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeSlash className="text-lg" /> : <Eye className="text-lg" />}
                  </button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full font-semibold bg-purple-800"
              
              radius="lg"
              isLoading={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-primary font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        
      </Card>
    </main>
  );
};

export default SignupPage;