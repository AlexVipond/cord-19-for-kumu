module.exports = function getConnections (papers, elements) {
  return papers
    .reduce(toConnections, [])
    .map(withIds)
}

function toConnections (allConnections, { paper_id: fromId, bib_entries }, index) {
  const connections = fromBibEntries({ fromId, bib_entries, index })

  return [
    ...allConnections,
    ...connections
  ]
}

function fromBibEntries ({ fromId, bib_entries, index }) {
  return Object.keys(bib_entries).map((entry, i) => {

    return {
      id: `connection-${index}-${i}`,
      from: fromId,
      to: toId,
    }
  })

  
}