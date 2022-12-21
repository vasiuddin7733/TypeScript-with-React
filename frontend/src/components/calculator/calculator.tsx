import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import Display from './display'
import Pad from './pad'
import { Digit, Operator } from './type'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  width: 100%;
  max-width: 320px;
`

const CalculatorItem: FunctionComponent = () => {
  // Calculator's states
  const [memory, setMemory] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()
  const [display, setDisplay] = useState<string>('0')

  const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
    let newResult = result

    switch (pendingOperator) {
      case '+':
        newResult += rightOperand
        break
      case '-':
        newResult -= rightOperand
        break
      case '×':
        newResult *= rightOperand
        break
      case '÷':
        if (rightOperand === 0) {
          return false
        }

        newResult /= rightOperand
    }

    setResult(newResult)
    setDisplay(newResult.toString().toString().slice(0, 12))

    return true
  }

  // Pad buttons handlers
  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display

    if ((display === '0' && digit === 0) || display.length > 12) {
      return
    }

    if (waitingForOperand) {
      newDisplay = ''
      setWaitingForOperand(false)
    }

    if (display !== '0') {
      newDisplay = newDisplay + digit.toString()
    } else {
      newDisplay = digit.toString()
    }

    setDisplay(newDisplay)
  }

  const onPointButtonClick = () => {
    let newDisplay = display

    if (waitingForOperand) {
      newDisplay = '0'
    }

    if (newDisplay.indexOf('.') === -1) {
      newDisplay = newDisplay + '.'
    }

    setDisplay(newDisplay)
    setWaitingForOperand(false)
  }

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display)

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }
    } else {
      setResult(operand)
    }

    setPendingOperator(operator)
    setWaitingForOperand(true)
  }

  const onChangeSignButtonClick = () => {
    const value = Number(display)

    if (value > 0) {
      setDisplay('-' + display)
    } else if (value < 0) {
      setDisplay(display.slice(1))
    }
  }

  const onEqualButtonClick = () => {
    const operand = Number(display)

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }

      setPendingOperator(undefined)
    } else {
      setDisplay(operand.toString())
    }

    setResult(operand)
    setWaitingForOperand(true)
  }

  const onAllClearButtonClick = () => {
    setMemory(0)
    setResult(0)
    setPendingOperator(undefined)
    setDisplay('0')
    setWaitingForOperand(true)
  }

  const onClearEntryButtonClick = () => {
    setDisplay('0')
    setWaitingForOperand(true)
  }

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString())
    setWaitingForOperand(true)
  }

  const onMemoryClearButtonClick = () => {
    setMemory(0)
    setWaitingForOperand(true)
  }

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display))
    setWaitingForOperand(true)
  }

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display))
    setWaitingForOperand(true)
  }

  return (
    <div className='w-[25rem] mt-36'>
      <StyledApp>
        <Display value={display} hasMemory={memory !== 0} expression={typeof pendingOperator !== 'undefined' ? `${result}${pendingOperator}${waitingForOperand ? '' : display}` : ''} />
        <Pad
          onDigitButtonClick={onDigitButtonClick}
          onPointButtonClick={onPointButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onChangeSignButtonClick={onChangeSignButtonClick}
          onEqualButtonClick={onEqualButtonClick}
          onAllClearButtonClick={onAllClearButtonClick}
          onClearEntryButtonClick={onClearEntryButtonClick}
          onMemoryRecallButtonClick={onMemoryRecallButtonClick}
          onMemoryClearButtonClick={onMemoryClearButtonClick}
          onMemoryPlusButtonClick={onMemoryPlusButtonClick}
          onMemoryMinusButtonClick={onMemoryMinusButtonClick}
        />
      </StyledApp>
      <div className="flex justify-center items-center pt-10 pr-24">
        <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/">
          Home page
        </a>
      </div>
    </div>
  )
}

export default CalculatorItem