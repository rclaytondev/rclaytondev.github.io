import { ProjectData, PROJECTS } from "./projects";

import "../stylesheets/click-effects.css";
import "../stylesheets/scrollbar.css";
import "../stylesheets/style.css";

import "../stylesheets/default-layout.css";
import "../stylesheets/wide-layout.css";

function Project({ id, title, description, button }: ProjectData) {
	const imageStyle = { backgroundImage: `url(/${id}.png)` };
	return (
		<article id={id}>
			<div className="background-image" style={imageStyle}></div>
			<div className="project-link">
				<div className="project-text">
					<p className="project-description-title">{title}</p>
				</div>
			</div>
		</article>
	);
};

export default function Portfolio() {
	const projects = PROJECTS.map(p => (<Project {...p} key={p.id}/>));
	return (<section> {projects} </section>);
}
