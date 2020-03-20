const fs = require('fs'),
      getElements = require('./getElements'),
      getConnections = require('./getConnections')

function generateBlueprint (elementLimit) {
  const papers = getPapers(),
        allElements = getElements(papers),
        allConnections = getConnections(papers),
        elements = withDegree(allElements, allConnections)
          .sort(byDegreeDesc)
          .slice(0, elementLimit + 1),
        connections = allConnections
          .filter(byLimitedElements),
        blueprint = {
          elements,
          connections
        }

  fs.writeFileSync(
    './blueprint.json',
    JSON.stringify(blueprint, null, 2),
  )
}

function getPapers () {
  return JSON.parse(
    fs.readFileSync('./papers.json', 'utf8')
  )
}

const { 2: elementLimit } = process.argv
generateBlueprint(elementLimit)

