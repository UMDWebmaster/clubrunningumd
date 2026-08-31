import React from "react";
import gabeZach from "../Pictures/gabe+zach.JPG";

// Training groups, in the order they appear as table columns.
const GROUPS = [
  { key: "xc", heading: "Cross Country", phrase: "cross country" },
  { key: "sprints", heading: "Sprints", phrase: "sprints" },
  { key: "midDistance", heading: "Mid / Distance", phrase: "mid-distance" },
];

// Newest season first. The first entry is featured as the current season.
const seasons = [
  {
    year: "2026 - 2027",
    xc: [
      {
        label: "Fall 2026 plan",
        href: "https://docs.google.com/spreadsheets/d/1p357KgPmfpBRmPVfNUNbOvxrQz0xwx8YLHeaSTEQ04o/edit?gid=1947588523#gid=1947588523",
      },
    ],
    sprints: [],
    midDistance: [],
  },
  {
    year: "2024 - 2025",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1gumP1osVNLEffEBS2_wqSs3SWEV-b-13_EhcCoZMehI/edit?gid=1947588523#gid=1947588523",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/1CnSSl_4Z9OO95mmb0hq1PxQuuNXYCCrursbGMv-TXZo/edit?gid=355227437#gid=355227437",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/1fj68G6LMrUwHmI1imWAxgUwwEmS-ZkZcERkE2z5CbcY/edit?usp=sharing",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1BHrkHspXGHE4oJr3LlzBXdvKGYdZYg9rEkXLG7xC9Ns/edit?usp=sharing",
      },
    ],
  },
  {
    year: "2023 - 2024",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1H2lJ0vdM073JJne8gObCv5u0RLwX3T6gv_9Z8tNiW8M/edit#gid=803727052",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/1AbHRNlHQpEJKqNt1qOdgkTryfs4FNwnhgEYYr0_1PTc/edit#gid=0",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/1AbHRNlHQpEJKqNt1qOdgkTryfs4FNwnhgEYYr0_1PTc/edit#gid=306304169",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1hULUTcCD6mjVhAhh_DO5DqyQEbGFEwRzxq31d9mqsBs/edit#gid=1947588523",
      },
    ],
  },
  {
    year: "2022 - 2023",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1tyVDuNco1_uNeAxGm8S-TDOFfrDOMVXXgjIMUIh6iAo/edit#gid=1947588523",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/16mOeLFBVXSx66-vEUVbKhB5KAtuuslhP-OtsvI4RMEk/edit?usp=sharing",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/1ajHYG0mzKPQbyyQDYot0N-gNRgaPx1-ZuRdhFg3yTpY/edit#gid=1697315443",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1bC35kwcLnFu8syE_lrqzKxF596qPSbR4BRmCCT3zp0E/edit?usp=sharing",
      },
    ],
  },
  {
    year: "2021 - 2022",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1yzkaEMiWbV9KZQSdDHmeeGWRnUuv-BxM-b6DbGRDi3A/edit#gid=0",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/1k8cADbO-9Wqp0AFX4TesCarQ14RM84gD_fNwlOIZvz0/edit",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/16mOeLFBVXSx66-vEUVbKhB5KAtuuslhP-OtsvI4RMEk/edit?usp=sharing",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1g4ia63Csk5lLxMgkHvKqg-OSjqCq01MQvxNBBDiFyiM/edit#gid=1947588523",
      },
    ],
  },
  {
    year: "2020 - 2021",
    xc: [],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/1FEYMyOlJ_UQWwaYP3FzKwXjuLecY3Oj5tG-bLQUbdEg/edit#gid=0",
      },
    ],
    midDistance: [],
  },
  {
    year: "2019 - 2020",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1ZdN3uR30UGutQcyFCuZwqKRKl-NrhONK/edit#gid=1834905903",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://drive.google.com/drive/u/2/search?q=2019%20sprinter",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/1g7_vnk74bftFb1FOS7RTNWMGu40a6V1FxH7MuPtA7ns/edit#gid=0",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://drive.google.com/file/d/16aFC5O8md4IGRGSXrhfVWUoKPi5ngsZf/view",
      },
    ],
  },
  {
    year: "2018 - 2019",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/13cqmWzmzgmHy1GJqpbKrqha62Z2aaELFJm1TTSIKS9k/edit#gid=1228637930",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/16lO-kUACaBNbr0D9IK8Ia0e_9lizxOb5fH_0j68JSPI/edit",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/108xmRCeziTuD1bMvZyq7on58MdUrJ5G8tDOrUNyYHco/edit#gid=0",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1D-VRiRAXiX7DuSYaegl9Wl4Rw88VZk5f/edit#gid=553484958",
      },
    ],
  },
  {
    year: "2017 - 2018",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1ktrnTyDu-PScnk4sPF8FqcyYnhJ0pJq1jmvrHBO1mOA/edit",
      },
    ],
    sprints: [
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/u/2/d/1ax04jUMzZM_fo6AHllz8IagqZycBAGC7DbXURYO1Icc/edit?usp=drive_web&ouid=117665228541259445340",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1TDz6YpVvdZruY6EP0PFxOVgG-HHAXwVSsReRwxdc5OA/edit",
      },
    ],
  },
  {
    year: "2016 - 2017",
    xc: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1ecdG2KaLMhGPwUd8fnySiajLn-2GJvEj7QYy9pz8cjI/edit#gid=0",
      },
    ],
    sprints: [
      {
        label: "Fall",
        href: "https://docs.google.com/spreadsheets/d/1ecdG2KaLMhGPwUd8fnySiajLn-2GJvEj7QYy9pz8cjI/edit#gid=0",
      },
      {
        label: "Spring",
        href: "https://docs.google.com/spreadsheets/d/1zZHMF232lNNs2ODzykU2sAVhA0FPLuuFl3BzZN2U2Ko/edit#gid=0",
      },
    ],
    midDistance: [
      {
        label: "Plan",
        href: "https://docs.google.com/spreadsheets/d/1zZHMF232lNNs2ODzykU2sAVhA0FPLuuFl3BzZN2U2Ko/edit#gid=0",
      },
    ],
  },
];

