interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="hover:bg-neutral-800 p-2 rounded-full"
    >
      {props.children}
    </a>
  );
}
