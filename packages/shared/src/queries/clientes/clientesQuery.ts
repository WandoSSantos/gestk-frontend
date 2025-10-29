import {useQuery} from "@tanstack/react-query";
import {apiClient} from '../../api/client';


async function fetchClientesData() {
    const res = await apiClient.get('/api/gestao/carteira/clientes/dashboard/');
    return res.data();
}

export const useClientesResumoQuery = () => {
    return useQuery({
        queryKey: ['clientes', 'resumo', 'dashboard'],
        queryFn: fetchClientesData,
        staleTime: 5 * 60 * 1000,
    })
}

