const date = '2021-02-18T11:38:43.851612Z';

const formatDate = (date) => {
  const newDate = new Date(date);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
  };

  return newDate.toLocaleDateString('tr-TR', options);
}

formatDate(date); // 18 Şubat 2021
