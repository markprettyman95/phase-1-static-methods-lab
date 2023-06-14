class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9\-\'\s]/g, '')
  }
  static titleize(str) {
    const noCapitalize = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    const words = str.split(' ')

    const titleizeWords = words.map((word, index) => {
      if (index === 0 || !noCapitalize.includes(word)) {
        return this.capitalize(word)
      } else {
        return word 
      }
    })
return titleizeWords.join(' ')
  }
}