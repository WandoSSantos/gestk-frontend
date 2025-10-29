import { useQuery } from "@tanstack/react-query";
import { apiClient } from '../../api/client';

async function fetchUsuariosData() {
    const res = await apiClient.get('/api/gestao/carteira/usuarios/dashboard/');
    return res.data;
}

export const useUsuariosResumoQuery = () => {
    return useQuery({
        queryKey: ['usuarios', 'resumo', 'dashboard'],
        queryFn: fetchUsuariosData,
        staleTime: 5 * 60 * 1000,
    });
}