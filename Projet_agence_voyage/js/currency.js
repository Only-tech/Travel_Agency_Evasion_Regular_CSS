
  const userCurrency = document.getElementById('userCurrency');
  const destinationCurrency = document.getElementById('destinationCurrency');
  const resultBox = document.getElementById('conversionResult');

  const currencyMap = {
    'JPY': 'Yen japonais',
    'USD': 'Dollar américain',
    'MAD': 'Dirham marocain',
    'THB': 'Baht thaïlandais',
    'IDR': 'Roupie indonésienne'
  };

  async function updateRate() {
    const from = userCurrency.value;
    const to = destinationCurrency.value;

    if (from === to) {
      resultBox.innerText = "Même devise : 1 pour 1";
      return;
    }

    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`);
      const data = await res.json();
      const rate = data.rates[to];
      resultBox.innerText = `1 ${from} = ${rate} ${to}`;
    } catch (err) {
      resultBox.innerText = "Erreur lors du chargement du taux.";
    }
  }

  function setDestinationCurrency() {
    const destElement = document.getElementById('destination-card');
    const detectedCurrency = destElement.dataset.currency || 'USD';

    // Mise à jour de la liste avec une seule option
    destinationCurrency.innerHTML = `
      <option value="${detectedCurrency}" selected>${currencyMap[detectedCurrency] || detectedCurrency}</option>
    `;
    destinationCurrency.value = detectedCurrency;
  }

  userCurrency.addEventListener('change', updateRate);

  window.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) userCurrency.value = 'USD';
    else if (browserLang.startsWith('fr')) userCurrency.value = 'EUR';

    setDestinationCurrency();
    updateRate();
  });

