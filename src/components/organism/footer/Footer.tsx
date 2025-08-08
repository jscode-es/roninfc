import Image from "next/image";

export default function Footer() {
	return (
		<footer className=" text-white py-8 mt-8 mb-20 px-8">
			<div
				id="linea"
				className="w-1/2 mx-auto h-1 bg-blue-600 mb-24"
			></div>
			<div className="container mx-auto px-4 flex justify-center items-center  gap-20">
				{/* Logo y descripción */}
				<div className="flex flex-col text-center items-center space-x-4 max-w-xl">
					<Image
						src="/image/logo.png"
						alt="Ronin FC Logo"
						width={100}
						height={100}
					/>
					<div>
						<h2 className="text-3xl font-bold">Rōnin FC</h2>
						<p className="mt-2 text-lg text-gray-400 text-balance">
							El espíritu samurái en cada partido. Orgullo y
							pasión en la Quarta Catalana.
						</p>
					</div>
				</div>

				{/* Enlaces rápidos */}
			</div>

			{/* Línea inferior */}
			<div className=" pt-4 text-center text-gray-500 text-sm">
				© {new Date().getFullYear()} Ronin FC. Todos los derechos
				reservados.
				<br />
				<span className="text-blue-500 font-semibold mt-4 block">
					{" "}
					Web desarrollada y diseñada por Sergio González Garrido (
					<a href="mailto:sgonzalez@jscode.es">sgonzalez@jscode.es</a>
					)
				</span>
			</div>
		</footer>
	);
}
