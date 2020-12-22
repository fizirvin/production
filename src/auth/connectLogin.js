import React from 'react'
import { connect } from 'react-redux'
import Login from './login'
import { PortalComponent, Message } from 'layouts'
import Spinner from 'components/spinner'
import { LoginDiv } from './styles'

const ConnectLogin = ({ request, onLogin }) => {
  const { loading, message } = request
  return (
    <LoginDiv>
      {loading && <Spinner />}
      {message && (
        <PortalComponent>
          <Message message={message} name={'CLEAN_MESSAGE_LOGIN'} to={'/'} />
        </PortalComponent>
      )}
      {!loading && !message && <Login onLogin={onLogin} />}
    </LoginDiv>
  )
}

const mapStateToProps = (state) => ({
  request: state.user
})

export default connect(mapStateToProps, {})(ConnectLogin)
