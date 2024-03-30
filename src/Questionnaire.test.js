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
  fireEvent.click(screen.getByText('Next'));
  const nextQuestionElement = screen.getByText(/Испытывали ли вы какие-либо симптомы\?/i);
  expect(nextQuestionElement).toBeInTheDocument();
});