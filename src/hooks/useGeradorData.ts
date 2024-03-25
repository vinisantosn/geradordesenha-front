import axios, { AxiosPromise } from "axios"
import { GeradorData } from "../components/interface/GeradorData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080/gerador'


async function fetchData(): Promise<GeradorData> {
    try {
        const response = await axios.get<GeradorData>(API_URL);
        console.log(response)
        return response.data;
    } catch (error) {
        throw new Error('Erro ao obter dados do servidor');
    }
}

export function useGeradorData() {
    const query = useQuery<GeradorData>( {
        queryFn: fetchData,
        queryKey: ['gerador-data'],
        retry: 2
    });

    return query.data;
}
