import { useState, useEffect } from 'react'

function App() {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="text-center px-8 py-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl max-w-lg mx-4">
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Pipeline Test — March 12, 2026
        </h1>
        <p className="text-purple-200 text-lg mb-8">
          This proves Henry can build sites on-demand
        </p>
        <div className="bg-white/10 rounded-lg px-6 py-3 inline-block">
          <p className="text-white/70 text-sm font-mono">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default App
