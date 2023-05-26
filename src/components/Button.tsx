import className from 'classnames';

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    outline?: boolean;
    rounded?: boolean;
  }> &
  Exclusive<['primary', 'secondary', 'success', 'warning', 'danger'], boolean>;

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: ButtonProps) {
  (function validateButtonProps() {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      console.error(
        'Only one primary, secondary, success, warning, danger can be true'
      );
    }
  })();

  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border rounded',
    {
      'border-blue-500': primary,
      'bg-blue-500 text-white': primary && !outline,
      'border-gray-900': secondary,
      'bg-gray-900 text-white': secondary && !outline,
      'border-green-500': success,
      'bg-green-500 text-white': success && !outline,
      'border-yellow-400': warning,
      'bg-yellow-400 text-white': warning && !outline,
      'border-red-500': danger,
      'bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
