import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/Home'
import './style/style.css'
import Appointment from './components/Appointment'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments/:id" element={<Appointment />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
