import React from 'react';

export default function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return <footer>©{getCurrentYear()} Ryan Reeves</footer>;
}
