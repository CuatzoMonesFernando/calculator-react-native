import React from "react";
import { Text, View } from "react-native";
import { CalculatorButton } from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";
import { styles } from "../theme/appTheme";

export const CalculatorScreen = () => {

    const {
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
        calculate,
    } = useCalculator()

    return (
        <View style={ styles.calculatorContainer }>
            {
                ( beforeNumber !== '0' ) && (
                    <Text style={ styles.resultOperations }>{ beforeNumber }</Text>
                )
            }
            

            <Text style={ styles.result } numberOfLines={1} adjustsFontSizeToFit >{ digit }</Text>
            <View style={ styles.row }>
                {/* -rows buttons*/}
                <CalculatorButton text="C" color="#9B9B9B" action={ clean } />
                <CalculatorButton text="+/-" color="#9B9B9B" action={ positiveNegative } />
                <CalculatorButton text="Del" color="#9B9B9B" action={ bntDelete } />
                <CalculatorButton text="/" color="#FF9427" action={ btnDivide } />
            </View>

            <View style={ styles.row }>
                {/* -rows buttons*/}
                <CalculatorButton text="7" action={ buildNumber }/>
                <CalculatorButton text="8" action={ buildNumber }/>
                <CalculatorButton text="9" action={ buildNumber }/>
                <CalculatorButton text="X" color="#FF9427" action={ btnMultiply } />
            </View>

            <View style={ styles.row }>
                {/* -rows buttons*/}
                <CalculatorButton text="4" action={ buildNumber }/>
                <CalculatorButton text="5" action={ buildNumber }/>
                <CalculatorButton text="6" action={ buildNumber }/>
                <CalculatorButton text="-" color="#FF9427" action={ btnSubstract } />
            </View>

            <View style={ styles.row }>
                {/* -rows buttons*/}
                <CalculatorButton text="1" action={ buildNumber }/>
                <CalculatorButton text="2" action={ buildNumber }/>
                <CalculatorButton text="3" action={ buildNumber }/>
                <CalculatorButton text="+" color="#FF9427" action={ btnAdd } />
            </View>

            <View style={ styles.row }>
                {/* -rows buttons*/}
                <CalculatorButton text="0" _width action={ buildNumber } />
                <CalculatorButton text="." action={ buildNumber } />
                <CalculatorButton text="=" color="#FF9427" action={ calculate } />
            </View>

        </View>
    )

}