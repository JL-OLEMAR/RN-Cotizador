import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, View, LogBox } from 'react-native'

import { Form } from './src/components/Form'
import { Footer } from './src/components/Footer'
import { ResultCalc } from './src/components/ResultCalc'
import colors from './src/utils/colors'

// Para ignorar los warnings del 'Picker'
LogBox.ignoreLogs(['Picker has been extracted'])

const App = () => {
  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = () => {
    resetError()
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar')
    } else if (!interest) {
      setErrorMessage('Añade el ínteres del préstamo')
    } else if (!months) {
      setErrorMessage('Selecciona los meses a pagar')
    } else {
      const i = interest / 100
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
      })
    }
  }

  useEffect(() => {
    (capital && interest && months) ? onSubmit() : resetError()
  }, [capital, interest, months])

  const resetError = () => {
    setErrorMessage('')
    setTotal(null)
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.title}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          errorMessage={errorMessage}
        />
      </SafeAreaView>

      <ResultCalc
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />

      <Footer onSubmit={onSubmit} />

    </>
  )
}

export default App

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    height: 290
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
})
