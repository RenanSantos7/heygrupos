import { createContext, ReactNode, useContext, useState } from 'react';

interface IAuthContext {
    
};

const AuthContext = createContext<IAuthContext>(undefined);

export default function AuthProvider ({ children }: {children: ReactNode}) {

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuthContext(){
    const context = useContext(AuthContext);
    if(!context) throw new Error('AuthContext não está sendo provido neste componente');
    return context;
}