import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";


/*
  View: semelhante a uma div
  Text: semelhante a um span
  return: deve retornar somente um elemento (Dica: Fragment <></>)
*/

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])
    const [gretting, setGretting] = useState('');


    // padrão funções com handle (lidar com ações do usuário)
    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);// outra maneira de passar no valor para array de state
    }


    // Utilizando useEffect
    useEffect(() => {
        const currentHours = new Date().getHours()//pegando hora atual

        if(currentHours < 12) return setGretting('Good morning');

        if(currentHours >= 12 && currentHours < 18) return setGretting('Good afternoon');

        if(currentHours > 18) return setGretting('Good night');

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Pablo</Text>

            <Text style={styles.gretting}>
                {gretting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 20 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}//dados ou lista a ser carregado
                keyExtractor={(item, index) => index}// key de cada item, para o React não reclamar
                renderItem={({ item }) => (// como o item sera renderizado
                    <SkillCard skill={item} />
                )}
                showsVerticalScrollIndicator={false}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    gretting: {
        color: '#FFF',
    }
});