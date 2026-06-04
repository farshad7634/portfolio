export default function ResumePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Resume</h1>

      <iframe
        title="Resume PDF viewer"
        src="/resume-eng.pdf"
        style={{
          width: "100%",
          height: "85vh",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      />

      <p>
        If the PDF does not load,{" "}
        <a href="/resume-eng.pdf" target="_blank">
          open it in a new tab
        </a>.
      </p>
    </main>
  );
}