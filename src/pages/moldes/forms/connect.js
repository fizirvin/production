import React from 'react'
import { connect, useSelector } from 'react-redux'
import { changeTextInput, changeNumberInput } from './formActions'
import Form from './form'

const Connect = ({ changeTextInput, changeNumberInput }) => {
  console.log('yo soy connect de form')

  return <Form />
}

// const mapStateToProps = (state) => ({
//   inputs: state.moldesForm
// })

export default connect(null, { changeTextInput, changeNumberInput })(Connect)
