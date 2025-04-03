import Link from "./Link";

interface CertificateProps {
  title: string;
  url: string;
}

export default function Certificate({ title, url }: CertificateProps) {
  return (
    <Link href={url} bgEffect={false} redirect={true}>
      <li className="text-sm font-medium hover:underline cursor-pointer mb-1">
        {title}
      </li>
    </Link>
  );
}
