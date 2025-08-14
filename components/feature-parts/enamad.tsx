import Image from "next/image";

export default function Enamad() {
  return (
    // eslint-disable-next-line @eslint-react/dom/no-unsafe-target-blank
    <div className="flex items-center justify-center">
      <a
        href="https://trustseal.enamad.ir/?id=615587&Code=Qw0Ofji05K3rhWG4GTTm5LZMuLYnr6wB"
        target="_blank"
      >
        <Image
          height={80}
          width={80}
          alt="enamad"
          className="h-20 w-20"
          src="https://trustseal.enamad.ir/logo.aspx?id=615587&Code=Qw0Ofji05K3rhWG4GTTm5LZMuLYnr6wB"
          unoptimized
        />
      </a>
    </div>
  );
}
