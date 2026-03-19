/**
 * Known partners — add new entries here and redeploy.
 */
const PARTNERS = ["test"];

export function generateStaticParams() {
  return PARTNERS.map((name) => ({ name }));
}

export default function RefRedirectPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const destination = `https://app.snaptosize.com?ref=${encodeURIComponent(name)}&source=partner_${encodeURIComponent(name)}`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <p>Redirecting to SnapToSize...</p>
      </div>
    </>
  );
}
