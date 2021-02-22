import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import {useCookies} from 'react-cookie'
import './App.css'

const days = ['월', '화', '수', '목', '금']
const wage = 6000

const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function App() {
  const [cookies, setCookie] = useCookies(['rememberValues'])
  const [username, setUsername] = useState(cookies.username || '')
  const [slackId, setSlackId] = useState(cookies.slackId || '')
  const [values, setValues] = useState(
    cookies.values || {mon: 0, tue: 0, wed: 0, thu: 0, fri: 0},
  )
  const [personalValues, setPersonalValues] = useState(
    cookies.personalValues || {mon: 0, tue: 0, wed: 0, thu: 0, fri: 0},
  )
  const [sum, setSum] = useState(cookies.sum || {co: 0, pers: 0})
  const [calSum, setCalSum] = useState(cookies.calSum || {co: 0, pers: 0})
  const [slackToken, setSlackToken] = useState(cookies.slackToken || '')

  const setCookies = (tempSum, tempCalSum, type) => {
    setSum({...tempSum})
    setCalSum({...tempCalSum})
    setCookie('sum', {...tempSum})
    setCookie('calSum', {...tempCalSum})
    if (type === 'personal') {
      setCookie('personalValues', personalValues)
    } else {
      setCookie('values', values)
    }
  }

  useEffect(() => {
    let tempSum = {...sum, co: 0}
    let tempCalSum = {...calSum, co: 0}

    Object.keys(values).forEach((day) => {
      if (typeof values[day] !== 'number' || isNaN(values[day])) return
      let temp = values[day] - wage
      if (temp < 0) temp = 0

      tempSum.co += values[day]
      tempCalSum.co += temp
    })

    setCookies(tempSum, tempCalSum, 'coperation')
  }, [values])

  useEffect(() => {
    let tempSum = {...sum, pers: 0}
    let tempCalSum = {...calSum, pers: 0}

    Object.keys(personalValues).forEach((day) => {
      if (typeof personalValues[day] !== 'number' || isNaN(personalValues[day]))
        return
      if (personalValues[day] > wage) {
        tempCalSum.pers += wage
      } else {
        tempCalSum.pers += personalValues[day]
      }
      tempSum.pers += personalValues[day]
    })

    setCookies(tempSum, tempCalSum, 'personal')
  }, [personalValues])

  const usernameInputHandler = (e) => {
    setUsername(e.target.value)
    setCookie('username', e.target.value)
  }

  const slackIdInputHandler = (e) => {
    setSlackId(e.target.value)
    setCookie('slackId', e.target.value)
  }

  const valueInputHandler = (value, day, target) => {
    if (day === 'token') {
      setSlackToken(value)
      setCookie('slackToken', value)
      return
    }
    if (target === 'personal') {
      setPersonalValues({...personalValues, [day]: value})
    } else {
      setValues({...values, [day]: value})
    }
  }

  const sendButtonOnClickHandler = async () => {
    try {
      if (!username) {
        throw new Error('이름을 입력해주세요.')
      } else if (!sum.co && !sum.pers) {
        throw new Error('전송할 내용이 없습니다.')
      } else if (!slackId) {
        throw new Error('슬랙 아이디를 확인해주세요.')
      } else if (!slackToken) {
        throw new Error('슬랙 토큰을 확인해주세요.')
      }
    } catch (err) {
      alert(err.message)
      return
    }

    let personalTypeMessage = ''
    let corporationTypeMessage = ''
    if (sum.pers > 0) {
      personalTypeMessage = `[개인카드] ${username} / 총지출: ${sum.pers} / 회사부담: ${calSum.pers}`
    }
    if (sum.co > 0) {
      corporationTypeMessage = `[법인카드] ${username} / 총지출: ${sum.co} / 개인부담: ${calSum.co}`
    }

    function postToSlack(channel, text) {
      const {WebClient} = require('@slack/client')
      const web = new WebClient(slackToken)
      return web.chat.postMessage({channel, text})
    }

    if (
      window.confirm(
        `${personalTypeMessage} \n${corporationTypeMessage} \n전송하시겠습니까?`,
      )
    ) {
      try {
        if (sum.pers > 0) {
          await postToSlack(
            'UKPCGGH0B',
            `${personalTypeMessage}         <@${slackId}>`,
          )
          await postToSlack(slackId, `${personalTypeMessage} 전송되었습니다.`)
        }
        if (sum.co > 0) {
          await postToSlack(
            'UKPCGGH0B',
            `${corporationTypeMessage}         <@${slackId}>`,
          )
          await postToSlack(
            slackId,
            `${corporationTypeMessage} 전송되었습니다.`,
          )
        }
      } catch (err) {
        console.error(err)
        alert('메시지 전송 실패!')
        return
      }
      setValues({mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
      setPersonalValues({mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
    } else {
      console.error('전송취소')
    }
  }

  return (
    <Container className="mt-2">
      <Row className="justify-content-center align-self-center">
        <Col lg={6}>
          <Card bg="Light">
            <Card.Body>
              <Form.Group>
                <Form.Control
                  type="text"
                  className="mb-3"
                  placeholder="Slack Token"
                  value={slackToken}
                  onInput={(event) =>
                    valueInputHandler(event.target.value, 'token')
                  }
                />
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Slack ID"
                      value={slackId}
                      onInput={slackIdInputHandler}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="이름"
                      value={username}
                      onInput={usernameInputHandler}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <p className="text-center">법인</p>
                    {Object.keys(values).map((day, i) => (
                      <div>
                        <Form.Label column lg={2}>
                          {days[i]}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          value={values[day]}
                          onFocus={() => valueInputHandler('', day)}
                          onInput={(event) =>
                            valueInputHandler(parseInt(event.target.value), day)
                          }
                        />
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="text-center">개인</p>
                    {Object.keys(values).map((day, i) => (
                      <div>
                        <Form.Label column lg={2}>
                          {days[i]}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          value={personalValues[day]}
                          onFocus={() => valueInputHandler('', day, 'personal')}
                          onInput={(event) =>
                            valueInputHandler(
                              parseInt(event.target.value),
                              day,
                              'personal',
                            )
                          }
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col>
                  <p>[법인카드] {username}</p>
                  <p>총지출액: {comma(sum.co)}</p>
                  <p>개인부담금: {comma(calSum.co)}</p>
                </Col>
                <Col>
                  <p>[개인카드] {username}</p>
                  <p>총지출액: {comma(sum.pers)}</p>
                  <p>회사부담금: {comma(calSum.pers)}</p>
                </Col>
              </Row>
              <Button
                className="my-4"
                onClick={sendButtonOnClickHandler}
                variant="outline-success"
                block>
                전송
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
