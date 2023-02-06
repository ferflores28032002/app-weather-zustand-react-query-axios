import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { weatherTypes } from "./interfaces/types";
import weatherApi from "../api/weatherApi";

async function getWeather(element: QueryFunctionContext) {

  const [_, search] = element.queryKey;

  const { data } = await weatherApi.get<weatherTypes>(
    `/weather?q=${search}&lang=sp&units=metric&appid=d87167fc77aa92fcb612e7ec8da36cb2`
  );
  return data;
}

export function useWeatherInfo(search: string) {
  return useQuery(["weatherCity", search], getWeather);
}
