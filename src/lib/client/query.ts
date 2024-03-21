import { useQuery } from "@tanstack/react-query";

import { getConfig } from "@/lib/client/localstorage";

import type { AppConfig, Collection, QueryResult } from "../types";

export function useGetConfig() {
  return useQuery({
    queryKey: ["config"],
    queryFn: getConfig,
    retry: false,
  });
}

export function useGetCollections(appConfig?: AppConfig) {
  return useQuery({
    queryKey: ["config", appConfig?.connectionString, "collections"],
    queryFn: async (): Promise<Collection[]> => {
      const response = await fetch(
        `/api/collections?connectionString=${appConfig?.connectionString}`
      );
      return response.json();
    },
    enabled: !!appConfig?.connectionString,
  });
}

export function useGetCollectionRecords(
  appConfig?: AppConfig,
  collectionName?: string,
  page?: number,
  query?: string
) {
  return useQuery({
    queryKey: ["collections", collectionName, "records", query, page],
    queryFn: async (): Promise<QueryResult> => {
      if (query === undefined || query === "") {
        const response = await fetch(
          `/api/collections/${collectionName}/records?connectionString=${appConfig?.connectionString}&page=${page}&query=${query}`
        );
        return response.json();
      } else {
        const response = await fetch(
          `/api/collections/${collectionName}/records?connectionString=${appConfig?.connectionString}`,
          {
            method: "POST",
            body: JSON.stringify({ query: query }),
          }
        );
        return response.json();
      }
    },
    enabled: !!appConfig?.connectionString,
  });
}
