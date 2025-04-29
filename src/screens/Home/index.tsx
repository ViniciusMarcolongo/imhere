import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
    const participants = ['Vinicius', 'Lucas', 'Gustavo', 'Gabriel', 'Matheus', 'João', 'Pedro', 'Thiago', 'Felipe', 'Rafael', 'Bruno',  ]

    

    function handleParticipantAdd() {
        
        console.log("Adicionar participante")
    }

    
    function handleParticipantRemove() {
        console.log("Remover participante")
    }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Esse é o meu APP 
        </Text>

        <View style={styles.form}>
            <TextInput style={styles.input}
                placeholder="Escreva aqui..."
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
                    onRemove={handleParticipantRemove}
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