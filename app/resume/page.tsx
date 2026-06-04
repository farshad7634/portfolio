import Link from "next/link";
import { resume } from "@/content/resume";

export default function ResumePage() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>{resume.name}</h1>
      <h2 style={{ fontWeight: 400, color: "#666" }}>
        {resume.title}
      </h2>

      <section style={{ marginTop: "2rem" }}>
        <h3>Summary</h3>
        <p>{resume.summary}</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Education</h3>
        {resume.education.map((edu, i) => (
          <div key={i}>
            <strong>{edu.institution}</strong>
            <p>{edu.degree}</p>
            <p>{edu.period}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

<section style={{ marginTop: "2rem" }}>
  <h3>Skills</h3>

  <div>
    <strong>Languages:</strong>{" "}
    {resume.skills.languages.spoken.map((lang, i) => (
      <span key={i}>
        {lang}
        {i < resume.skills.languages.spoken.length - 1 ? ", " : ""}
      </span>
    ))}
  </div>

  <div style={{ marginTop: "0.5rem" }}>
    <strong>Hardware & Tools:</strong>{" "}
    {resume.skills.hardware_tools.map((tool, i) => (
      <span key={i}>
        {tool}
        {i < resume.skills.hardware_tools.length - 1 ? ", " : ""}
      </span>
    ))}
  </div>

  <div style={{ marginTop: "0.5rem" }}>
    <strong>Domains:</strong>{" "}
    {resume.skills.domains.map((domain, i) => (
      <span key={i}>
        {domain}
        {i < resume.skills.domains.length - 1 ? ", " : ""}
      </span>
    ))}
  </div>
</section>

<section style={{ marginTop: "2rem" }}>
  <h3>Experience</h3>

  <div style={{ position: "relative", marginTop: "1.5rem" }}>
    {/* vertical line */}
    <div
      style={{
        position: "absolute",
        left: "12px",
        top: 0,
        bottom: 0,
        width: "2px",
        backgroundColor: "#ddd",
      }}
    />

    {resume.experience.map((e, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          paddingLeft: "40px",
          marginBottom: "2rem",
        }}
      >
        {/* circle node */}
        <div
          style={{
            position: "absolute",
            left: "4px",
            top: "6px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "#333",
            border: "3px solid white",
            boxShadow: "0 0 0 2px #ddd",
          }}
        />

        {/* year label */}
        <div style={{ color: "#666", fontSize: "0.9rem" }}>
          {e.start} — {e.end}
        </div>

        <strong>{e.role}</strong>

        <div style={{ color: "#666" }}>{e.company}</div>

        <p style={{ marginTop: "0.3rem" }}>{e.description}</p>
      </div>
    ))}
  </div>
</section>
      <section style={{ marginTop: "2rem" }}>
        <h3>Projects</h3>

        <Link
          href={resume.projectsLink}
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            padding: "0.6rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          View Projects →
        </Link>
      </section>
    </main>
  );
}