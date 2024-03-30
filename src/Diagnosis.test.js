import { diagnose } from './Diagnosis';

test('Диагностирует "Обычную простуду", когда симптомы совпадают', () => {
  const symptoms = ["Насморк", "Чихание", "Кашель", "Болит голова"];
  const result = diagnose(symptoms);
  expect(result).toBe('Обычная простуда');
});

test('Ставит диагноз "Грипп", когда симптомы совпадают', () => {
  const symptoms = ["Лихорадка", "Боли в теле", "Усталость"];
  const result = diagnose(symptoms);
  expect(result).toBe('Грипп');
});

test('Ставит диагноз "Аллергия", когда симптомы совпадают', () => {
  const symptoms = ["Зуд в глазах", "Чихание", "Заложенность носа", "Боли в теле"];
  const result = diagnose(symptoms);
  expect(result).toBe('Аллергия');
});

test('Возвращает значение "Неизвестно", если симптомы не соответствуют ни одному известному состоянию', () => {
  const symptoms = ["Головная боль", "Усталость"];
  const result = diagnose(symptoms);
  expect(result).toBe('Неизвестный');
});