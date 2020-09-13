const formatDate = (value: Date): string => {
  const date = new Date(value);
  return date.toLocaleDateString('pt-BR').split(' ')[0];
};

export default formatDate;
