interface UseApiOptions<T> {
    immediate?: boolean;
    params?: Record<string, any>;
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
}
export declare function useApi<T>(endpoint: string, options?: UseApiOptions<T>): {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => Promise<void>;
    mutate: import("react").Dispatch<import("react").SetStateAction<T | null>>;
};
export {};
//# sourceMappingURL=useApi.d.ts.map