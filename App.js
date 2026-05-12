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
          
          <Text style={styles.label}>Seu nome</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={GRAY}
          />

          <Text style={styles.label}>Doce favorito</Text>

          <TextInput
            style={styles.input}
            placeholder="Brigadeiro, cupcake, bolo..."
            placeholderTextColor={GRAY}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>COMEÇAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.secondButtonText}>VER RECEITAS</Text>
          </TouchableOpacity>

          {/* Informações */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>
              ✨ O que você encontra no app:
            </Text>

            <Text style={styles.info}>
              🍰 Receitas rápidas e simples
            </Text>

            <Text style={styles.info}>
              🍫 Doces para festas e ocasiões especiais
            </Text>

            <Text style={styles.info}>
              🧁 Passo a passo fácil de seguir
            </Text>
          </View>
          
          <Text style={styles.galleryTitle}>Mais pedidos!💖</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
              }}
              style={styles.galleryImage}
            />

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1519869325930-281384150729',
              }}
              style={styles.galleryImage}
            />