export interface SwApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
