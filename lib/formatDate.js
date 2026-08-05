// One date format for the whole site: "5 August 2026".
//
// The article template used to call toLocaleDateString('en-US'), which rendered
// "August 5, 2026" on a site whose style guide is British English (§2.7) and
// whose /privacy page writes the British form two clicks away. Shared here so the
// index and the article cannot drift apart again.
export function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
