type HeadingProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};
const Heading = ({ tag: Tag = 'h1', text }: HeadingProps) => {
  return <Tag>{text}</Tag>;
};

export default Heading;
