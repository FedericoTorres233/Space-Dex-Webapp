import Telegram from "@mui/icons-material/Telegram";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

export default function ContactItem({ type, title, link, text_below }) {
  const props = {
    className: "hover:text-white transition-all ease-in-out",
    alt: { type },
    title: { title },
    sx: { color: "gray", fontSize: 100 },
  };
  return (
    <li>
      <div className="grid place-items-center text-5xl">
        <a target="_blank" rel="noreferrer" href={link}>
          {type == "github" ? (
            <GitHub {...props} />
          ) : type == "telegram" ? (
            <Telegram {...props} />
          ) : (
            <Email {...props} />
          )}
        </a>
        <h5 style={{ color: "hsl(233, 19%, 50%)" }}>{text_below}</h5>
      </div>
    </li>
  );
}
