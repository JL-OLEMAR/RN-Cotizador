import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import colors from '../utils/colors'

export const Form = ({ setCapital, setInterest, setMonths, errorMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder='Cantidad a pedir'
          keyboardType='numeric'
          autoFocus={errorMessage !== ''}
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.input, styles.inputPercentage]}
          placeholder='Ínteres %'
          keyboardType='numeric'
          autoFocus={errorMessage !== ''}
          onChange={e => setInterest(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={pickerSelectStyle}
        onValueChange={(value) => setMonths(value)}
        placeholder={{ label: 'Selecciona los plazos...', value: null }}
        items={[
          { key: 1, label: '1 Mes', value: 1 },
          { key: 2, label: '2 Meses', value: 2 },
          { key: 3, label: '3 Meses', value: 3 },
          { key: 6, label: '6 Meses', value: 6 },
          { key: 12, label: '12 Meses', value: 12 },
          { key: 24, label: '24 Meses', value: 24 }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    bottom: 0,
    height: 180,
    justifyContent: 'center',
    paddingHorizontal: 50,
    position: 'absolute',
    width: '85%'
  },
  containerInputs: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    color: 'rgba(0,0,0,0.8)',
    height: 50,
    marginBottom: 10,
    marginLeft: -5,
    marginRight: 5,
    paddingHorizontal: 18,
    width: '60%'
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5
  }
})

const pickerSelectStyle = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 1,
    color: 'black',
    fontSize: 16,
    marginLeft: -5,
    marginRight: -5,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 12
  },
  inputAndroid: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderRadius: 8,
    borderWidth: 0.5,
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 8
  }
})
