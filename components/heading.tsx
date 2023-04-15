interface Tag {
  tag: string;
  text: string;
}
const Heading = ({ tag, text }: Tag) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;
