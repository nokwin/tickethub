import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../core/config";
import { GetEventResponseDto } from "./dto/get-event-response.dto";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.api.host }),
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventResponseDto, unknown>({
      query: () => "/api/event",
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
