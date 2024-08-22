export default function Banner({ text, backgroundColor, textColor }) {
  return (
    <div style={{ backgroundColor, color: textColor, padding: '10px', textAlign: 'center' }}>
      {text}
    </div>
  );
}
