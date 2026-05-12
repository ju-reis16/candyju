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
            
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05',
              }}
              style={styles.galleryImage}
            />
          </ScrollView>

          <Text style={styles.footer}>
            Desenvolvido por Júlia Reis 
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PINK,
  },

  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: DARK_PINK,
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: GRAY,
    textAlign: 'center',
    marginBottom: 22,
  },

  mainImage: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 18,
  },

  description: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: DARK_PINK,
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#fff5fa',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#ffc2d1',
    color: '#333',
  },
  
  button: {
    width: '100%',
    height: 52,
    backgroundColor: PINK,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#ff69b4',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  buttonText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: 'bold',
  },

  secondButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#ffe3ec',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  
  secondButtonText: {
    color: DARK_PINK,
    fontSize: 16,
    fontWeight: 'bold',
  },

  infoBox: {
    backgroundColor: '#fff0f6',
    borderRadius: 18,
    padding: 18,
    marginTop: 28,
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: DARK_PINK,
    marginBottom: 12,
  },
  