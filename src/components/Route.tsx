import { ReactNode } from 'react';
import useNavigation from '../hooks/use-navigation';
import type { NavigationProviderValue } from '../context/navigation';

interface RouteProps {
  path: string;
  children?: ReactNode;
}

function Route({ path, children }: RouteProps) {
  const { currentPath } = useNavigation() as NavigationProviderValue;
  if (path === currentPath) {
    return <>{children}</>;
  }

  return null;
}

export default Route;
