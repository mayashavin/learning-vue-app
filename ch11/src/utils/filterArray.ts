export type ArrayObject = { [key: string]: string };

export function filterArray(
  array: ArrayObject[],
  key: string,
  term: string
): ArrayObject[] {
  return array.filter(
    (item) => item[key]?.toLowerCase().includes(term.toLowerCase())
  );
}