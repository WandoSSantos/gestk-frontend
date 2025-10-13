import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../api/client';
export function useApi(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await apiClient.get(endpoint, { params: options.params });
            setData(result);
            options.onSuccess?.(result);
        }
        catch (err) {
            const error = err;
            setError(error);
            options.onError?.(error);
        }
        finally {
            setLoading(false);
        }
    }, [endpoint, JSON.stringify(options.params)]);
    useEffect(() => {
        if (options.immediate !== false) {
            fetchData();
        }
    }, [fetchData, options.immediate]);
    return {
        data,
        loading,
        error,
        refetch: fetchData,
        mutate: setData
    };
}
//# sourceMappingURL=useApi.js.map