const [currentSeason, ...pastSeasons] = seasons;

// Every link reads on its own for a screen reader: the visible label is short
// ("Plan", "Fall"), so the season and group get folded into the accessible name.
const accessibleName = (label, year, phrase) => {
  const season = year.replace(/\s*-\s*/, "–");
  const named = /plan/i.test(label) ? label : `${label} plan`;
  return `${season} ${phrase} — ${named} (opens in a new tab)`;
};

function PlanLink({ label, href, year, phrase, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={accessibleName(label, year, phrase)}
      className={className}
    >
      {label}
      <span className="plan-link-icon" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function PlanCell({ plans, year, phrase }) {
  if (!plans || plans.length === 0) {
    return (
      <>
        <span aria-hidden="true" className="plan-empty">
          —
        </span>
        <span className="sr-only">Not available</span>
      </>
    );
  }

  return (
    <ul className="plan-link-list">
      {plans.map((plan) => (
        <li key={plan.href + plan.label}>
          <PlanLink {...plan} year={year} phrase={phrase} className="plan-link" />
        </li>
      ))}
    </ul>
  );
}

export default function Workouts() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={gabeZach}
          alt="Two Club Running teammates finishing a workout at Kehoe Track"
          className="page-hero-image tall contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Train With Us</span>
          <h1 className="page-title">Workout Library</h1>
          <p className="page-subtitle">
            Every season our officers publish structured training for the
            distance, sprint, and mid-distance groups. Start with the current
            plan for your event group — every past season is archived below.
          </p>
        </header>

        <section className="page-section" aria-labelledby="current-season">
          <h2 id="current-season" className="section-heading">
            This season — {currentSeason.year}
          </h2>
          <div className="plan-grid">
            {GROUPS.map(({ key, heading, phrase }) => {
              const plans = currentSeason[key];
              const hasPlans = plans && plans.length > 0;
              return (
                <div className="plan-card" key={key}>
                  <h3 className="plan-card-title">{heading}</h3>
                  {hasPlans ? (
                    <ul className="plan-link-list">
                      {plans.map((plan) => (
                        <li key={plan.href + plan.label}>
                          <PlanLink
                            {...plan}
                            year={currentSeason.year}
                            phrase={phrase}
                            className="plan-link is-primary"
                          />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="plan-card-pending">
                      Not posted yet. It goes out on the email list as soon as
                      it&apos;s ready.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="page-section">
          <div className="page-card">
            <p>
              Plans are updated throughout the season, so check back before each
              training block. If you&apos;re not sure which group fits you, ask
              an officer at practice — you are welcome to follow any plan, or
              none at all.
            </p>
          </div>
        </section>

        <section className="page-section" aria-labelledby="past-seasons">
          <h2 id="past-seasons" className="section-heading">
            Past seasons
          </h2>
          <div
            className="table-wrapper"
            role="region"
            aria-labelledby="past-seasons"
            tabIndex={0}
          >
            <table className="modern-table plan-table">
              <caption className="sr-only">
                Archived training plans by school year and event group. Every
                link opens a Google Sheet in a new tab.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Season</th>
                  {GROUPS.map(({ key, heading }) => (
                    <th scope="col" key={key}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pastSeasons.map((season) => (
                  <tr key={season.year}>
                    <th scope="row" className="plan-year">
                      {season.year}
                    </th>
                    {GROUPS.map(({ key, phrase }) => (
                      <td key={key}>
                        <PlanCell
                          plans={season[key]}
                          year={season.year}
                          phrase={phrase}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
