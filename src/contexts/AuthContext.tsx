import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    signIn: (email: string) => Promise<void>;
    signUp: (name: string, email: string) => Promise<void>;
    signOut: () => void;
    signInWithOAuth: (provider: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for saved session on mount
        const savedUser = localStorage.getItem('roomee_mock_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const signIn = async (email: string) => {
        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        const mockUser = {
            id: '123',
            name: email.split('@')[0],
            email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        setUser(mockUser);
        localStorage.setItem('roomee_mock_user', JSON.stringify(mockUser));
        setIsLoading(false);
    };

    const signUp = async (name: string, email: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const mockUser = {
            id: '123',
            name,
            email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        setUser(mockUser);
        localStorage.setItem('roomee_mock_user', JSON.stringify(mockUser));
        setIsLoading(false);
    };

    const signInWithOAuth = async (provider: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const mockUser = {
            id: '123',
            name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
            email: `user@${provider}.com`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`
        };
        setUser(mockUser);
        localStorage.setItem('roomee_mock_user', JSON.stringify(mockUser));
        setIsLoading(false);
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('roomee_mock_user');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, signInWithOAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
