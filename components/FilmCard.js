import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um filme (film) como propriedade
export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem do filme (pôster vertical) */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações do filme */}
      <View style={styles.info}>
        {/* Nome do personagem */}
        <Text style={styles.name}>{film.name ?? "Nome não disponível"}</Text>

        {/* casa de cada personagem*/}
        <Text style={styles.subtitle}>
          {film.house ?? "Casa não disponível"}
        </Text>

        {/* Título romanizado (em alfabeto latino) */}
        <Text style={styles.wizard}>
          {" "}
          {film.alive === true
            ? "Bruxo"
            : film.alive === false
            ? "Não é bruxo"
            : "Não informado"}
        </Text>

        {/* Se está vivo ou não */}
        <Text style={styles.text}>
          👻 Alive:{" "}
          {film.alive === true
            ? "Vivo"
            : film.alive === false
            ? "Morto"
            : "Não informado"}
        </Text>

        {/* Data de nascimento */}
        <Text style={styles.text}>
          📅 Data de nascimento: {film.dateOfBirth ?? "Não informado"}
        </Text>

        {/* Nome real do personagem*/}
        <Text style={styles.text}>
          👤 Nome do ator: {film.actor ?? "Não informado"}
        </Text>

        {/* Cor do cabelo e do olho */}
        <Text style={styles.text}>
          👁 Cor dos olhos: {film.eyeColour ?? "cor dos olhos não disponível"}
        </Text>
        <Text style={styles.text}>
          🪮 Cor do cabelo: {film.hairColour ?? "cor dos cabelo não disponível"}
        </Text>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 4,
    fontStyle: "italic",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
  wizard: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 6,
    textAlign: "justify",
    fontStyle: "italic",
  },
});
