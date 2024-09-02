import Text from "../base/Text";
type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  const computedClassName = `
    text-xs
    ${className}
  `;
  return <Text className={computedClassName}>{children}</Text>;
};

export default SectionTitle;
