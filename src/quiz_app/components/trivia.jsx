import React, { useState, useEffect } from "react";
import { Row, Col, Button, Rate } from "antd";
import styled from "styled-components";

const Trivia = (props) => {
  const { data, setQuestionNumber, questionNumber, setStop } = props;
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [status, setStatus] = useState();

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    delay(3000, () => setStatus(a.correct === true ? "primary" : "danger"));
    delay(4000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
    // console.log("a:", a);
    // setTimeout(() => {
    //   setStatus(a.correct === true ? "primary" : "danger");
    // }, 3000);
  };
  return (
    <Row>
      <Col span={18} offset={3}>
        <h4>{question?.topic}</h4>
        <Rate value={question?.rate} />
        <h2 style={{ marginBottom: "20px" }}>{question?.question}</h2>
        <Row justify="space-between" gutter={[16, 16]}>
          {question?.answers.map((a, idAnswers) => (
            <Col key={idAnswers} span={10} offset={1}>
              <Button
                type={selectedAnswer === a ? status : null}
                onClick={() => handleClick(a)}
              >
                {a.text}
              </Button>
            </Col>
          ))}
        </Row>
        {/* <Row justify="center" style={{ marginTop: "50px" }}>
          <Col>
            <Button>Next Question</Button>
          </Col>
        </Row> */}
      </Col>
    </Row>
  );
};
export default Trivia;
