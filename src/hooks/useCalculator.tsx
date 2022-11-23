import { useRef, useState } from "react"


enum Operators {
    add, subtract, multiply, divide
}

export const useCalculator = () => {
    const [digit, setDigit] = useState('0')
    const [beforeNumber, setBeforeNumber] = useState('0')
    const operation = useRef<Operators>()

    const clean = () => {
        setDigit('0')
        setBeforeNumber('0')
    }

    const btnDivide = () => {
        changeNumerToBeforeNumber()
        operation.current = Operators.divide
    }

    const btnMultiply = () => {
        changeNumerToBeforeNumber()
        operation.current = Operators.multiply
    }

    const btnSubstract = () => {
        changeNumerToBeforeNumber()
        operation.current = Operators.subtract
    }

    const btnAdd = () => {
        changeNumerToBeforeNumber()
        operation.current = Operators.add
    }

    const buildNumber = ( textNumber: string ) => {

        if (digit.includes('.') && textNumber === '.') return

        if (digit.startsWith('0') || digit.startsWith('-0')) {
            /// include decimal point
            if (digit === '.') {
                setDigit( digit + textNumber ) 
                // evaluate if there is a zero and there is a point
            } else if (textNumber === '0' && digit.includes('.')) {
                setDigit( digit + textNumber ) 
                // evaluate if it is different from zero and does not have a point
            } else if (textNumber !== '0' && !digit.includes('.')) {
                setDigit(textNumber)
                // exclude 0000.00
            } else if (textNumber === '0' && !digit.includes('.')) {
                setDigit(digit)
            } else {
                setDigit(digit + textNumber )
            }
        } else {
            setDigit( digit + textNumber )    
        }
    }

    const bntDelete = () => {
        let negative = '';
        let tempNumber = digit;
        if (digit.includes('-')) {
            negative = '-'
            tempNumber = digit.substr(1)
        }
        if (tempNumber.length > 1) setDigit( negative + tempNumber.slice(0, -1))
        else setDigit('0')
    }

    const positiveNegative = () => {
        if (digit.includes('-')) setDigit(digit.replace('-', ''))
        else setDigit('-' + digit)
    }

    const changeNumerToBeforeNumber = () => {
        if (digit.endsWith('.')) {
            setBeforeNumber(digit.slice(0, -1))
        } else {
            setBeforeNumber(digit)
        }
        setDigit('0')
    }

    const calculate = () => {
        const num1 = Number(digit)
        const num2 = Number(beforeNumber)

        switch (operation.current) {
            case Operators.add:
                    setDigit(`${num1 + num2}`)
                break;

            case Operators.subtract:
                setDigit(`${num2 - num1}`)
            break;

            case Operators.multiply:
                setDigit(`${num1 * num2}`)
            break;

            case Operators.divide:
                if (num1 === 0 || num2 === 0) setDigit('0')
                else setDigit(`${num2 / num1}`)
            break;
        }

        setBeforeNumber('0')
    }

    return {
        beforeNumber,
        digit,
        clean,
        positiveNegative,
        bntDelete,
        btnDivide,
        buildNumber,
        btnMultiply,
        btnSubstract,
        btnAdd,
        calculate
    }
}
