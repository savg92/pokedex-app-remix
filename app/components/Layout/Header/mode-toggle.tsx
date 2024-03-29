import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const [, setTheme] = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
				>
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mt-[-1.3rem]' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='dark:bg-gray-500 bg-gray-800 w-20 shadow p-2'
			>
				<DropdownMenuItem
					onClick={() => setTheme(Theme.LIGHT)}
					className='cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600'
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme(Theme.DARK)}
					className='cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600'
				>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
