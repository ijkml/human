function readable(date: Date) {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function timeAgo(date: Date) {
  return useTimeAgo(date).value;
}

function shortDate(date: Date) {
  return date.toLocaleDateString('de', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

type FormatMethod = 'readable' | 'time-ago' | 'short';

const fn: Record<FormatMethod, (date: Date) => string> = {
  'time-ago': timeAgo,
  'readable': readable,
  'short': shortDate,
};

function formatDate(date: string, method: FormatMethod) {
  return fn[method](new Date(date));
}

export { formatDate };
