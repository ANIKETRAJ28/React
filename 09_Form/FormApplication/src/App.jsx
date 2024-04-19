import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import { FormContext } from './context/FormContext'

function App() {

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
});

  return (
    <>
      <FormContext.Provider value={{formValues, setFormValues}}>
        <Form/>
      </FormContext.Provider>
    </>
  )
}

export default App
