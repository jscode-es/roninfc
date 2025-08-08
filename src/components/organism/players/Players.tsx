export default function PlayersRow() {
	const players = [
		{
			name: "Javier Costa",
			img: "/image/jugador3.png",
			position: "Delantero",
			goles: 12,
			asistencias: 8,
			partidos: 25,
			description:
				"Jugador clave en el ataque, con gran capacidad goleadora y asistencias.",
			birtday: "1 de agosto de 1999",
			country: "Madrid",
		},
		{
			name: "Jonathan Pérez",
			img: "/image/jugador2.png",
			position: "Delantero",
			goles: 7,
			asistencias: 4,
			partidos: 19,
			description: "Delantero rápido y ágil, siempre buscando el gol.",
			birtday: "17 de marzo de 1990",
			country: "Barcelona",
		},
		{
			name: "Silva Martínez",
			img: "/image/jugador8.png",
			position: "Lateral Izquierdo",
			goles: 15,
			asistencias: 10,
			partidos: 28,
			description: "Defensa sólido con capacidad de sumarse al ataque.",
			birtday: "17 de julio de 2004",
			country: "Brazil capital",
		},
		{
			name: "Morata García",
			img: "/image/jugador6.png",
			position: "Portero",
			goles: 4,
			asistencias: 2,
			partidos: 12,
			description: "Portero destacado, clave en la defensa del equipo.",
			birtday: "17 de marzo de 2003",
			country: "Asturias",
		},
		{
			name: "Sergio González",
			img: "/image/jugador5.png",
			position: "Lateral Derecho",
			goles: 9,
			asistencias: 5,
			partidos: 20,
			description:
				"Lateral derecho con gran capacidad defensiva y ofensiva.",
			birtday: "14 de agosto de 1985",
			country: "Mataró",
		},
	];

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 bg-[#030712] p-4 rounded-lg shadow-lg">
				{players.map((player, index) => (
					<div
						key={index}
						className="rounded-lg bg-gray-900  hover:scale-105 transition-transform duration-300 relative"
					>
						<div className="absolute -top-6 left-0 w-full z-10 flex justify-center">
							<span className="text-white bg-blue-500  text-sm px-4 py-1  text-center mt-3 rounded-2xl min-w-[120px]">
								{player.position}
							</span>
						</div>
						<div className="flex flex-col items-center bg-gray-900 p-3 mt-4 relative">
							<div className="flex items-center text-center flex-col gap-2 mb-5 mt-2">
								<h2 className="font-bold text-4xl">
									{player.name}
								</h2>
								<p className="text-gray-400 text-sm text-balance">
									Nacido en el {player.birtday}, en{" "}
									{player.country}
								</p>
							</div>
						</div>
						<img
							src={player.img}
							alt={player.name}
							className="w-full aspect-square object-cover "
						/>
						<div className="p-4 text-gray-300 text-center">
							<p>{player.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
