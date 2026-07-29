const buf = Buffer.from("leila bakhshayesh");
console.log(buf);

const base64String = buf.toString("base64");
console.log(base64String);

function convert(text, from, to) {
  return Buffer.from(text, from).toString(to);
};

const base64 = convert("leila bakhshayesh", "utf8", "base64");

console.log(base64);

const utf8 = convert(base64, "base64", "utf8");

console.log(utf8);
