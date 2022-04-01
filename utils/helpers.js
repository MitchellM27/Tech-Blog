module.exports = {
  format_date: (date) => {
    return date.toLocaleString(undefined, {
      weekday: 'short',
      day:    'numeric',
      month:  'numeric',
      year:   'numeric',
      hour:   '2-digit',
      minute: '2-digit',
  });
  },
};
