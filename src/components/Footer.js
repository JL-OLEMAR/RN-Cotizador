import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/colors'

export const Footer = ({ onSubmit }) => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSubmit}
        style={styles.button}
      >
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
    height: 100,
    width: '100%'
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    padding: 16,
    width: '75%'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
