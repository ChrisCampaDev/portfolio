import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formStatus, setFormStatus] = useState<{
		type: "success" | "error" | "";
		message: string;
	}>({ type: "", message: "" });

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) return;

		setIsSubmitting(true);
		setFormStatus({ type: "", message: "" });

		// --- Configuración de EmailJS ---
		// 1. Regístrate en https://www.emailjs.com/
		// 2. Crea un nuevo servicio de correo (p. ej., Gmail). Copia el "Service ID".
		// 3. Crea una nueva plantilla de correo. Copia el "Template ID".
		//    - Asegúrate de que tu plantilla use las variables {{from_name}}, {{from_email}}, y {{message}}.
		// 4. Obtén tu "Public Key" de la sección "Account".
		// 5. Reemplaza los valores de abajo con tus claves.

		const serviceID = "YOUR_SERVICE_ID";
		const templateID = "YOUR_TEMPLATE_ID";
		const publicKey = "YOUR_PUBLIC_KEY";

		emailjs
			.sendForm(serviceID, templateID, form.current, publicKey)
			.then(
				() => {
					setFormStatus({
						type: "success",
						message: "¡Mensaje enviado con éxito!",
					});
					form.current?.reset();
				},
				(error) => {
					setFormStatus({
						type: "error",
						message: "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
					});
					console.error("FAILED...", error.text);
				},
			)
			.finally(() => {
				setIsSubmitting(false);
				// Oculta el mensaje después de 5 segundos
				setTimeout(() => {
					setFormStatus({ type: "", message: "" });
				}, 5000);
			});
	};

	return (
		<section className="w-full max-w-2xl mx-auto px-4 py-12">
			<div className="text-center mb-10">
				<h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
					Contáctame
				</h2>
				<p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
					¿Tienes alguna pregunta o propuesta? Rellena el formulario.
				</p>
			</div>

			<form
				ref={form}
				onSubmit={sendEmail}
				className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
			>
				<div>
					<label
						htmlFor="from_name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
					>
						Tu Nombre
					</label>
					<input
						type="text"
						id="from_name"
						name="from_name"
						className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="John Doe"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="from_email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
					>
						Tu Correo Electrónico
					</label>
					<input
						type="email"
						id="from_email"
						name="from_email"
						className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="tu@correo.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
					>
						Tu Mensaje
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="Escribe tu mensaje aquí..."
						required
					></textarea>
				</div>
				<div className="text-center">
					<button
						type="submit"
						disabled={isSubmitting}
						className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800 transition-colors duration-300"
					>
						{isSubmitting ? "Enviando..." : "Enviar Mensaje"}
					</button>
				</div>

				{formStatus.message && (
					<p
						className={`mt-4 text-center text-sm font-medium ${
							formStatus.type === "success"
								? "text-green-600 dark:text-green-400"
								: "text-red-600 dark:text-red-400"
						}`}
					>
						{formStatus.message}
					</p>
				)}
			</form>
		</section>
	);
};

export default ContactForm;
