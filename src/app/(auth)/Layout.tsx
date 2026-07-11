import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen flex-col items-center justify-center bg-gray-700">
            {children}
        </main>
    );
}

export default AuthLayout;