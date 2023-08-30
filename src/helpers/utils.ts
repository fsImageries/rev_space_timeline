// String helpers

const TITLE_REG = /(?<Front>^.*)(?<Back>[A-Z]\w.+)/;
const NUMTITLE_REG = /(?<Front>[A-Za-z]+)?(?<Digits>[0-9*#+-]+)(?<Back>[A-Za-z]+)?/;

export function getFirstYear(str?: string) {
  // return str?.match(/(-?\d+)\D/)?.[0];
  return str?.match(/(-?\d+.?\d+)\D/)?.[0];
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function splitWord(str?: string) {
  return str?.split(/(?=[A-Z])/);
}

export function toTitle(str: string) {
  let match = str.match(NUMTITLE_REG);
  if (!match) match = str.match(TITLE_REG);
  if (!match) return capitalize(str);

  let idx = 1;
  if (match[idx] == undefined) idx += 1;
  return `${match[idx].length == 1 ? match[idx] : capitalize(match[idx])} ${match[idx + 1]}`;

  //   return splitWord(str)
  //     .map((s) => capitalize(s))
  //     .join(" ");
}

const formatter = Intl.NumberFormat("de");
export function formatTexts(texts: string[], join = true, infectName: boolean | string = false, NL_SEP = "<br>• ") {
  texts = texts.map((t, i) => {
    const line = t.split("\n");
    // console.log(line[0])
    line[0] = formatYear(line[0]);

    if (infectName) {
      line[0] = `${line[0]} <span class="year" style="font-size:.8rem;">(${infectName})</span>`;
    }
    return `${i != 0 && !join ? "<br><br>" : ""}<span class="year">${line[0]}</span>${NL_SEP}${line
      .slice(1)
      .join(NL_SEP)}`;
  });
  return texts;
}

export function formatYear(year: string) {
  const match = year.match(/(-?\d+)/g);
  const prefix = year.startsWith("≈") ? "≈" : "";
  if (!match?.[0]) return year;

  const parsed = parseInt(match?.[0]);
  if (parsed) {
    year = formatter.format(parsed);
    // console.log(tmp)
    if (parsed < 0) {
      year = `${prefix}${year.slice(1)} BC`;
    } else if (prefix) {
      year = `${prefix}${year}`;
    }
  }

  if (match?.[1]) {
    year = `${year} - ${formatYear(match?.[1])}`;
  }

  return year;
}
