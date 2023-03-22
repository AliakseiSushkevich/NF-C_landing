import React, {useEffect, useState} from 'react';
import './header.css'
import useMediaQuery from '../../utils/hooks/useMediaQuery.jsx';
import close from '../../assets/icons/close.svg'
import menu from '../../assets/icons/menu.svg'

export const Header = () => {
	const isMobile = useMediaQuery('(max-width: 880px)')

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		body.className = isOpen ? 'blocked' : ''
	}, [isOpen])

	function handleMenuClick() {
		setIsOpen(prevState => !prevState)
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
							<>
								<button
									type="button"
									className={isOpen ? 'menu_btn open' : 'menu_btn'}
									onClick={handleMenuClick}
								>
									<img
										src={isOpen ? close : menu}
										alt={isOpen ? 'chiudere il menu' : 'aprire il menu'}
									/>
								</button>
								<MenuOverlay handleMenuClick={handleMenuClick} isOpen={isOpen} />
							</>
						)
						: (
							<nav>
								<ul className="font_l">
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

const MenuOverlay = ({ handleMenuClick, isOpen }) => {
	return (
		<div className={isOpen ? 'menu_overlay open' : 'menu_overlay'}>
			<nav>
				<ul>
					<li>
						<a onClick={handleMenuClick} href="#about">
							Chi siamo
						</a>
					</li>
					<li>
						<a onClick={handleMenuClick} href="#contact">
							Contattaci
						</a>
					</li>
					<li>
						<a onClick={handleMenuClick} href="#presentation">
							Presentazione SOPHìA
						</a>
					</li>
					<li>
						<a onClick={handleMenuClick} href="#blog">
							Il nostro BLOG
						</a>
					</li>
					<li>
						<a onClick={handleMenuClick} href="#purchase">
							Acquisto
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
