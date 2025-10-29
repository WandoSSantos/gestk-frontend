"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from '../../api/client';

async function fetchCarteiraData() {
  const res = await apiClient.get('/api/gestao/carteira/dashboard/');
   return res.data;
}

export const useCarteiraResumoQuery = () => {
    return useQuery({
        queryKey: ['carteira', 'resumo', 'dashboard'],
        queryFn: fetchCarteiraData,
        staleTime: 5 * 60 * 1000,
    });
};