import React, { useEffect } from 'react';

export function useScroll() {
	const handleScrollIntoView = (
		ref: React.MutableRefObject<null | HTMLDivElement>
	) => ref.current?.scrollIntoView({ behavior: 'smooth' });

	return { handleScrollIntoView };
}
