"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Nav() {
	// Estado para controlar si está en la parte superior
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0); // si scroll > 0, cambia a fondo negro
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={` text-white p-5 fixed w-full z-50 transition-colors duration-300 ${
				isScrolled ? "bg-slate-950" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center justify-center">
					<Image
						src="/image/logo.png"
						alt="Ronin FC Logo"
						width={50}
						height={50}
						className="mr-3"
					/>
					<div className="flex flex-col">
						<span className="text-xl md:text-2xl font-bold">
							Rōnin FC
						</span>
						<small className="bg-pink-500 rounded-2xl px-2  text-[8px] md:text-[10px] text-white uppercase">
							Pagina no oficial
						</small>
					</div>
				</div>
				<ul className=" space-x-6 text-xl hidden md:flex">
					<li>
						<a href="#home" className="hover:text-gray-300">
							Inicio
						</a>
					</li>
					<li>
						<a href="#about" className="hover:text-gray-300">
							Acerca de
						</a>
					</li>
					<li>
						<a href="#team" className="hover:text-gray-300">
							Equipo
						</a>
					</li>
					<li>
						<a href="#team" className="hover:text-gray-300">
							Clasificación
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-gray-300">
							Contacto
						</a>
					</li>
				</ul>
				<div>
					<button className="bg-blue-600 text-white px-3 py-1  md:px-4 md:py-2 rounded-full hover:bg-blue-700 transition">
						<span className="hidden md:inline">
							¡Únete al equipo!
						</span>
						<span className="md:hidden">Unirse</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
