import { useSearchParams } from "react-router-dom";

export const useUrlQueryParam = (keys: string[]) => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));
};
