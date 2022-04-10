// 広域ドメインコンポーネント

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
  disabled?: boolean;
};

const index: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default index;
