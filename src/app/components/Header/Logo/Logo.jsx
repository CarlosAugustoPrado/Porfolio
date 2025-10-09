import Image from "next/image";

export default function Logo() {
	return <Image src={"/images/common/main-logo.png"} width={200} height={70} priority={true} alt="Logo do desenvolvedor"></Image>;
}
