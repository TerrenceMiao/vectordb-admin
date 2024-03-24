export type AppConfig = {
  connectionString: string;
  currentCollection: string;
};

export type Collection = {
  id: string;
  name: string;
};

export type Record = {
  id: string;
  document: string | null;
  metadata: { source: string | null };
  embedding: number[];
  distance: number;
};

export type RecordsPage = {
  total: number;
  page: number;
  records: Record[];
};

export type ErrorResponse = {
  error: string;
};

export type QueryResult = RecordsPage | ErrorResponse;
