function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getTimeAgo(date: string) {
  return useTimeAgo(new Date(date)).value;
}

export { formatDate, getTimeAgo };
