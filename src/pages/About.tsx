import './pages.scss';

import resumePDF from '../assets/terry-francis-resume.pdf';
import SinglePagePDFViewer from '../components/pdf/SinglePage';

export function About() {
    return (
        <main className="wrapper">
            <section className="hero about">
                <h1>Resume of Terry S. Francis</h1>
                <article>
                    <p>World-Class Software Engineering</p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <div className="about">
                    <h2>About</h2>
                    <p>
                        Drive value by helping companies attract and retain
                        customers through architecting and developing user
                        interfaces and web applications that deliver an
                        excellent customer experience.
                    </p>
                    <p>
                        Proactive senior software engineer who specializes in
                        leveraging best-in-class principles and practices to
                        architect and develop solutions that fulfill business
                        objectives and maximize return on investment.
                        Simultaneously providing value to customers and
                        cultivating a team culture that engenders professional
                        and personal growth for team members. A well-rounded,
                        full-stack software engineer with both front office and
                        back-office experience, who brings a broad understanding
                        of technology, leadership, and the interrelationships
                        between people, processes, and operations in complex
                        business environments.
                    </p>
                    <p>
                        Specialties: Software Development Management; Software
                        Engineering; Web Development; Front End Development;
                        Micro Frontend Architecture; Single-Spa; CSS; SASS;
                        HTML; JavaScript; TypeScript; Web Components; React;
                        Webpack; Redux; Node; Angular; JSON; OData; AJAX;
                        WordPress; Cypress; Jest; C#; SQL; VB.Net; VBScript;
                        VBA; Java; XML; XSLT; XPath; XQuery; WCM; SDL Tridion;
                        Sitecore; MongoDB; MarkLogic; SQL Server; Visual Studio;
                        Eclipse; IntelliJ; Visual Studio Code; Android Studio;
                        GitHub; GitLab; Bitbucket; Azure Cloud
                    </p>
                </div>
                <div className="competencies">
                    <h2>Core Competencies</h2>
                    <ul>
                        <li>
                            Architects, develops and modifies software systems,
                            using scientific analysis and mathematical models to
                            predict and measure outcome and consequences of
                            design.
                        </li>
                        <li>
                            Develops, creates, and modifies systems,
                            applications, or UI software; analyzes and designs
                            databases, working individually or coordinating
                            development as part of a team.
                        </li>
                        <li>
                            Analyzes user needs and software requirements to
                            determine feasibility of design within time and cost
                            constraints.
                        </li>
                        <li>
                            Stores, retrieves, and manipulates data for analysis
                            of system capabilities and requirements.
                        </li>
                        <li>
                            Confers with other staff to design system and to
                            obtain information on project limitations and
                            capabilities, performance requirements and
                            interfaces.
                        </li>
                        <li>
                            Consults with clients or other departments on
                            project status, proposals, or technical issues, such
                            as software system design or maintenance.
                        </li>
                        <li>
                            Designs software or customizes software for client
                            use with the aim of optimizing operational
                            efficiency.
                        </li>
                        <li>
                            Modifies existing software to correct errors, allow
                            it to adapt to new hardware, or to improve its
                            performance.
                        </li>
                        <li>
                            Develops and directs software system testing and
                            validation procedures, programming, and
                            documentation.
                        </li>
                        <li>
                            Supervises the work of programmers, technologists
                            and technicians and other engineering and scientific
                            personnel.
                        </li>
                        <li>
                            Develops, customizes, and integrates content
                            management systems.
                        </li>
                        <li>
                            Develops and implements software across multiple
                            platforms and industries.
                        </li>
                    </ul>
                </div>
                <div className="experience">
                    <h2>Experience</h2>
                    <h3>Employers</h3>
                    <ul>
                        <li>BlackRock</li>
                        <li>Perficient</li>
                        <li>Travel Syndication Technology</li>
                        <li>State Farm</li>
                        <li>Tahzoo (formerly HintTech)</li>
                        <li>NterAct Technologies</li>
                        <li>Cap Gemini Ernst &amp; Young</li>
                        <li>Ernst & Young Consulting</li>
                        <li>
                            Science Applications International Corporation
                            (SAIC)
                        </li>
                        <li>International Business Machines (IBM)</li>
                    </ul>
                    <h3>Clients</h3>
                    <ul>
                        <li>
                            National Alumnae Association of Spelman College
                            (NAASC)
                        </li>
                        <li>CareerFoundry</li>
                        <li>SapientRazorfish</li>
                        <li>AutoTrader</li>
                        <li>Abbott Nutrition</li>
                        <li>Centers for Medicare &amp; Medicaid Services</li>
                        <li>Gugi's Global Foods</li>
                        <li>SaraRose Company</li>
                        <li>Resurrected Church Ministries</li>
                        <li>Trinit&eacute; 7 Enterprises</li>
                        <li>MARTA Employees Club</li>
                        <li>Essential Management Group</li>
                        <li>African American Golf Association</li>
                    </ul>
                </div>
                <div className="view-container">
                    <div className="resume">
                        <div className="view-pdf">
                            <SinglePagePDFViewer pdf={resumePDF} width={950} />
                        </div>
                        <div className="view-badge">
                            <iframe
                                title="LinkedIn Profile Badge"
                                width="350"
                                height="320"
                                src="linkedin-profile-badge.html"
                            ></iframe>
                        </div>
                    </div>
                    <div className="ad-columns"></div>
                </div>
            </section>
        </main>
    );
}
