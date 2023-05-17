export default function BasicBlok({ blok }: { blok: any }) {
  return (
    <pre>
      {JSON.stringify(blok, null, 2)}
    </pre>
  );
}
