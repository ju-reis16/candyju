import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

const PINK = '#ff69b4';
const LIGHT_PINK = '#fff0f6';
const DARK_PINK = '#d63384';
const WHITE = '#FFFFFF';
const GRAY = '#666666';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>

          <Text style={styles.title}>CandyJu 🍭</Text>
          