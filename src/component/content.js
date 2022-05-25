import  React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";





export default function Content () {
    const [resultText, setResultText] = useState("");
    const [calcText, setCalcText] = useState("");



    const handleNumberPress = (text) => {
      if (text == "=" ) {
        return calculateResult();
      }
      setResultText(resultText + text);
    };

    const calculateResult = () => {
      setCalcText(eval(resultText));
    };

    const handleOperationPress = (operation) => {
      let operations = ["DEL", "+", "-", "*", "/", "%"];

      if (operation == "DEL") {
        return setResultText(
          resultText.toString().substring(0, resultText.length - 1)
        );
      }
      if (operation == "CLEAR") {
        setResultText("");
        setCalcText(0);
        return;
      }
      if (operations.includes(resultText.toString().split("").pop())) return;
      setResultText(resultText + operation);
    };

    return (
      <View style={{ position: "absolute", bottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 120,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 86, alignSelf: "flex-end" }}>
            {calcText}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 80,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 50, alignSelf: "flex-end" }}>
            {resultText}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 160,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("CLEAR")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(1)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(2)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("-")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("+")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(3)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(4)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("/")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("*")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(5)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(6)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleOperationPress("%")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#930707",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress("=")}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(7)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(8)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(9)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF5757",
              width: 72,
              height: 72,
              borderRadius: 10,
              margin: 8,
            }}
            onPress={() => handleNumberPress(0)}
          >
            <Text style={{ color: "#fff", fontSize: 34 }}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}