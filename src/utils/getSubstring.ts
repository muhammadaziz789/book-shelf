const getSubstring = (str: string, limit?: number, dots?: boolean) => {
  if (!str?.length) return "";
  if (!limit) limit = 10
  if (str.length > limit) {
    if (!limit) return str
    str = str.substring(0, limit) + (dots ? "..." : "");
  }

  return str;
}

export default getSubstring