"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const navLinks = [{ href: '/register', label: 'Register' },
{ href: '/login', label: 'Login' },
{ href: '/forgot-password', label: 'Forgot Password' },
];

export default function AuthLayouts({ children, }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input, setInput] = useState('');
    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => alert(input)}>Search</button>
                // you can use template.tsx instead of page .tsx file to not preserve state
            </div>
            {navLinks.map(link => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.label}
                    className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}>
                        {link.label}</Link>
                )

            })}
            {children}
        </div>
    );
};