import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, schemaMarkup }) {
  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Dynamic Schema Markup (Safely Injected) */}
      {schemaMarkup && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} 
        />
      )}
    </Helmet>
  );
}