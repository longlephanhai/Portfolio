const sections = [
  {
    id: "01",
    category: "Frontend",
    title: "UI Development",
    color: "#E3872D",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    bullets: [
      "Slicing & integrating responsive templates",
      "Component-driven development with ReactJS & NextJS",
      "Semantic HTML, modern CSS, vanilla JavaScript",
    ],
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "Bootstrap 4"],
  },
  {
    id: "02",
    category: "Backend",
    title: "Server & API",
    color: "#041230",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    bullets: [
      "RESTful API design & implementation",
      "Server-side logic with ExpressJS, NestJS & Spring Boot",
      "Data modeling with MySQL & MongoDB",
    ],
    tags: ["Node.js", "ExpressJS", "NestJS", "Java", "Spring Boot", "MySQL", "MongoDB"],
  },
  {
    id: "03",
    category: "Other",
    title: "Tools & DevOps",
    color: "#2d7de3",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    bullets: [
      "Version control & collaboration with Git & GitHub",
      "Containerizing applications with Docker",
      "Basic CI/CD workflow & environment management",
    ],
    tags: ["Git", "GitHub", "Docker", "Docker Compose", "Linux", "Postman"],
  },
];

const Skill = () => {
  return (
    <>
      <style>{`
        /* ── Grid layout cho 3 cards ── */
        .sk3_grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          width: 100%;
        }

        /* ── Card ── */
        .sk3_card {
          padding: 48px 40px 52px;
          border-right: 1px solid #dde0ea;
          box-sizing: border-box;
          position: relative;
          transition: background 0.25s;
        }

        .sk3_card:last-child {
          border-right: none;
        }

        .sk3_card:hover {
          background: #fff;
        }

        /* accent top bar */
        .sk3_card::before {
          content: "";
          position: absolute;
          top: 0; left: 40px;
          width: 36px;
          height: 3px;
          border-radius: 0 0 3px 3px;
          background: var(--card-color);
          transition: width 0.3s ease;
        }

        .sk3_card:hover::before {
          width: 72px;
        }

        /* ── Card header ── */
        .sk3_card_header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .sk3_icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-bg-icon);
          color: var(--card-color);
        }

        .sk3_titles {
          padding-top: 2px;
        }

        .sk3_eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--card-color);
          display: block;
          margin-bottom: 4px;
        }

        .sk3_heading {
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #041230;
          line-height: 1.1;
          margin: 0;
        }

        /* ── Bullet list ── */
        .sk3_bullets {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
        }

        .sk3_bullets li {
          position: relative;
          padding-left: 15px;
          font-size: 13.5px;
          color: #555;
          line-height: 1.65;
          margin-bottom: 7px;
          font-family: "Open Sans", sans-serif;
        }

        .sk3_bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--card-color);
          opacity: 0.6;
        }

        /* ── Tag list ── */
        .sk3_tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .sk3_tag {
          font-family: "Montserrat", sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 3px;
          background: var(--card-tag-bg);
          color: var(--card-color);
          border: 1.5px solid var(--card-tag-border);
          transition: background 0.18s, color 0.18s;
          cursor: default;
        }

        .sk3_tag:hover {
          background: var(--card-color);
          color: #fff;
          border-color: var(--card-color);
        }

        /* ── Responsive ── */
        @media (max-width: 1040px) {
          .sk3_grid {
            grid-template-columns: 1fr;
          }
          .sk3_card {
            border-right: none;
            border-bottom: 1px solid #dde0ea;
          }
          .sk3_card:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap" style={{ paddingBottom: 90 }}>
          <div className="container">

            {/* Section title */}
            <div className="arlo_tm_mini_title_holder" style={{ marginBottom: 48 }}>
              <h4 style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 28,
                fontWeight: 900,
                color: '#041230',
                margin: 0,
                lineHeight: 1.1,
              }}>
                Technical Skills
              </h4>
              <p style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 14,
                color: '#888',
                marginTop: 8,
                marginBottom: 0,
              }}>
                Technologies I work with — no scores, just facts.
              </p>
            </div>

            {/* Cards grid */}
            <div className="sk3_grid">
              {sections.map((s) => {
                const alpha = (hex: string, a: number) => {
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  return `rgba(${r},${g},${b},${a})`;
                };

                return (
                  <div
                    key={s.id}
                    className="sk3_card"
                    style={{
                      "--card-color": s.color,
                      "--card-bg-icon": alpha(s.color, 0.08),
                      "--card-tag-bg": alpha(s.color, 0.06),
                      "--card-tag-border": alpha(s.color, 0.25),
                    } as React.CSSProperties}
                  >
                    {/* Header */}
                    <div className="sk3_card_header">
                      <div className="sk3_icon">{s.icon}</div>
                      <div className="sk3_titles">
                        <span className="sk3_eyebrow">{s.id} — {s.category}</span>
                        <h3 className="sk3_heading">{s.title}</h3>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="sk3_bullets">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="sk3_tags">
                      {s.tags.map((t) => (
                        <span className="sk3_tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;