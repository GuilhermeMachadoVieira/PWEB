const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const maxNumber1 = parseFloat(document.getElementById('maxNumber1').value);
  const maxNumber2 = parseFloat(document.getElementById('maxNumber2').value);
  const maxNumber3 = parseFloat(document.getElementById('maxNumber3').value);
  const maxNumberValue = maxNumber(maxNumber1, maxNumber2, maxNumber3);
  document.getElementById('maxNumberResult').textContent = `Maior Número: ${maxNumberValue}`;

  const orderByAsc1 = parseFloat(document.getElementById('orderByAsc1').value);
  const orderByAsc2 = parseFloat(document.getElementById('orderByAsc2').value);
  const orderByAsc3 = parseFloat(document.getElementById('orderByAsc3').value);
  const orderByAscArray = orderByAsc(orderByAsc1, orderByAsc2, orderByAsc3);
  document.getElementById('orderByAscResult').textContent = `Ordem Crescente: ${orderByAscArray}`;

  const isPalindromoValue = document.getElementById('isPalindromo').value;
  const isPalindromoResultText = isPalindromo(isPalindromoValue);
  document.getElementById('isPalindromoResult').textContent = isPalindromoResultText;

  const triangleType1 = parseFloat(document.getElementById('triangleType1').value);
  const triangleType2 = parseFloat(document.getElementById('triangleType2').value);
  const triangleType3 = parseFloat(document.getElementById('triangleType3').value);
  const triangleTypeResultText = triangleType(triangleType1, triangleType2, triangleType3);
  document.getElementById('triangleTypeResult').textContent = `Tipo de Triângulo: ${triangleTypeResultText}`;

  document.getElementById('results').style.display = 'block';
});
