const fs = require("fs");

function parseArgs(argv) {
  const out = { _: [] }; // positional args

  for (let i = 0; i < argv.length; i++) {
    const tok = argv[i];

    // Long flags: --name or --name=value
    if (tok.startsWith("--")) {
      const eq = tok.indexOf("=");

      if (eq !== -1) {
        // --name=value
        const key = tok.slice(2, eq);
        const val = tok.slice(eq + 1);
        out[key] = val;
      } else {
        // --name value OR --flag
        const key = tok.slice(2);
        const next = argv[i + 1];

        if (next && !next.startsWith("-")) {
          out[key] = next;
          i++; // skip next value
        } else {
          out[key] = true;
        }
      }

      // Short flags: -a or -abc
    } else if (tok.startsWith("-") && tok.length > 1) {
      const shorts = tok.slice(1).split("");

      for (const s of shorts) {
        out[s] = true;
      }

      // Positional args
    } else {
      out._.push(tok);
    }
  }

  return out;
}

// Demo usage
const parsed = parseArgs(process.argv.slice(2));
console.log(parsed);
