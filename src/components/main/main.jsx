import React from 'react';
import {Presentation} from '../presentation/presentation.jsx';
import './main.css'
import {Description} from '../description/description.jsx';
import {About} from '../about/about.jsx';
import {Contact} from '../contact/contact.jsx';
import {Blog} from '../blog/blog.jsx';
import {Purchase} from '../purchase/purchase.jsx';

export const Main = () => {
	return (
		<main className="container">
			<Description />
			<About />
			<Contact />
			<Presentation />
			<Blog />
			<Purchase />
		</main>
	)
}
