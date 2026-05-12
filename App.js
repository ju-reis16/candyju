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
          
          <Text style={styles.subtitle}>
            O cantinho mais doce para amantes de sobremesas
          </Text>
          
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
            }}
            style={styles.mainImage}
          />

          <Text style={styles.description}>
            Descubra receitas deliciosas, doces incríveis e sobremesas fáceis
            para fazer no dia a dia.
          </Text>