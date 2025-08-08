import Footer from "@app/components/organism/footer/Footer";
import { Nav } from "@app/components/organism/nav/Nav";
import PlayersRow from "@app/components/organism/players/Players";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoLogoTwitch, IoLogoYoutube } from "react-icons/io";

export const revalidate = 60; // ↔ rehidrata cada 60s (barato y cacheable)

function Space() {
	return (
		<span
			id="spacer"
			className="w-[100px]  font-bold tex-8xl flex justify-center items-center"
		>
			<div className="w-[10px] h-[10px] bg-white rounded-full"></div>
		</span>
	);
}
function LiveDot() {
	return (
		<div className="flex items-center space-x-2">
			{/* Punto intermitente */}
			<span className="relative flex h-3 w-3">
				<span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
			</span>
			{/* Texto */}
			<span className="text-white text-sm font-semibold uppercase">
				En directo
			</span>
		</div>
	);
}

export default function Home() {
	return (
		<div
			className=" text-white  bg-no-repeat bg-contain bg-right-bottom bg-fixed"
			style={{ backgroundImage: "url('/image/fondo-2.png')" }}
			id="home"
		>
			<Nav />
			<section className=" h-screen relative ">
				<video
					autoPlay
					loop
					muted
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="/video/back.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="absolute inset-0 w-full h-full flex items-center justify-center">
					<div className="text-center max-w-7xl flex items-center justify-center flex-col">
						<Image
							src="/image/logo.png"
							alt="Ronin FC Logo"
							width={300}
							height={300}
							className="mb-5"
						/>

						<h1 className="text-8xl font-bold mb-4">
							Rōnin FC: El nuevo guerrero de la Quarta Catalana
						</h1>
						<p className="text-2xl text-gray-300 text-balance">
							Nuevo en la Quarta Catalana y listo para romperla.
							Rōnin FC no viene a jugar “como siempre”, viene a
							cambiar el juego. Garra, estilo y cero miedo al
							ataque
						</p>
						<span className="text-2xl font-bold text-white mt-10 block bg-slate-950 rounded-full px-5 py-2">
							#HolaRoninCatalan
						</span>
					</div>
				</div>
			</section>
			<Marquee className="bg-gray-800 text-white p-5 text-center mb-20">
				<p className="text-2xl font-bold">
					Ronin FC lidera la Quarta Catalana
				</p>
				<Space />
				<p className="text-2xl font-bold">Próximo partido en casa</p>
				<Space />
				<p className="text-2xl font-bold ">
					Entradas ya disponibles en la web oficial del Ronin FC
				</p>
				<Space />
				<p className="text-2xl font-bold">
					¡Síguenos en redes sociales para más actualizaciones!
				</p>
				<Space />
				<p className="text-2xl font-bold">
					¡Únete a la comunidad de Rōnin FC y sé parte de la
					revolución del fútbol!
				</p>
			</Marquee>
			<section className=" text-white py-20" id="play_team">
				<div className="container mx-auto flex flex-row gap-16 items-center">
					<div className="mb-10 text-start flex flex-col gap-6 items-start w-full max-w-2xl">
						<div className="">
							<h1 className="font-bold text-2xl mb-4">
								Pasión y lucha en cada partido
							</h1>
							<h2 className="font-bold text-7xl mb-4">
								Rōnin FC: El Espíritu Samurai en la Quarta
								Catalana
							</h2>
							<div className="text-gray-300 text-2xl text-start flex flex-col gap-4">
								<p className="">
									Rōnin FC llega a la Quarta Catalana con la
									fuerza de una comunidad que no se rinde. En
									cada partido defendemos nuestros valores y
									luchamos juntos. Esta temporada, el césped
									será nuestro dojo y la afición, nuestra
									mejor arma.
								</p>
							</div>
						</div>
					</div>
					<div id="video-game" className="flex justify-center w-full">
						<video
							controls
							muted
							loop
							autoPlay
							className="w-full rounded-lg"
						>
							<source src="/video/welcome.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</section>
			<section id="frase_motivacional" className="text-white py-20 ">
				<div className="container mx-auto text-center">
					<div
						id="linea"
						className="w-1/2 mx-auto h-1 bg-blue-600 mb-20"
					></div>
					<h2 className="text-8xl font-bold mb-6">
						“En Rōnin FC no solo jugamos, luchamos cada minuto.”
					</h2>
					<p className="text-2xl text-gray-300 mb-4 text-balance">
						Esta es nuestra filosofía. Cada partido es una
						oportunidad para demostrar nuestra pasión y dedicación.
						Estamos aquí para dejar huella en la historia del
						fútbol.
					</p>
					<div
						id="linea"
						className="w-1/2 mx-auto h-1 bg-blue-600 mt-20"
					></div>
				</div>
			</section>
			<section className=" text-white py-20" id="about">
				<div className="container mx-auto gap-10 flex flex-row justify-center items-center ">
					<div className="md:w-1/2  w-[1200px] h-[500px] relative ">
						<Image
							src="/image/team.png"
							alt="Ronin FC Banner"
							fill
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="container mx-auto text-start max-w-2xl">
						<h2 className="text-8xl font-bold mb-6">
							Acerca de Rōnin FC
						</h2>
						<div className="text-gray-300">
							<p className="text-lg mb-4">
								Rōnin FC es un club de fútbol que nace con la
								misión de traer un nuevo enfoque al deporte. Con
								un equipo lleno de pasión y dedicación, estamos
								aquí para demostrar que el fútbol es más que un
								juego; es una forma de vida.
							</p>
							<p className="text-lg">
								Únete a nosotros en este emocionante viaje y sé
								parte de algo grande. Juntos, haremos historia
								en la Quarta Catalana.
							</p>
						</div>
						<ul
							id="tags"
							className="text-lg flex flex-wrap gap-2 mt-10"
						>
							<li className="inline-block mr-2  text-white px-5 py-1 rounded-full border-2 border-blue-700">
								#Fútbol
							</li>
							<li className="inline-block mr-2  text-white px-5 py-1 rounded-full border-2 border-blue-700">
								#Pasión
							</li>
							<li className="inline-block mr-2  text-white px-5 py-1 rounded-full border-2 border-blue-700">
								#Equipo
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="" id="blog">
				<ul className="container mx-auto flex flex-row gap-10 py-20">
					<li className="bg-gray-800 rounded-lg w-full max-w-2xl">
						<div
							id="short_video"
							className="relative overflow-hidden"
						>
							<video
								autoPlay
								loop
								muted
								className="w-full h-[300px] relative object-contain object-top rounded-t-lg z-10"
							>
								<source
									src="/video/short-4.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
							<video
								autoPlay
								loop
								muted
								className="absolute top-0 left-0 blur-md w-full h-full object-cover  rounded-t-lg"
							>
								<source
									src="/video/short-4.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="p-10">
							<h3 className="text-4xl font-bold mb-4">
								La historia de Rōnin FC: Un nuevo comienzo
							</h3>
							<p className="text-lg text-gray-300 mb-4">
								Rōnin FC nace con la visión de revolucionar el
								fútbol en la Quarta Catalana. Con un equipo
								dedicado y una pasión inquebrantable, estamos
								listos para enfrentar cualquier desafío.
							</p>
						</div>
					</li>
					<li className="bg-gray-800 rounded-lg w-full max-w-2xl">
						<div
							id="short_video"
							className="relative overflow-hidden"
						>
							<video
								autoPlay
								loop
								muted
								className="w-full h-[300px] relative object-contain object-top rounded-t-lg z-10"
							>
								<source
									src="/video/short-5.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
							<video
								autoPlay
								loop
								muted
								className="absolute top-0 left-0 blur-md w-full h-full object-cover  rounded-t-lg"
							>
								<source
									src="/video/short-5.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="p-10">
							<h3 className="text-4xl font-bold mb-4">
								El espíritu guerrero de Rōnin FC
							</h3>
							<p className="text-lg text-gray-300 mb-4">
								En Rōnin FC, cada jugador es un guerrero. Nos
								dedicamos a entrenar duro, jugar con pasión y
								demostrar que el fútbol es más que un deporte;
								es una forma de vida. Estamos aquí para dejar
								huella en la historia del fútbol.
							</p>
						</div>
					</li>
					<li className="bg-gray-800  rounded-lg w-full max-w-2xl">
						<div
							id="short_video"
							className="relative overflow-hidden"
						>
							<video
								autoPlay
								loop
								muted
								className="w-full h-[300px] relative object-contain object-top rounded-t-lg z-10"
							>
								<source
									src="/video/short-6.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
							<video
								autoPlay
								loop
								muted
								className="absolute top-0 left-0 blur-md w-full h-full object-cover  rounded-t-lg"
							>
								<source
									src="/video/short-6.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="p-10">
							<h3 className="text-4xl font-bold mb-4">
								La comunidad de Rōnin FC: Más que un equipo
							</h3>
							<p className="text-lg text-gray-300 mb-4">
								En Rōnin FC, creemos que somos más que un
								equipo; somos una comunidad. Nos apoyamos
								mutuamente, trabajamos juntos y celebramos
								nuestros logros juntos. Únete a nosotros y sé
								parte de esta revolución del fútbol.
							</p>
						</div>
					</li>
				</ul>
			</section>
			<section className=" text-white py-20" id="play_team">
				<div className="container mx-auto flex flex-row gap-16 items-center">
					<div className="mb-10 text-start flex flex-col gap-6 items-start w-full max-w-2xl">
						<div className="">
							<h1 className="font-bold text-4xl mb-4">
								<LiveDot />
							</h1>
							<h2 className="font-bold text-8xl mb-4">
								Rōnin FC vs elRayo FC
							</h2>
							<div className="text-gray-300 text-start flex flex-col gap-4">
								<p className="">
									Vive minuto a minuto la emoción del
									encuentro entre Rōnin FC y elRayo FC de
									Santa Coloma. El marcador está 2 a 1 y todo
									puede pasar en lo que queda de partido.
								</p>
								<p>
									No te pierdas ni un segundo de la acción,
									cada minuto cuenta y cada jugada puede ser
									decisiva. Y no olvides, ¡el fútbol es un
									juego de equipo!
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-4 items-center justify-center">
							<button className="bg-blue-600 text-white flex flex-row gap-2 justify-center items-center text-2xl px-8 py-2 rounded-full hover:bg-blue-700 transition">
								Ver Partido
							</button>
							<div className="w-[50px] h-[50px] rounded-full  border-2 border-blue-700 flex justify-center items-center">
								<IoLogoTwitch size={24} />
							</div>
							<div className="w-[50px] h-[50px] rounded-full  border-2 border-blue-700 flex justify-center items-center">
								<IoLogoYoutube size={24} />
							</div>
						</div>
					</div>
					<div id="video-game" className="flex justify-center w-full">
						<video
							controls
							muted
							loop
							autoPlay
							className="w-full rounded-lg"
						>
							<source src="/video/play.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</section>
			<section className="text-white py-20" id="team">
				<div className="container mx-auto text-center">
					<h2 className="text-8xl font-bold mb-6">
						Conoce a nuestros jugadores
					</h2>
					<p className="text-2xl text-gray-300 mb-20">
						En Rōnin FC, cada jugador es un guerrero. Conoce a
						quienes defienden nuestros colores y luchan por la
						victoria en cada partido.
					</p>
					<PlayersRow />
				</div>
			</section>

			<Footer />
		</div>
	);
}
