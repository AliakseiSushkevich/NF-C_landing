import React from 'react';
import './description.css'

export const Description = () => {
	return (
		<section id="#description" className="section_wrapper description">
			<h3>
				Description
			</h3>
			<div>
				<p className="p">
					Finalmente un prodotto a completa disposizione per le esigenze degli studenti!
					NF&C, start up a forte connotazione innovativa, ha sviluppato una piattaforma software
					dotata di Intelligenza Artificiale che consente a tutti gli studenti di avere un tutor
					virtuale che lo accompagna durante il suo percorso di studi.
				</p>
				<ul>
					<span>Ecco cosa può fare Sophìa per te:</span>
					<li>
						acquisisce informazioni sul tuo stile cognitivo e sulle tue abitudini “formative” e ti
						aiuta a pianificare meglio le attività di studio, dalla lettura alle attività di ripasso
						o alle sessioni di domande e risposte; (pianificazione dello studio, deviazioni dalla
						pianificazione, lettura documenti, utilizzo quaderno degli appunti, sessioni di
						domande-risposte);
					</li>
					<li>
						ricerca e archivia in modo dinamico diverse tipologie di risorse formative (interne ed
						esterne) attraverso motori di analisi semantica come quello per gli ebook, quello dei
						quaderni, dei documenti e delle registrazioni;
					</li>
					<li>
						ti garantisce un servizio di fruizione dei contenuti e disponibilità contemporanea su
						diversi device: computer, ipad e anche smart phone;
					</li>
					<li>
						ti può fornire utili indicazioni su quali sono le abitudini che più si adattano al tuo
						stile di studio: orari di utilizzo, funzionalità utilizzate, frequenza d’uso della
						piattaforma;
					</li>
					<li>
						ti invia messaggi personalizzati con indicazioni didattiche in funzione delle
						prestazioni e dello stato dell’arte del percorso: aggiustamenti alla pianificazione per
						raggiungere l’obiettivo, statistiche, ripasso argomenti.
					</li>
				</ul>
			</div>
		</section>
	)
}
