import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
    handleRemoveCard: () => void;
}

export function SkillCard({ skill, handleRemoveCard, ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill} 
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
            <Text 
                style={styles.iconRemove}
                onPress={() => handleRemoveCard()}
            >
                <Icon name="close" size={18} color="#FFF" />
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonSkill: {
        flexDirection: 'row',
        backgroundColor: '#1F1E25',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    textSkill: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconRemove: {
        backgroundColor: '#A370F7',
        borderRadius: 100,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})