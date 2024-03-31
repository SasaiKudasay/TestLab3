import { diagnose } from './Diagnosis';

test('Ставит диагноз "Легкая простуда", когда симптомы совпадают и продолжительность "Примерно день"', () => {
  const symptoms = ['Чувствую себя хорошо', 'Насморк'];
  const duration = 'Примерно день';
  const result = diagnose(symptoms, duration);
  expect(result).toBe('Легкая простуда');
});

test('Ставит диагноз "Грипп", когда симптомы совпадают и продолжительность "Около недели"', () => {
  const symptoms = ['Ужасное состояние', 'Насморк', 'Кашель', 'Болит голова', 'Боли в теле'];
  const duration = 'Около недели';
  const result = diagnose(symptoms, duration);
  expect(result).toBe('Грипп');
});

test('Ставит диагноз "Аллергия", когда симптомы совпадают и продолжительность "Около месяца"', () => {
  const symptoms = ['Чувствую себя плохо', 'Зуд в глазах'];
  const duration = 'Примерно день';
  const result = diagnose(symptoms, duration);
  expect(result).toBe('Аллергия');
});

test('Ставит диагноз "Неизвестный диагноз", когда симптомы не соответствуют ни одному известному состоянию', () => {
  const symptoms = ['Головная боль', 'Тошнота'];
  const duration = 'Больше месяца';
  const result = diagnose(symptoms, duration);
  expect(result).toBe('Неизвестный диагноз');
});
