import React, { useState } from "react";
import { Row, Col, Progress } from "antd";
import Trivia from "./trivia";
const Questions = () => {
  const db = require("../../data.json");
  console.log("data:", db);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  return (
    <Row>
      <Col span={18} offset={3}>
        {stop ? (
          <>
            <h3>Số câu trả lời đúng:{questionNumber - 1}</h3>
          </>
        ) : (
          <>
            <h1>
              Question {questionNumber} of {db.length}
            </h1>
            <Trivia
              data={db}
              questionNumber={questionNumber}
              setStop={setStop}
              setQuestionNumber={setQuestionNumber}
            />
          </>
        )}

        <Progress
          style={{ marginTop: "100px" }}
          percent={(questionNumber - 1) * 25}
        />
      </Col>
    </Row>
  );
};
export default Questions;
