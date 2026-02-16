import React from "react";
import "../CSS/Photos.css";
import "../CSS/table.css";
import "../CSS/Info.css";
import natsPic from "../Pictures/natsTeamPic.JPG";
import joinusBanner from "../Pictures/joinus-banner.png";
import joinusFooter from "../Pictures/joinus-footer.png";

export default function NewMemberInfo() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={natsPic}
          alt="Maryland Club Running team gathered on the track"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container new-member-info">
        <header className="page-header">
          <span className="page-eyebrow">Start Here</span>
          <h1 className="page-title">Welcome to Maryland Club Running</h1>
          <p className="page-subtitle">
            We want you to run, meet people, and feel at home at Maryland. If
            you&apos;re just finding us, start here—we rounded up the answers we
            wish someone handed us on day one.
          </p>
        </header>

        <section className="page-section">
          <div className="page-card gdoc-embed">
            <img src={joinusBanner} alt="Club Running banner" className="gdoc-banner" />

            <p className="gdoc-mission">
              <em>
                Our mission is to support and encourage a healthy approach to
                running and training for all members of the University of Maryland.
                We provide an atmosphere in which runners of all abilities can meet
                each other, share running knowledge and simply enjoy running
                together as well as compete against other club college teams.
              </em>
            </p>

            <nav className="gdoc-toc">
              <strong>Table of Contents</strong>
              <ol>
                <li><a href="#officers">Who is in charge of the club?</a></li>
                <li><a href="#contact">How can I contact the club?</a></li>
                <li><a href="#join">How Do I Join?</a></li>
                <li><a href="#practices">When/where are practices?</a></li>
                <li><a href="#sprinters">Does the club support sprinters, hurdlers, jumpers, and throwers?</a></li>
                <li><a href="#training">How does the club train?</a></li>
                <li><a href="#beginners">What if I&apos;m out of shape/not as experienced as a runner?</a></li>
                <li><a href="#compete">How can I compete with the club?</a></li>
                <li><a href="#cost">How much does the club cost?</a></li>
              </ol>
            </nav>

            {/* 1. Officers */}
            <h2 id="officers">1. Who is in charge of the club?</h2>
            <p>
              We have a team of 9 officers elected every December! You can read
              about them{" "}
              <a href="https://umdclubrunning.com/about">on our club website</a>.
              The officers do everything to keep the club running, which includes
              planning practices, coordinating competition travel, obtaining and
              managing funds, and hosting social events.
            </p>
            <ul>
              <li>President: Ben Waterman</li>
              <li>Vice Presidents: Beatrice Wermuth &amp; Joe Jackson</li>
              <li>Financial Treasurer: Nikita Arya</li>
              <li>Fundraising Chair: Ryken Mak</li>
              <li>Sprint Chair: Logan Hurney</li>
              <li>Social Chair: Logan Cyford</li>
              <li>Apparel Coordinator: Mandy Callaghan</li>
              <li>Webmaster: Jonah Plotkin</li>
            </ul>

            {/* 2. Contact */}
            <h2 id="contact">2. How can I contact the club?</h2>
            <p>
              The best way to contact us is through our email,{" "}
              <a href="mailto:umdclubrunning@gmail.com">umdclubrunning@gmail.com</a>.
              All nine officers have access to this account. You can expect a
              response within two days during the school year, and within a week or
              two during the summer.
            </p>
            <div className="table-wrapper">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Contact</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td><a href="mailto:umdclubrunning@gmail.com">umdclubrunning@gmail.com</a></td>
                    <td>Primary mode of contact, weekly newsletters, meet signups</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td><a href="https://umdclubrunning.com">umdclubrunning.com</a></td>
                    <td>Club records, running routes, blog</td>
                  </tr>
                  <tr>
                    <td>GroupMe</td>
                    <td><a href="https://groupme.com/join_group/108665912/yF0Y8FZw">Link here</a></td>
                    <td>Group chat with all club members</td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td><a href="https://www.instagram.com/umdclubrunning/">@umdclubrunning</a></td>
                    <td>Meet updates, member features, social event pictures</td>
                  </tr>
                  <tr>
                    <td>Strava</td>
                    <td><a href="https://www.strava.com/clubs/UMDCR">Link here</a></td>
                    <td>Uploading training logs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3. Join */}
            <h2 id="join">3. How Do I Join?</h2>
            <p>You can be a member of Club Running in 3 easy steps!</p>
            <ol>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSek9rss9U2_uLiHt-qa1MDkVI-r2VpevPKlVhGTohIGxSs5ug/viewform?usp=dialog">
                  Join the email list here
                </a>
                ! All essential information is communicated to members via the email
                list. This includes meet sign-ups, social events, apparel orders,
                and practice updates.
              </li>
              <li>
                Sign up on IMLeagues. This must be done <strong>once per school year</strong>.
                Instructions to sign up are below.
              </li>
              <li>
                Sign up on TerpLink. This only needs to be done once during your
                entire time at Maryland. Instructions to sign up are below.
              </li>
            </ol>

            <p>
              <strong>To register for IMLeagues</strong>: follow this link:{" "}
              <a href="https://www.imleagues.com/spa/club/4395e0c781af4905a4088a9561509399/home">
                IMLeagues Club Running
              </a>
            </p>
            <ol>
              <li>Log in using your ELMS credentials.</li>
              <li>Navigate to the &quot;clubs&quot; tab.</li>
              <li>Scroll down to find Club Running and click on the &quot;join&quot; link.</li>
              <li>After clicking the join button, it should take you to the concussion quiz.</li>
              <li>To participate in any practices or events held by the club, YOU MUST COMPLETE THIS QUIZ.</li>
              <li>
                In addition to the concussion quiz, there will be a &quot;Contact and
                Consent&quot; form you MUST FILL OUT. You should be prompted to take it
                right after the concussion quiz, but, if not, click on the circle
                with your initials on it. You should be redirected to a page that
                prompts you about unsubmitted forms. Click on that to reach the form.
              </li>
              <li>
                Follow the steps to complete the online waiver and sign
                electronically. (If you are under 18 you must bring a physical paper
                form to practice).
              </li>
            </ol>

            <p>
              <strong>To register on TerpLink</strong>, follow this link:{" "}
              <a href="https://terplink.umd.edu/">https://terplink.umd.edu/</a>
            </p>
            <ol>
              <li>Click &quot;Sign In&quot; at the upper right corner of the page, and log in with your UMD login.</li>
              <li>Search &quot;Maryland Club Running&quot; in the search bar and click &quot;Maryland Club Running&quot; on the dropdown menu.</li>
              <li>Click the blue &quot;Join&quot; and submit a request to join the team.</li>
            </ol>
            <p>
              If you have issues with either of these then let an officer know at
              practice and we will help you navigate!
            </p>

            {/* 4. Practices */}
            <h2 id="practices">4. When/where are practices?</h2>
            <p>
              <strong>First day of practice for Spring 2026:</strong> January 26th, 2026 (first day of classes)
            </p>
            <p>
              <strong>Practice schedule:</strong> Mon–Fri, 4:00 PM (Changes to 5:00 PM when daylight savings time ends on March 9th)
            </p>
            <p>
              <strong>Check out our club <a href="https://umdclubrunning.com/calendar">calendar</a>!</strong>
            </p>
            <p>
              <strong>Practice attendance requirement:</strong> There is none! All of
              our practices are <strong>voluntary</strong>. You can fit our club into
              your schedule however you see fit, and attend as many or as few
              practices as you would like.
            </p>
            <p>
              <strong>Meeting location (distance team):</strong>{" "}
              <a href="https://goo.gl/maps/tG2f123Uw4M7tMwr7">
                School of Public Health (SPH) overhang
              </a>{" "}
              by the parking lot labeled PP1. You can get there by:
            </p>
            <ol>
              <li>
                Walking down the staircase/ramp just past the end of the building
                right next to the end of Centreville Hall, <strong>or</strong>
              </li>
              <li>
                Entering SPH on the side closest to Eppley, heading to the bottom
                floor, and walking all the way down the long hallway and out the
                glass double doors at the opposite end of the building.
              </li>
            </ol>
            <p><strong>Meeting location (sprinters/throwers):</strong> Kehoe track</p>
            <p>
              <strong>Lockers:</strong> There are red lockers we can use in SPH
              located on the bottom floor on the side closest to Eppley. They do not
              have built-in locks, so bring your own lock if desired.
            </p>
            <p>
              <strong>Weekend runs:</strong> We do not have regularly scheduled
              official weekend runs. However, many of our members organize weekend
              runs on their own.
            </p>

            {/* 5. Sprinters */}
            <h2 id="sprinters">5. Does the club support sprinters, hurdlers, jumpers, and throwers?</h2>
            <p>
              Yes! We attend about 6–7+ track meets during the Spring semester, at
              which sprint, hurdling, throwing, and jump events are contested. We
              have had a number of successful sprinters compete at Penn Relays and
              jumpers and hurdlers who have earned All-American status at Club
              Nationals.
            </p>
            <p>
              While we have a larger sprinter membership in the spring, when
              sprinters traditionally compete, we have sprint and field practices
              year round to do workouts to stay in shape. If you have an interest in
              competing specifically with the more track and field focused section of
              our club (including hurdling, jumping, and throwing), you may contact
              our Sprint Chair, Logan Hurney, to learn about training and competing
              with our club.
            </p>
            <p>
              There is a <strong>sprint-focused GroupMe</strong> which contains all
              the updates regarding sprint practices, and you can join{" "}
              <a href="https://groupme.com/join_group/109740346/lIdVj8rF">here</a>.
            </p>

            {/* 6. Training */}
            <h2 id="training">6. How does the club train?</h2>
            <p>
              <strong>
                Our training plans can be found on our website, and linked in the
                weekly emails. Training plans have not yet been finalized for the
                spring 2026 season but will send them out via our email list as soon
                as they are ready.
              </strong>
            </p>
            <p>
              <strong>Schedule:</strong> Distance usually has workout days on Tuesday
              and Friday though this varies depending on the timing of our meets. On
              days not designated as workout days distance does easy runs. However,
              not everyone does workouts on Tues/Fri. Some people do them on a
              different day, and some people don&apos;t do the workouts at all. There
              is a separate training plan for sprinters structured to help everyone
              reach their peak speed at the most crucial points in the season.
            </p>
            <p>
              <strong>Workouts:</strong> Workouts are typically done on the track.
              Longer reps are sometimes done on trails or fields on/near campus. We
              encourage members to follow the club workout plans for camaraderie and
              for results, but there is no obligation to do so. There are plenty of
              people that follow their own plans for workouts.
            </p>
            <p>
              <strong>Easy runs:</strong> There are no routes, distances, or paces
              specified on our plan for easy days. This means:
            </p>
            <ul>
              <li>Routes/distances/paces are decided by whoever is at practice that day</li>
              <li>You will find groups running between 3 and 10 miles at 7:00/mi to 12:00/mi</li>
            </ul>
            <p>
              <strong>
                While we encourage workouts for those who want to compete, they are
                never required, and there will always be people doing easy runs at
                distance practice!
              </strong>
            </p>

            {/* 7. Beginners */}
            <h2 id="beginners">7. What if I&apos;m out of shape/not as experienced as a runner?</h2>
            <p>
              Yes! There are people on this club that could compete at the varsity
              level (or have done so in the past), there are people who are brand new
              to running, and there are people at every level in between, each of
              which has different goals for what they want to get out of running.
            </p>

            {/* 8. Compete */}
            <h2 id="compete">8. How can I compete with the club?</h2>
            <p>
              First off, you have no obligation to compete with us! All competitions
              are completely voluntary. If you are unsure about competing, just give
              it a try! You will probably find that our meets are more fun than high
              school meets and if it&apos;s not your thing, there is no obligation to
              continue competing.
            </p>
            <p><strong>Who can compete:</strong> Everyone! There are no entry standards for most of our meets.</p>
            <p>
              <strong>Meet schedule:</strong> We attend about 6 XC meets in the fall,
              and about 7 track meets in the spring. You can come to as many or as
              few as you would like. The official schedule is{" "}
              <a href="https://umdclubrunning.com/Races">posted on our website</a>{" "}
              and sent in the weekly emails during the semester.
            </p>
            <p>
              <strong>Meet logistics:</strong> We typically carpool to meets. Most
              meets are day trips. We have a few overnight meets each season, for
              which we stay in club-sponsored hotels.
            </p>
            <p><strong>Types of meets:</strong> We attend several different types of competitions:</p>
            <ul>
              <li>
                <strong>Cross country meets</strong> – Fall
                <ul><li>Men run an 8k, and women run a 6k</li></ul>
              </li>
              <li>
                <strong>Track meets</strong> – Spring
                <ul><li>Events ranging from the 100m to the 10k; hurdles and steeple; and field events. You decide which events you want to run!</li></ul>
              </li>
              <li>
                <strong>Road races</strong>
                <ul>
                  <li>Frederick Half Marathon in the beginning of May</li>
                  <li>NIRCA Nationals half marathon in mid April</li>
                </ul>
              </li>
            </ul>

            <p><strong>Competition level:</strong> The meets that we compete in can be broken into three categories:</p>
            <ol>
              <li>
                <em>Club Level Meets</em> – These meets are hosted by clubs just like
                us, or by our governing body, the{" "}
                <a href="http://www.clubrunning.org/">
                  National Intercollegiate Running Club Association (NIRCA)
                </a>
                . These meets have a very strong culture of inclusion and fun, while
                still managing to be competitive for people of all skill levels.
                To paraphrase a member of UMBC&apos;s running club, &quot;The best
                part about NIRCA is that half the kids are running it like it&apos;s
                the Olympics and the other half are running relay races with toy
                lightsabers as batons and doing front-flips into the steeplechase
                pit.&quot;
              </li>
              <li>
                <em>Collegiate Varsity Level (D3/D2/D1)</em> – These meets are hosted
                by college varsity teams, and they allow our club to enter either as
                a complete team or as unattached competitors. These meets typically
                accommodate our more competitive athletes, and the D1 meets are
                especially exclusive. Additionally, the varsity team hosts two home
                outdoor track meets every year, and they allow our athletes to
                compete in them (provided they meet certain performance standards).
                We have had a handful of dedicated athletes on our club eventually
                walk-on to the varsity track team.
              </li>
              <li>
                <em>Road Races</em> – Our club typically sponsors one half-marathon
                per semester. When our schedule allows, this usually means sending a
                group to a race in the Fall and the Frederick Half Marathon in the
                Spring. Additionally, NIRCA has recently begun hosting a
                Half-Marathon Championship in conjunction with the Outdoor Track
                Championships in the Spring.
              </li>
            </ol>

            {/* 9. Cost */}
            <h2 id="cost">9. How much does the club cost?</h2>
            <p>
              <strong>
                If you do not plan on racing in any meets, there are no fees for you
                to pay; the club is completely free!
              </strong>
            </p>
            <p>
              Competition fees and race fees will be collected only from competing
              members of the club to help cover the cost of entry fees and travel for
              meets. The competition fee will be a flat fee of{" "}
              <strong>$20 for a semester or $30 for the year</strong>, depending on
              your planned involvement with the club.{" "}
              <strong>
                This fee must be paid before the first race in which you participate.
                If you do not pay, you cannot race.
              </strong>
            </p>
            <p>
              In addition to the flat competition fee described above, all competing
              athletes will be asked to{" "}
              <strong>pay an additional fee for every meet they compete in</strong>.
              For all meets except Nationals and road races, the fee is{" "}
              <strong>$5 per meet</strong>. Money can be paid to the club either
              through Venmo (umdclubrunning) or in cash to one of the treasurers.
            </p>
            <p>
              Please understand that running this club is expensive; the club
              typically spends $15–35 <strong>per runner at every meet</strong>, and
              more if it is an overnight meet where we have to get hotel rooms. We
              feel that for the amount of opportunities the club provides, $20 per
              semester or $30 for the year is a great price for a great team
              experience.
            </p>
            <p>
              The payment for National Championship meets is slightly different.
              Since we often travel further for Nationals, the cost will depend on
              how we are traveling. Details on Nationals and trip cost will be sent
              out at a later date.
            </p>
            <p>
              If you are concerned about the costs associated with competing, please
              talk to an officer. We do not want finances to prevent people from
              being able to compete.
            </p>
            <p>
              Our fees are by far the lowest of any club sports team at this
              University, and the lowest among almost all other club running teams in
              our conference. This is because we have been very effective with
              fundraising in the past, and we are also an SGA recognized club,
              meaning we get yearly funding from the SGA. Our main source of
              fundraising is working concessions for football games in the Fall.
              Thus,{" "}
              <strong>
                if you are competing with us in any capacity (cross country, track,
                road races, etc.) then we require you to do at least two fundraisers
                with us.
              </strong>{" "}
              Think of helping us with fundraisers as a sort of substitute for not
              having to pay hundreds of dollars in competition and race fees. More
              specific information will become available as a fundraising event
              approaches.
            </p>

            <p className="gdoc-closing">
              <strong>Thank you and welcome again to Maryland Club Running!!!!!</strong>
            </p>
            <img src={joinusFooter} alt="Club Running team" className="gdoc-banner" />
          </div>
        </section>
      </div>
    </div>
  );
}
