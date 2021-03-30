import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import {useCookies} from 'react-cookie'
import './App.css'
import axios from 'axios'

const days = ['월', '화', '수', '목', '금']
const wage = 6000

const nowDate = new Date()
const nextYear = new Date()

nextYear.setFullYear(nowDate.getFullYear() + 1)

const options = {expires: nextYear}

const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function App() {
  const [cookies, setCookie] = useCookies(['rememberValues'])
  const [username, setUsername] = useState(cookies.username || '')
  const [textMessage, setTextMessage] = useState(cookies.textMessage || '')
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
  const [isAuth, setIsAuth] = useState(cookies.isAuth || '')

  const setCookies = (tempSum, tempCalSum, type) => {
    setSum({...tempSum})
    setCalSum({...tempCalSum})
    setCookie('sum', {...tempSum}, options)
    setCookie('calSum', {...tempCalSum}, options)
    if (type === 'personal') {
      setCookie('personalValues', personalValues, options)
    } else {
      setCookie('values', values, options)
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
    setCookie('username', e.target.value, options)
  }

  const slackIdInputHandler = (e) => {
    setSlackId(e.target.value)
    setCookie('slackId', e.target.value, options)
  }

  const textMessageInputHandler = (value) => {
    setTextMessage(value)
    setCookie('textMessage', value, options)
  }

  const valueInputHandler = (value, day, target) => {
    if (day === 'token') {
      setSlackToken(value)
      setCookie('slackToken', value, options)
      return
    }
    if (target === 'personal') {
      setPersonalValues({...personalValues, [day]: value})
    } else {
      setValues({...values, [day]: value})
    }
  }

  function postToSlack(channel, text) {
    const {WebClient} = require('@slack/client')
    const web = new WebClient(slackToken)
    return web.chat.postMessage({channel, text})
  }

  const getTossLink = async (amount) => {
    const tossLinkRes = await axios.post(
      'https://toss.im/transfer-web/linkgen-api/link',
      {
        apiKey: '87489d67602649268f4372f91a91b03e',
        bankName: '기업',
        bankAccountNo: '54004018301018',
        message: username,
        amount,
      },
    )
    const {link} = tossLinkRes.data.success
    window.open(link)
    return link
  }

  const sendButtonOnClickHandler = async () => {
    try {
      if (!sum.co && !sum.pers) {
        throw new Error('전송할 내용이 없습니다.')
      }
    } catch (err) {
      alert(err.message)
      return
    }

    let finalMessage = ''
    if (sum.pers > 0) {
      finalMessage += `[개인카드] ${username} / 총지출: ${sum.pers} / 회사부담: ${calSum.pers}`
    }
    if (sum.co > 0) {
      if (finalMessage) finalMessage += '\n'
      finalMessage += `[법인카드] ${username} / 총지출: ${sum.co} / 개인부담: ${calSum.co}`
    }
    if (textMessage) {
      finalMessage += `\n${textMessage}`
    }
    if (window.confirm(`${finalMessage}\n전송하시겠습니까?`)) {
      try {
        if (sum.pers > 0 || sum.co > 0) {
          let tossLink
          if (calSum.co > 0) {
            tossLink = await getTossLink(calSum.co)
          }
          await postToSlack('UKPCGGH0B', `${finalMessage}\n<@${slackId}>`)
          await postToSlack(
            slackId,
            `${finalMessage} 전송되었습니다.\n${tossLink}`,
          )
        }
        setValues({mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
        setPersonalValues({mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
        setTextMessage('')
        setCookie('textMessage', '', options)
      } catch (err) {
        console.error(err)
        alert('메시지 전송 실패!')
        return
      }
    } else {
      console.error('전송취소')
    }
  }
  const authButtonOnClickHandler = async () => {
    try {
      if (!username) {
        throw new Error('이름을 입력해주세요.')
      } else if (!slackId) {
        throw new Error('슬랙 아이디를 확인해주세요.')
      } else if (!slackToken) {
        throw new Error('슬랙 토큰을 확인해주세요.')
      }
      await postToSlack(slackId, '인증되었습니다.')
      setIsAuth(true)
      setCookie('isAuth', true, options)
    } catch (err) {
      alert(err.message)
      return
    }
  }

  if (!isAuth) {
    return (
      <Container className="mt-2">
        <Row className="justify-content-center align-self-center">
          <Col lg={6}>
            <Card bg="Light" className="mt-5">
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
                  <Button
                    className="my-4"
                    onClick={authButtonOnClickHandler}
                    variant="outline-info"
                    block>
                    인증
                  </Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Container className="mt-2">
      <Row className="justify-content-center align-self-center">
        <Col lg={6}>
          <Card bg="Light">
            <Card.Body>
              <Form.Group>
                <Row>
                  <Button
                    className="ml-auto mr-3"
                    style={{margin: 0}}
                    size="sm"
                    onClick={() => setIsAuth(false)}
                    variant="outline-danger">
                    정보수정
                  </Button>
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
              <hr />
              <Form.Group>
                <Form.Label>추가설명</Form.Label>
                <Form.Control
                  type="text"
                  value={textMessage}
                  placeholder={'설명이 필요한 경우 작성해주세요.'}
                  onInput={(event) =>
                    textMessageInputHandler(event.target.value)
                  }
                />
              </Form.Group>
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
