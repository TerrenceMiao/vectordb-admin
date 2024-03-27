import { useQuery } from "@tanstack/react-query";

import { getConfig } from "@/lib/client/localstorage";
import {
  countRecord,
  // fetchCollections,
  fetchRecords,
  queryRecords,
} from "@/lib/server/db";

import type { AppConfig, Collection, QueryResult, Record } from "@/lib/types";

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
    // queryFn: async (): Promise<Collection[]> => {
    //   const data = await fetchCollections(appConfig!.connectionString);
    //   return data;
    // },
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
        const connectionString = appConfig!.connectionString;
        const data = await fetchRecords(
          connectionString,
          collectionName!,
          page!
        );
        const totalCount = await countRecord(connectionString, collectionName!);

        return {
          total: totalCount,
          page: page!,
          records: data as Record[],
        };
      } else {
        const connectionString = appConfig!.connectionString;
        const queryEmbeddings = query!
          .split(",")
          .map((item: string) => parseFloat(item));

        try {
          const data = await queryRecords(
            connectionString,
            collectionName!,
            queryEmbeddings
          );

          return {
            total: 0,
            page: 0,
            records: data as Record[],
          };
        } catch (error: unknown) {
          if ((error as Error).message === "InvalidDimension") {
            return {
              error:
                "Invalid dimension for query embeddings. Please provide embeddings with the same dimension as the collection.",
            };
          } else {
            return {
              error:
                "Unknown error. Please contact the administrator for help.",
            };
          }
        }
      }
    },
    enabled: !!appConfig?.connectionString,
  });
}
