import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'my-api-key',
//         'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8c5a9c3c21mshe19c8e971c9519ep1c464djsn1a281ffd8084');
            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),

});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
