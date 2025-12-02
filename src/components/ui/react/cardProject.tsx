import { Github, Globe } from "lucide-react";

interface LinksProps {
	site: string;
	url: string;
}

interface CardProjectProps {
	imageUrl?: string;
	stacks: string[];
	title: string;
	description: string;
	links?: LinksProps[];
}

const CardProject = (props: CardProjectProps) => {
	const { title, description, imageUrl, stacks, links } = props;

	return (
		<div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-800/60">
			{/* Image Section */}
			<div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={`Imagen del proyecto ${title}`}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
						<span className="text-lg font-bold text-gray-500 dark:text-gray-400">
							{title}
						</span>
					</div>
				)}
			</div>

			{/* Content Section */}
			<div className="flex flex-1 flex-col p-6">
				<h3 className="text-xl font-bold text-gray-900 dark:text-white">
					{title}
				</h3>
				<p className="mt-2 flex-1 text-base text-gray-600 dark:text-gray-300">
					{description}
				</p>

				{/* Stacks Section */}
				<div className="mt-4 flex flex-wrap gap-2">
					{stacks.map((stack) => (
						<span
							key={stack}
							className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
						>
							{stack}
						</span>
					))}
				</div>
			</div>

			{/* Footer Links Section */}
			<div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
				<div className="flex items-center justify-center gap-4">
					{links && links.length > 0 ? (
						links.map((link) => (
							<a
								key={link.url}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
							>
								{link.site === "GitHub" ? (
									<Github size={18} />
								) : (
									<Globe size={18} />
								)}
								<span>
									{link.site === "GitHub" ? "Repositorio" : "Ver Sitio"}
								</span>
							</a>
						))
					) : (
						<p className="text-sm font-semibold text-gray-500">
							Proyecto Privado
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default CardProject;
