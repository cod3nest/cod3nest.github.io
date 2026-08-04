/**
 * Renders one JSON-LD block. Accepts a single schema object or an array of them.
 */
export default function JsonLd({ schema }) {
  const blocks = Array.isArray(schema) ? schema : [schema]

  return blocks.map((block, index) => (
    <script
      key={block['@id'] || `${block['@type']}-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ))
}
