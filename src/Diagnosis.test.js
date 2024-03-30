import { diagnose } from './Diagnosis';

test('Диагностирует "Обычную простуду", когда симптомы совпадают', () => {
  const symptoms = ["Насморк", "Чихание", "Кашель"];
  const result = diagnose(symptoms);
  expect(result).toBe('Обычная простуда');
});