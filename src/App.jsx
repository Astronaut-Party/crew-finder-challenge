import { useState, useEffect } from 'react'
import { searchCrew } from './api'

export default function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    searchCrew(query).then(data => {
      setResults(data)
      setLoading(false)
    })
  }, [query])

  return (
    <div className="app">
      <header>
        <h1>Astro Party Crew Finder</h1>
        <p className="subtitle">Search the crew by name or role.</p>
      </header>

      <input
        className="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Try typing a name…"
        autoFocus
      />

      <p className="status">
        {loading
          ? 'Loading…'
          : `Showing ${results.length} result${results.length === 1 ? '' : 's'} for “${query || '(empty)'}”`}
      </p>

      <ul className="results">
        {results.map(c => (
          <li key={c.id}>
            <span className="name">{c.name}</span>
            <span className="role">{c.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
