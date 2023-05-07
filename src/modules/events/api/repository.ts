import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../core/config";
import { GetEventResponseDto } from "./dto/get-event-response.dto";
import { GetSingleEventResponseDto } from "./dto/get-single-event-response.dto";
import { GetSectorResponseDto } from "./dto/get-sector-response.dto";
import { GetRateBySectorResponseDto } from "./dto/get-rate-by-sector-response.dto";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.api.host }),
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventResponseDto, unknown>({
      query: () => "/api/event",
    }),
    getSingleEvent: builder.query<GetSingleEventResponseDto, number>({
      query: (id) => `/api/event/${id}`,
    }),
    getSectorsByEvent: builder.query<GetSectorResponseDto, number>({
      query: (id) => `/api/eventDate/${id}/sectors`,
    }),
    getRateBySector: builder.query<GetRateBySectorResponseDto, number>({
      query: (id) => `/api/sectors/${id}/rates`,
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetSingleEventQuery,
  useLazyGetSectorsByEventQuery,
  useLazyGetRateBySectorQuery,
} = eventsApi;