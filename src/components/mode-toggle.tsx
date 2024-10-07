import * as React from 'react';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<'light' | 'dark'>('light');

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains('dark');
		setThemeState(isDarkMode ? 'dark' : 'light');
	}, []);

	React.useEffect(() => {
		const isDark = theme === 'dark';

		document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
	}, [theme]);

	return (
		<Button
			onClick={() => setThemeState(theme === 'dark' ? 'light' : 'dark')}
			variant='ghost'
			size='icon'
		>
			<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>
				Toggle theme to {theme === 'dark' ? 'light mode' : 'dark mode'}
			</span>
		</Button>
	);
}
