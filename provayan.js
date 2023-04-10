import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ item }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 20 }}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>
          {item.name}
        </Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity
          style={styles.cardButton}>
          <Text style={styles.cardButtonText}>
            Propor Troca
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const items = [
    {
      id: 1,
      name: 'Espada de luz e sombra',
      description: 'Uma espada metade luz e metade escuridão que causa o dobro de dano a inimigos de tipo contrario da lamina',
      image:
        'https://i.pinimg.com/736x/db/f8/7e/dbf87e64031bf3443923f7a93c603118--fantasy-weapons-fantasy-rpg.jpg',
    },
    {
      id: 2,
      name: 'O anel',
      description: 'Um lendario anel que dobra sua armadura e da dano de fogo aos inimigos',
      image:
        'https://geekculture.co/wp-content/uploads/2023/03/1-of-1-ring-mtg-lord-of-the-rings.jpg',
    },
    {
      id: 3,
      name: 'Brincos de potara',
      description: 'São brincos que fazem parte de um comum traje de treinamento mas com propriedade para 2 usuarios se fundirem',
      image:
        'https://pm1.narvii.com/6488/6c9136770bd0fef6076cdabcc8afef0759811b93_00.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262A56',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#B8621B',
    borderRadius: 10,
    padding: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardDescription: {
    marginTop: 10,
  },
  cardButton: {
    backgroundColor: '#E3CCAE',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  cardButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default App;
