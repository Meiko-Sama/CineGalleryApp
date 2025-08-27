import { Text } from "react-native"

export default function TextComp({ txt }) {
  return (
    <Text style={{ color: "rgb(255, 255, 255)", bottom: 40, fontSize: 13, }}>{txt}</Text>
  )
}
