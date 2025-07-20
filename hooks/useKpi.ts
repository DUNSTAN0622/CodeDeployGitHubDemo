import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useKpi() {
  return useSWR('/api/kpi', fetcher);
}
