import React, {useState} from 'react';
import './header.css'
import useMediaQuery from '../../utils/hooks/useMediaQuery.jsx';

export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 880px)')

	const [isOpen, setIsOpen] = useState(false)

	function handleMenuClick() {

	}

	return (
		<header>
			<div className="container header-container">
				<h1>
					<a href="#" className="font_xxl">NF&C</a>
				</h1>
				{
					isMobile
						? (
							<div>
								<button type="button" onClick={handleMenuClick} />
							</div>
						)
						: (
							<nav>
								<ul className="font_m">
									<li>
										<a href="#about">Chi siamo</a>
									</li>
									<li>
										<a href="#contact">Contattaci</a>
									</li>
									<li>
										<a href="#presentation">Presentazione SOPHìA</a>
									</li>
									<li>
										<a href="#blog">Il nostro BLOG</a>
									</li>
									<li>
										<a href="#purchase">Acquisto</a>
									</li>
								</ul>
							</nav>
						)
				}
			</div>
		</header>
	)
}

const MenuOverlay = () => {
	return (
		<div className="menu_overlay">
			<nav>
				<ul className="font_m">
					<li>
						<a href="#about">Chi siamo</a>
					</li>
					<li>
						<a href="#contact">Contattaci</a>
					</li>
					<li>
						<a href="#presentation">Presentazione SOPHìA</a>
					</li>
					<li>
						<a href="#blog">Il nostro BLOG</a>
					</li>
					<li>
						<a href="#purchase">Acquisto</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
