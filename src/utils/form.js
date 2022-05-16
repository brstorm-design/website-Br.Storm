export function validateForm() {
  const textAreas = document.querySelectorAll('textarea[required]');
  textAreas.forEach(textArea => {
    if (textArea.value.length < 1) {
      throw {
        message: 'Preencha este campo.',
        element: textArea.closest('section'),
      }
    }
  });

  const checkboxFieldsets = document.querySelectorAll('fieldset[type="checkbox"], fieldset[type="radio"]');
  checkboxFieldsets.forEach(fieldset => {
    const inputs = Array.from(fieldset.children);
    console.log(inputs);
    if (inputs.every(input => !input.control.checked)) {
      throw {
        message: 'Marque pelo menos uma caixa.',
        element: fieldset.closest('section'),
      }
    }
  });
}