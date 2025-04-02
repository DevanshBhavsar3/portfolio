interface LinkProps {
  href: string;
  bgEffect: boolean;
  redirect?: boolean;
  children: React.ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      target={props.redirect === false ? "" : "_blank"}
      className={`${
        props.bgEffect && "hover:bg-neutral-800 p-2"
      }  hover:text-white transition-all duration-300 rounded-full group`}
    >
      {props.children}
    </a>
  );
}
