import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

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
                X
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})