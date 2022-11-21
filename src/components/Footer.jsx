import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-end">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-end align-items-center">
              <a
                href="https://www.linkedin.com/in/eduarchilon/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="/" className="link-href">
                <span>CV</span>
              </a>
            </div>
            <p>
              Made by Eduar Chilon Cruz | based on template of{' '}
              <a
                href="https://github.com/od1na/personal-website?ref=reactjsexample.com"
                target="_blank"
              >
                od1na
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
