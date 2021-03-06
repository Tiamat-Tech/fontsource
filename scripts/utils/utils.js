// Generate filenames and paths
const makeFontDownloadPath = (
  fontDir,
  fontId,
  subset,
  weight,
  style,
  extension
) => {
  return `./${fontDir}/files/${fontId}-${subset}-${weight}-${style}.${extension}`
}

const makeFontFilePath = (fontId, subset, weight, style, extension) => {
  return `./files/${fontId}-${subset}-${weight}-${style}.${extension}`
}

// Insert a weight array to find the closest number given num - used for index.css gen
const findClosest = (arr, num) => {
  // Convert all string values of weights into numbers
  arr = arr.map(weight => {
    return Number(weight)
  })
  // Return as string for comparison
  return String(
    arr.reduce((prev, curr) =>
      Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
    )
  )
}

module.exports = { makeFontDownloadPath, makeFontFilePath, findClosest }
