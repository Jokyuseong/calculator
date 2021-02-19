import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import {useCookies} from 'react-cookie'
import './App.css'

const days = ['월', '화', '수', '목', '금']

const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function postToSlack(channel: string, text: string) {
  const {WebClient} = require('@slack/client')
  const web = new WebClient(process.env.REACT_APP_SLACK_TOKEN)
  return web.chat.postMessage({channel, text})
}

function App() {
  const [cookies, setCookie] = useCookies(['rememberValues'])
  const [username, setUsername] = useState('')
  const [slackId, setSlackId] = useState('')
  const [values, setValues] = useState(
    cookies.values || {mon: 0, tue: 0, wed: 0, thu: 0, fri: 0},
  )
  const [sum, setSum] = useState(0)
  const [calSum, setCalSum] = useState(0)

  useEffect(() => {
    setUsername(cookies.username || '')
    setSlackId(cookies.slackId || '')
    setSum(cookies.sum || 0)
    setCalSum(cookies.calSum || 0)
    setValues(cookies.values || {mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
  }, [])

  useEffect(() => {
    let tempSum = 0
    let tempCalSum = 0

    Object.keys(values).forEach((day) => {
      if (typeof values[day] !== 'number') return
      let temp = values[day] - 6000
      if (temp < 0) temp = 0

      tempSum += values[day]
      tempCalSum += temp
    })

    setSum(tempSum)
    setCalSum(tempCalSum)
    setCookie('sum', tempSum)
    setCookie('calSum', tempCalSum)
    setCookie('values', values)
  }, [values])

  const usernameInputHandler = (e) => {
    setUsername(e.target.value)
    setCookie('username', e.target.value)
  }

  const slackIdInputHandler = (e) => {
    setSlackId(e.target.value)
    setCookie('slackId', e.target.value)
  }

  const valueInputHandler = (value, day) => {
    setValues({...values, [day]: value})
  }

  const sendButtonOnClickHandler = async () => {
    try {
      if (!username) {
        throw new Error('이름을 입력해주세요.')
      } else if (!sum) {
        throw new Error('값을 확인해주세요.')
      } else if (!slackId) {
        throw new Error('슬랙 아이디를 확인해주세요.')
      }
    } catch (err) {
      alert(err.message)
      return
    }

    const toSendMessage = `${username} / ${sum} / ${calSum}`

    if (window.confirm(`${toSendMessage} 전송하시겠습니까?`)) {
      try {
        await postToSlack(
          process.env.REACT_APP_SLACK_ID,
          `${toSendMessage}         <@${slackId}>`,
        )
        await postToSlack(slackId, `${toSendMessage} 전송되었습니다.`)
      } catch (err) {
        console.error(err)
        alert('메시지 전송 실패!')
        return
      }
      setValues({mon: 0, tue: 0, wed: 0, thu: 0, fri: 0})
    } else {
      console.log('취소')
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-self-center">
        <Col lg={6}>
          <Card bg="Light">
            <Card.Body>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label column lg={2}>
                      슬랙ID
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="이름"
                      value={slackId}
                      onInput={slackIdInputHandler}
                    />
                  </Col>
                  <Col>
                    <Form.Label column lg={2}>
                      이름
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Slack ID"
                      value={username}
                      onInput={usernameInputHandler}
                    />
                  </Col>
                </Row>
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
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              {`${username} / ${comma(sum)} / ${comma(calSum)}`}
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
