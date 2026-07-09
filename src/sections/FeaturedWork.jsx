import "../styles/featured.css";

import ProjectCard from "../components/ProjectCard";

const project1 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80";
const project2 = "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80";
const project3 = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80";

const projects = [

    {
        id:"01",

        title:"Coffee Studio",

        category:"Brand Identity",

        description:
        "Complete branding system including logo, packaging and social media.",

        image:project1
    },

    {
        id:"02",

        title:"Urban Fashion",

        category:"Visual Identity",

        description:
        "Editorial visual identity for a modern clothing brand.",

        image:project2
    },

    {
        id:"03",

        title:"Minimal Agency",

        category:"Website Design",

        description:
        "Creative website experience with bold typography and motion.",

        image:project3
    }

];

const FeaturedWork = () => {

    return (

        <section className="featured-work">

            <div className="featured-title">

                <p>
                    Selected Projects
                </p>

                <h1>

                    Featured
                    <br/>

                    Work

                </h1>

            </div>

            <div className="projects">

                {projects.map((project)=>(

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>

        </section>

    );

};

export default FeaturedWork;