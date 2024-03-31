import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Questionnaire from './Questionnaire';

test('Задает первоначальный вопрос', () => {
  render(<Questionnaire />);
  const questionElement = screen.getByText(/Как ты себя сегодня чувствуешь\?/i);
  expect(questionElement).toBeInTheDocument();
});

test('Отображает следующий вопрос после ответа', () => {
  render(<Questionnaire />);
  fireEvent.click(screen.getByText('Следующий'));
  const nextQuestion = screen.getByText(/Испытывали ли вы какие-либо симптомы\?/i);
  expect(nextQuestion).toBeInTheDocument();
});

test('Обновляет состояние ответа при нажатии кнопки', async () => {
  render(<Questionnaire />);
  const answerButton1 = screen.getByRole('button', { name: 'Чувствую себя хорошо' });

  fireEvent.click(answerButton1);

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(answerButton1).toHaveAttribute('aria-pressed', "false");
});

test('Выбор симптома на втором вопросе', async () => {
  render(<Questionnaire />);

  // Кликнуть на кнопку "Следующий"
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));

  // Подождать немного, чтобы обновились данные после клика
  await new Promise(resolve => setTimeout(resolve, 0));

  // Кликнуть на первый симптом
  fireEvent.click(screen.getByText('Насморк'));

  // Подождать немного, чтобы обновились данные после клика
  await new Promise(resolve => setTimeout(resolve, 0));

  // Проверить, что симптом был выбран
  expect(screen.getByText('Насморк')).toHaveAttribute('aria-pressed', 'true');
});

test('Выбор симптома на третьем вопросе', async () => {
  render(<Questionnaire />);

  // Кликнуть на кнопку "Следующий" дважды, чтобы перейти ко второму вопросу
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));

  // Подождать немного, чтобы обновились данные после клика
  await new Promise(resolve => setTimeout(resolve, 0));

  // Кликнуть на первый симптом
  fireEvent.click(screen.getByText('Боли в спине'));

  // Подождать немного, чтобы обновились данные после клика
  await new Promise(resolve => setTimeout(resolve, 0));

  // Проверить, что симптом был выбран
  expect(screen.getByText('Боли в спине')).toHaveAttribute('aria-pressed', 'true');
});

test('ввод ФИО обновляет состояние', () => {
  render(<Questionnaire />);

  // Кликнуть на кнопку "Следующий" дважды, чтобы перейти ко второму вопросу
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));

  const nameInput = screen.getByPlaceholderText('Введите ваше ФИО');

  fireEvent.change(nameInput, { target: { value: 'Иванов Иван Иванович' } });

  expect(nameInput).toHaveValue('Иванов Иван Иванович');
});

test('ввод даты рождения обновляет состояние', () => {
  render(<Questionnaire />);

  // Кликнуть на кнопку "Следующий" дважды, чтобы перейти ко второму вопросу
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));
  fireEvent.click(screen.getByText('Следующий', { selector: 'button' }));

  const dobInput = screen.getByPlaceholderText('Введите вашу дату рождения');

  fireEvent.change(dobInput, { target: { value: '01.01.1990' } });

  expect(dobInput).toHaveValue('01.01.1990');
});