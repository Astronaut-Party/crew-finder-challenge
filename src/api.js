import { CREW } from './data'

// Simulated network latency. Shorter queries take longer to "load" —
// some real backends behave this way for broad searches.
function simulatedLatency(query) {
  return Math.max(150, 1400 - query.length * 250)
}

export function searchCrew(query) {
  return new Promise(resolve => {
    setTimeout(() => {
      const q = query.trim().toLowerCase()
      const matches = CREW.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.role.toLowerCase().includes(q),
      )
      resolve(matches)
    }, simulatedLatency(query))
  })
}
