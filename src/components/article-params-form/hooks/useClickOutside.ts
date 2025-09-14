import { useEffect } from 'react';

export function useClickOutside(
	refs: React.RefObject<HTMLElement>[],
	setState: () => void,
	isActive: boolean
) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				refs.every(
					(ref) => ref.current && !ref.current.contains(event.target as Node)
				)
			) {
				setState();
			}
		};

		isActive
			? document.addEventListener('mousedown', handleClickOutside)
			: document.removeEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isActive]);
}
