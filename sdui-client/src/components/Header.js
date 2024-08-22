export default function Header({ title, subtitle, titleColor }) {
  return (
    <header>
      <h1 style={{ color: titleColor }}>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
