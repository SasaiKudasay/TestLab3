import React, { Component } from 'react';

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null,
            currentQuestion: 1,
        };
    }

    questions = [
        'Как ты себя сегодня чувствуешь?',
        'Испытывали ли вы какие-либо симптомы?',
        'В какой части тела болит?',
    ];

    handleAnswer = () => {
        this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    };

    render() {
        return (
            <div>
                <p>Вопрос:</p>
                <p>{this.questions[this.state.currentQuestion - 1]}</p>
                <button onClick={this.handleAnswer}>Next</button>
            </div>
        );
    }
}

export default Questionnaire;