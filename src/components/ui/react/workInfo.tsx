/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { useState } from "react";
import CardProject from "./cardProject";

// Define the type for a project link
interface Link {
	site: string;
	url: string;
}

// Define the type for a project
interface Project {
	id: number;
	title: string;
	description: string;
	stacks: string[];
	links?: Link[];
	imageUrl?: string;
}

// Centralized project data
const allProjects: Project[] = [
	{
		id: 1,
		title: "D'Concepto",
		description:
			"Sitio oficial de la empresa D'Concepto. Como parte del equipo de Medialityc, participé en el desarrollo de esta plataforma web corporativa.",
		stacks: ["Nextjs", "Tailwindcss", "SharcnUI"],
		links: [{ site: "Google", url: "https://dconceptos.com/" }],
	},
	{
		id: 2,
		title: "Printur3D",
		description:
			"Web para un proyecto de impresión 3D, mostrando su catálogo de productos, servicios e información de contacto para facilitar la interacción con los clientes.",
		stacks: ["Astro", "Tailwindcss"],
		links: [{ site: "Google", url: "https://printur.pages.dev" }],
	},
	{
		id: 3,
		title: "ALCOM",
		description:
			"Aplicación desarrollada por Alsoftpro SRL para Aguas de la Habana. Este software gestiona los pagos de los clientes en la capital.",
		stacks: ["React", "MaterialUI"],
	},
	{
		id: 4,
		title: "Oficina Digital",
		description:
			"Sistema de gestión para oficinas que optimiza la administración de documentos y procesos internos, mejorando el flujo de trabajo administrativo.",
		stacks: ["React", "MaterialUI", "Tailwindcss"],
	},
	{
		id: 5,
		title: "Portfolio Personal",
		description:
			"Mi portafolio personal donde muestro mis habilidades y proyectos. Diseñado para ser visualmente atractivo, rápido y fácil de navegar.",
		stacks: ["Astro", "React", "Tailwindcss"],
		links: [
			{ site: "GitHub", url: "https://github.com/ChrisCampaDev/portfolio" },
		],
	},
	{
		id: 6,
		title: "Wise Finance",
		description:
			"Plataforma de servicios financieros que ofrece herramientas modernas para la gestión de finanzas personales y empresariales con un diseño limpio.",
		stacks: ["Astro", "Tailwindcss"],
		links: [{ site: "Google", url: "https://financewisesolutions.com" }],
	},
];

// Get unique stacks from all projects and add "Todos" category
const allStacks = [
	"Todos",
	...Array.from(new Set(allProjects.flatMap((p) => p.stacks))),
];

const WorkProject = () => {
	// State to hold the currently displayed projects
	const [filteredProjects, setFilteredProjects] =
		useState<Project[]>(allProjects);
	// State to track the active filter
	const [activeFilter, setActiveFilter] = useState<string>("Todos");

	const handleFilterClick = (stack: string) => {
		setActiveFilter(stack);
		if (stack === "Todos") {
			setFilteredProjects(allProjects);
		} else {
			const filtered = allProjects.filter((project) =>
				project.stacks.includes(stack),
			);
			setFilteredProjects(filtered);
		}
	};

	return (
		<section className="w-full max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
					Mis Proyectos
				</h2>
				<p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
					Una selección de proyectos en los que he trabajado. Filtra por
					tecnología para ver más.
				</p>
			</div>

			{/* Filter Buttons */}
			<div className="flex justify-center items-center flex-wrap gap-3 mb-12">
				{allStacks.map((stack) => (
					<button
						key={stack}
						onClick={() => handleFilterClick(stack)}
						className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${
								activeFilter === stack
									? "bg-blue-600 text-white shadow-lg scale-105"
									: "bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
							}`}
					>
						{stack}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{filteredProjects.map((project) => (
					<CardProject
						key={project.id}
						title={project.title}
						description={project.description}
						stacks={project.stacks}
						links={project.links}
						imageUrl={project.imageUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default WorkProject;
