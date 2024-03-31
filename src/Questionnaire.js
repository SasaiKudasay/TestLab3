import React, { Component } from 'react';
import styled from "styled-components";

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593",
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457",
    },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 10px 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "blue",
};

const NextButton = styled(Button)`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 10px 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

NextButton.defaultProps = {
    theme: "pink",
};

const ButtonToggle = styled(Button)`
  opacity: ${(props) => (props.active ? "1" : "0.7")};
`;

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null,
            currentQuestion: 1,
            activeAnswers: [], // Массив выбранных ответов
        };
    }

    questions = [
        'Как ты себя сегодня чувствуешь?',
        'Испытывали ли вы какие-либо симптомы?',
        'В какой части тела болит?',
        'Как долго вы уже болеете?'
    ];

    answerTypes_1 = [
        'Чувствую себя хорошо',
        'Чувствую себя плохо',
        'Ужасное состояние'
    ];

    answerTypes_2 = [
        'Насморк',
        'Чихание',
        'Кашель',
        'Лихорадка',
        'Усталость',
        'Зуд в глазах',
        'Заложенность носа',
        'Тошнота',
        'Повышенная температура'
    ];

    handleAnswer = (type, quest) => {
        this.setState((prevState) => {
            const { activeAnswers } = prevState;
            const index = activeAnswers.indexOf(type);
            if (index === -1) {
                // Если ответ не выбран, добавляем его в массив
                return {
                    activeAnswers: [...activeAnswers, type],
                };
            } else {
                // Если ответ уже выбран, удаляем его из массива
                const newActiveAnswers = [...activeAnswers];
                newActiveAnswers.splice(index, 1);
                return {
                    activeAnswers: newActiveAnswers,
                };
            }
        });
        if (quest === 1)
        {
            this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        }
    };

    render() {
        return (
            <div>
                <p>Вопрос:</p>
                <p>{this.questions[this.state.currentQuestion - 1]}</p>
                {this.state.currentQuestion === 1 && (
                    <div>
                        {this.answerTypes_1.map((type) => (
                            <ButtonToggle
                                key={type}
                                active={"false"}
                                onClick={() => this.handleAnswer(type, 1)}
                                aria-pressed={this.state.activeAnswers.includes(type) ? "true" : "false"}
                            >
                                {type}
                            </ButtonToggle>
                        ))}
                    </div>
                )}
                {this.state.currentQuestion === 2 && (
                    <div>
                        {this.answerTypes_2.map((type) => (
                            <ButtonToggle
                                key={type}
                                active={this.state.activeAnswers.includes(type) ? +true : +false}
                                onClick={() => this.handleAnswer(type, 2)}
                                aria-pressed={this.state.activeAnswers.includes(type) ? "true" : "false"}
                            >
                                {type}
                            </ButtonToggle>
                        ))}
                    </div>
                )}
                {this.state.currentQuestion !== 1 && (
                    <NextButton active="false" onClick={() => {
                        console.log(this.state.activeAnswers)
                        this.setState({ currentQuestion: this.state.currentQuestion + 1 })}
                    }>
                        Следующий
                    </NextButton>
                )}
            </div>
        );
    }
}

export default Questionnaire;
