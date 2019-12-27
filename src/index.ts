console.log('hello');

export const parseSingleRange = (input: string) => {
  const [begin, end] = input.split('-');

  const beginHour = getHour(begin);

  const endHour = getHour(end);

  const normalizedEndHour = endHour < beginHour ? endHour + 12 : endHour;

  const beginMinute = getMinute(begin);

  const endMinute = getMinute(end);

  const normalizedEndMinute = endMinute < beginMinute ? endMinute + 60 : endMinute;

  const totalHours = normalizedEndHour - beginHour;

  const totalMinutes = normalizedEndMinute - beginMinute;

  const normalizedTotalMinutes = totalMinutes / 60;

  console.log(input, totalHours, normalizedTotalMinutes, totalHours + normalizedTotalMinutes)
  return totalHours + normalizedTotalMinutes;
}

const getHour = (input: string) => (
  parseInt(input.substring(0, input.length === 4 ? 2 : 1))
);

const getMinute = (input: string) => (
  parseInt(input.substring(input.length === 4 ? 2 : 1))
);

// parseSingleRange('930-945')
// parseSingleRange('830-945')
// parseSingleRange('1030-145')
// parseSingleRange('1230-245')

const parseMultipleRanges = (input: string) => (
  input.replace(/[:\s]/g, '').split(',').reduce((acc: number, range: string) => (parseSingleRange(range) + acc), 0)
)

const total = parseMultipleRanges('930-945, 11:30-1238, 120-250, 315-522')

console.log("total is", total);

// TODO: more guarding, handle 940-45

