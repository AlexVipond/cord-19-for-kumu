module.exports = function getElements (papers) {
  return papers.map(toElement)
}

function toElement ({ paper_id: id, metadata: { title, authors }, bib_entries }) {
  const authors = authors.map(({ first, middle, last }) => `${first} ${middle.join(' ')} ${last}`),
        totalBibRefs = Object.keys(bib_entries).length
        
  return {
    id,
    title,
    authors,
    'Total Authors': authors.length,
    'Total Bibliography References': totalBibRefs,
  }
}