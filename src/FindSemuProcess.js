import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class FindSemuProcess extends Component {
    render () {
      return(
      <div className="FindSemu">
        세무 프로세스
        <h4>어떤 견적을 받아 보시겠습니까?</h4>
        <ListGroup>
        <ListGroup.Item>기장(매월관리)</ListGroup.Item>
        <ListGroup.Item>부가가치세 신고 대행(1회성)</ListGroup.Item>
        <ListGroup.Item>종합소득세 신고 대행(1회성)</ListGroup.Item>
        <ListGroup.Item>무효법인설립</ListGroup.Item>
        <ListGroup.Item>양도 소득세 신고(상담 유료)</ListGroup.Item>
        <ListGroup.Item>상속세 신고</ListGroup.Item>
        <ListGroup.Item>기타</ListGroup.Item>
        </ListGroup>
      </div> 
      );
    }
  }
  
  export default FindSemuProcess;
