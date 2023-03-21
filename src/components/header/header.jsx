import React from 'react';

export const Header = () => {
	return (
		<header>
			<div className="container header-container">
				<h1>
					NF&C
				</h1>
				<nav>
					<ul>
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
		</header>
	)
}
