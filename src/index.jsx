import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import "./index.css"

import App from "./MainApp.jsx"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/* ---------------- TANSTACK QUERY CLIENT ---------------- */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />

      {/* REACT QUERY DEVTOOLS */}
      <ReactQueryDevtools
        initialIsOpen={false}
      />
    </QueryClientProvider>
  </StrictMode>
)