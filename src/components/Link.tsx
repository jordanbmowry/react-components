import classNames from 'classnames';
import { ReactNode, MouseEventHandler } from 'react';
import useNavigation from '../hooks/use-navigation';
import type { NavigationProviderValue } from '../context/navigation';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassname: string;
}

function Link({ to, children, className, activeClassname }: LinkProps) {
  const { navigate, currentPath } = useNavigation() as NavigationProviderValue;

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassname
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
