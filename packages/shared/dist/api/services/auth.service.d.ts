import { LoginRequest, LoginResponse, User, Contabilidade } from '../types';
export declare class AuthService {
    login(credentials: LoginRequest): Promise<LoginResponse>;
    logout(): Promise<void>;
    refreshToken(): Promise<string | null>;
    selectContabilidade(contabilidadeId: string): Promise<void>;
    isAuthenticated(): boolean;
    getCurrentUser(): User | null;
    setCurrentUser(user: User): void;
    getAvailableContabilidades(): Contabilidade[];
    setAvailableContabilidades(contabilidades: Contabilidade[]): void;
    hasContabilidadeAccess(contabilidadeId: string): boolean;
    getUserRole(): string | null;
    setUserRole(role: string): void;
    isAdmin(): boolean;
    isSuperUser(): boolean;
    getAppContext(): 'admin' | 'client' | null;
    isAdminContext(): boolean;
    isClientContext(): boolean;
    initializeAuth(): void;
    clearAllAuth(): void;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map