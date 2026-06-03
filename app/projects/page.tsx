import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Projects
      </h1>

      <div style={{ display: "grid", gap: "1rem" }}>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1.5rem",
            }}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>
              {project.title}
            </h2>

            <p style={{ marginBottom: "0.75rem", color: "#444" }}>
              {project.description}
            </p>

            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              {project.tech.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}