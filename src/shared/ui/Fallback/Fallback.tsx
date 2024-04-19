type Props = {
  text: string;
};

export function Fallback({ text }: Props) {
  return (
    <p style={{ margin: 'auto', color: 'yellow', fontSize: '36px', textAlign: 'center' }}>{text}</p>
  );
}
