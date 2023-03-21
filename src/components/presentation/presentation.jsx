import React from 'react';
import logo from '../../assets/logo.png';
import platformArchitecture from '../../assets/platform_architecture.png';
import homePage from '../../assets/home_page.png';
import arrow from '../../assets/icons/arrow.svg'
import './presentation.css'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Presentation = () => {

	return (
		<section id="presentation" className="section_wrapper">
			<h3>
				Presentazione SOPHìA
			</h3>
			<div>
			<Carousel
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				infiniteLoop={true}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<button
							type="button"
							onClick={onClickHandler}
							title={label}
							className="slider__button left"
						>
							<img src={arrow} alt="arrow" />
						</button>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<button
							type="button"
							onClick={onClickHandler}
							title={label}
							className="slider__button right"
						>
							<img src={arrow} alt="arrow" />
						</button>
					)
				}
			>
				<div>
					<img src={logo} alt="scivolo del logo"/>
				</div>
				<div>
					<img src={platformArchitecture} alt="Architettura generale della piattaforma"/>
				</div>
				<div>
					<img src={homePage} alt="Pagina  iniziale"/>
				</div>
			</Carousel>
			</div>
		</section>
	)
}
