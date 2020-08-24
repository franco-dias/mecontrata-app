export default (text) => {
  if (!text) return '';
  return text.split(' ')
    .map((word) => (word.length > 1
      ? `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`
      : word.toLowerCase()))
    .join(' ');
};
