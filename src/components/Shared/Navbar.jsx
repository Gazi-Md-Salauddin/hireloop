"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session, isPending } = useSession();
    
    const user = session?.user;
    
    const handleSignOut = async() => {
      await signOut()
    }
    
    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Companies", href: "/companies" },
        { name: "Pricing", href: "/pricing" }
    ];

  const dashboardLinks = {
    seeker: '/dashboard/seeker',
    recruiter: '/dashboard/recruiter',
    admin: '/dashboard/admin'
  }

  if (user?.email) {
    navLinks.push(
      {
        name: 'Dashboard',
        href: dashboardLinks[user?.role || 'seeker']
      }
    )
  }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white font-bold">
                        H
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-white">
                            Hire<span className="text-violet-500">Loop</span>
                        </h1>
                        <p className="text-xs text-gray-400">
                            Find Your Dream Job
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md md:flex">
                    {navLinks.map(link => (
                        <Link
                            
                            href={link.href}
                            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="h-6 w-px bg-white/10" />

                    {user ? (
                        <>
                            Hi, {user.name}!
                            <Button onClick={handleSignOut} variant="ghost" className="text-white">
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="text-sm font-semibold text-violet-400 hover:text-violet-300"
                        >
                            Sign In
                        </Link>
                    )}

                    <Link href="/auth/signup">
                        <Button
                            radius="full"
                            className="bg-white px-6 font-semibold text-black hover:bg-gray-200"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <Xmark size={28} /> : <Bars size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-white/10 bg-black/95 px-4 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 transition hover:text-violet-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {user ? (
                        <>
                            Hi, {user.name}!
                            <Button onClick={handleSignOut} variant="ghost" className="text-white">
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="text-sm font-semibold text-violet-400 hover:text-violet-300"
                        >
                            Sign In
                        </Link>
                    )}

                        <Link href="/auth/signup">
                            <Button
                                radius="full"
                                className="bg-white font-semibold text-black"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Navbar;
