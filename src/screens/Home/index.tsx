import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
        }

         setParticipants(prevState => [...prevState, participantName]);
         setParticipantName('');
    }

    
    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                }
            }
        ]);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Esse é o meu APP 
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Escreva aqui..."
                onChangeText={setParticipantName}
                value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>  
        </View>
        <FlatList
            data={participants} 
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item}
                    name={item}
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        /> 

    </View>
    
  )
}  