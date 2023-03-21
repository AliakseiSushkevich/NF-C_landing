import React from 'react';
import logo from '../../assets/logo.png';
import platformArchitecture from '../../assets/platform_architecture.png';
import homePage from '../../assets/home_page.png';
import './presentation.css'

export const Presentation = () => {

	return (
		<section id="presentation" className="section_wrapper">
			<h3>
				Presentazione SOPHìA
			</h3>
			<div>
				<img src={logo} alt="scivolo del logo"/>
				<img src={platformArchitecture} alt="Architettura generale della piattaforma"/>
				<img src={homePage} alt="Pagina  iniziale"/>
			</div>
		</section>
	)
}
