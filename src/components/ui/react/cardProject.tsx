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
		<div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-t-xl shadow-xs">
			<div className="bg-gray-500 h-50 rounded-t-xl">
				<img className="rounded-t-xl" src={imageUrl} alt="" />
			</div>
			<div className="p-6 text-center pb-2">
				<h3 className="text-center text-xl">{title}</h3>
				<div className="flex gap-2 justify-center items-center">
					{stacks.map((stack, index) => (
						<span
							key={index}
							className="inline-flex items-center bg-brand-softer
							border border-brand-subtle text-fg-brand-strong text-lg font-medium px-2.5 py-1.5
							rounded-sm bg-blue-900 text-white"
						>
							{stack}
						</span>
					))}
				</div>

				<p className="py-3 border-b-2 border-blue-600 font-semibold tracking-tight text-heading">
					{description}
				</p>

				<div className="flex gap-5 justify-center items-center p-2">
					{Array.isArray(links) ? (
						links.map((link) => {
							const label = link.site === "GitHub" ? "Repositorio" : "Enlace";
							return (
								<div
									key={link.id ?? link.url}
									className={` ${link.site === "GitHub" ? "bg-black text-white" : "bg-blue-500 text-white"} px-2 py-1.5 rounded-sm flex gap-2 `}
								>
									{link.site === "GitHub" ? <Github /> : <Globe />}
									<a
										key={link.id ?? link.url}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{label}
									</a>
								</div>
							);
						})
					) : (
						<p className="text-2xl text-red-500 font-semibold">Web Privada</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default CardProject;
