const linkResolver = doc => {
  // // URL for a legal page
  // if (doc.type === "legal_page") {
  //   return `/legal/${doc.uid}`
  // }

  // // URL for a about page
  // if (doc.type === "about_page") {
  //   return `/about`
  // }

  // // URL for a contact page
  // if (doc.type === "contact_page") {
  //   return `/contact`
  // }

  // // URL for a home page
  // if (doc.type === "homepage") {
  //   return `/`
  // }

  // Backup for all other types
  return "/"
}

module.exports = linkResolver
