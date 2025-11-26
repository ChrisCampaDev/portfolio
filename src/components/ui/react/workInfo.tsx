import { useState } from "react";

import CardProject from "./cardProject";

const workProject = () => {
	const [filter, setFilter] = useState();

	return (
		<>
			<h2 className="text-center py-2">Proyectos</h2>
			<div className="flex justify-center items-center">Stack</div>
			<div className="w-4/5 m-auto grid  gap-5 md:grid-cols-3 sm:grid-cols-1 ">
				<CardProject
					stacks={["Nextjs", "Tailwindcss", "SharcnUI"]}
					description="Sitio oficial de la empresa D'Concepto que radica en la Habana. Desarrollada por la empresa Medialityc, fui participante del equipo de desarrollo"
					links={[
						{
							site: "Google",
							url: "https://dconcepto.com",
						},
					]}
					title="D'Concepto"
				/>
				<CardProject
					stacks={["Astro", "Tailwindcss"]}
					title="Printur3D"
					description="Proyecto de impresion 3d en la Habana cuyo objetivo era tener una web donde presentar los productos que brinda al publico asi como mostrar informacion sobre su recorrido y experiencia en el sector"
					links={[
						{
							site: "Google",
							url: "",
						},
					]}
				/>
				<CardProject
					stacks={["React", "MaterialUI"]}
					description="Aplicacion software desarrollada por Alsoftpro SRL para las oficinas de Aguas de la Habana. Este software se encarga de gestionar los pagos de los clientes de la provincia de La Habana"
					title="ALCOM"
				/>
				<CardProject
					stacks={["React", "MaterialUI", "Tailwindcss"]}
					title="Oficina Digital"
					description="Sistema de gestión digital para oficinas que permite la administración eficiente de documentos y procesos internos. Ofrece una interfaz intuitiva para optimizar el flujo de trabajo administrativo."
				/>
				<CardProject
					stacks={["Astro", "React", "Tailwindcss"]}
					title="Portfolio web"
					description=""
					links={[
						{ site: "Google", url: "" },
						{ site: "GitHub", url: "" },
					]}
				/>
				<CardProject
					stacks={["Astro", "Tailwindcss"]}
					title="Wise Finance"
					description="Plataforma web de servicios financieros inteligentes. Ofrece herramientas modernas para la gestión financiera personal y empresarial con un diseño limpio y optimizado para el rendimiento."
					links={[{ site: "Google", url: " https://financewisesolutions.com" }]}
				/>
			</div>
		</>
	);
};

export default workProject;
