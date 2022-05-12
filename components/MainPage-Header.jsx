import Image from "next/image";
import pageLogo from "../public/img/pageLogo.png";
import SearchBar from "./SearchBar";

export default function MainPageHeader({ articles }) {
  return (
    <>
      <header className="relative flex justify-center items-center h-full flex-col">
        <div className="opacity-70 rounded-[140px] shadow-[0_0_70px]">
          <Image src={pageLogo} alt="Page Logo" unoptimized={true}></Image>
        </div>
        <SearchBar articles={articles} />
      </header>
    </>
  );
}
