import emoji from "node-emoji";

export default function Emoji({ symbol }) {
  return emoji.emojify(symbol);
}
