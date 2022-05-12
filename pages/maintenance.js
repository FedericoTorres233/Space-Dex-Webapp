import Emoji from "../components/utils/Emoji";

export default function maintenance() {
  return (
    <div className="bg-gradient-to-br from-[#051937]/50 to-[#40c79d]/50 h-screen w-screen grid place-items-center text-5xl">
      Offline for maintenance <Emoji symbol={":hammer:"} />
    </div>
  );
}
