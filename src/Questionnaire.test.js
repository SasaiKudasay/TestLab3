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
  const nextQuestionElement = screen.getByText(/Испытывали ли вы какие-либо симптомы\?/i);
  expect(nextQuestionElement).toBeInTheDocument();
});

test('Обновляет состояние ответа при нажатии кнопки', async () => {
  render(<Questionnaire />);
  const answerButton1 = screen.getByRole('button', { name: 'Чувствую себя хорошо' });

  fireEvent.click(answerButton1);

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(answerButton1).toHaveAttribute('aria-pressed', 'true');
});

