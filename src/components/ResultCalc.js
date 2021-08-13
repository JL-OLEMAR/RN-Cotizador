import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DataResult = ({ titulo, value }) => {
  return (
    <View style={styles.dataResult}>
      <Text>{titulo}</Text>
      <Text>{value}</Text>
    </View>
  )
}

export const ResultCalc = ({ capital, interest, months, total, errorMessage }) => {
  return (
    <View style={styles.containerResult}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.titleResult}>RESUMEN</Text>

          <DataResult titulo='Cantidad Solicitada:' value={`S/ ${capital}`} />
          <DataResult titulo='Interes %:' value={`${interest} %`} />
          <DataResult titulo='Plazos:' value={`${months} meses`} />
          <DataResult titulo='Pago mensual:' value={`S/ ${total.monthlyFee}`} />
          <DataResult titulo='Pago total:' value={`S/ ${total.totalPayable}`} />

        </View>
      )}
      <View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerResult: {
    marginHorizontal: 40
  },
  boxResult: {
    padding: 30
  },
  titleResult: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  dataResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  errorMessage: {
    color: '#f00',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
