"use client";
import ProjectsCard from "../components/ProjectsCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-2 p-4 w-screen items-center md:gap-4">
      <ProjectsCard
        imageSrc="/images/portfolio-images/witw-tablet.png"
        imageAlt="screenshot of countries app for tablet"
        imageSrcM="/images/portfolio-images/witw-mobile.png"
        imageAltM="screenshot of countries app for mobile"
        tagsArray={[
          "reactjs",
          "nextjs",
          "tailwind-css",
          "server-side-rendering",
          "mobile-first",
        ]}
        title="Where in the world?"
        tldr="Web application for displaying countries and their flags."
        description="This web application utilizes an external REST api for retrieving country data (https://restcountries.com/). Features include search and filter fields, dark mode, dynamic routes, responsive media breakouts, etc. Data is fetched upon the user clicking the 'fetch data' button, and the data is saved to local storage. Deployed with vercel."
        liveLink="https://rest-countries-beryl-five.vercel.app/"
        githubLink="https://github.com/lawrence-yoon/rest-countries"
        // handleClick={() => alert("clicked world")}
      />
      <ProjectsCard
        imageSrc="/images/portfolio-images/space-tourism-tablet.png"
        imageAlt="screenshot of space tourism app for tablet"
        imageSrcM="/images/portfolio-images/space-tourism-mobile2.png"
        imageAltM="screenshot of space tourism app for mobile"
        tagsArray={["reactjs", "nextjs", "styled-components", "figma"]}
        title="Space Tourism"
        tldr="Web application for showcasing space tourism, and the people, destinations, and  technologies involved."
        description="This web application was created using the designer's figma design file. Features include dynamic routing, styled components with css modules, responsive media breakouts. Deployed with vercel."
        liveLink="https://space-tourism-three-rouge.vercel.app/"
        githubLink="https://github.com/lawrence-yoon/space-tourism"
        // handleClick={() => alert("clicked space")}
      />
      <ProjectsCard
        imageSrc="/images/portfolio-images/taskboard-preview.png"
        imageAlt="screenshot of taskboard app"
        tagsArray={[
          "reactjs",
          "vitejs",
          "tailwind-css",
          "nodejs",
          "expressjs",
          "mongodb",
          "mongoosejs",
        ]}
        title="Taskboard"
        tldr="Kanban web application to keep track of tasks."
        description="Full stack application made with the MERN (mongodb, expressjs, reactjs, nodejs)stack. Data is stored in a mongodb database. Passwords are hashed and salted, and session authorization with JWT tokens. Local storage version is available at the try me route. Deployed with cyclic."
        liveLink="https://taskboard.larr.dev/"
        githubLink="https://github.com/lawrence-yoon/do-list"
        // handleClick={() => alert("clicked taskboard")}
      />
    </div>
  );
}
