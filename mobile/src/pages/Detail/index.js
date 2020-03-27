import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';


import logoImg from '../../assets/logo.png'

import styles from './styles';
import { setLightEstimationEnabled } from 'expo/build/AR';


export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => { }}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}> APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Testando o caso</Text>


                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>
            <View styles={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso</Text>

                <Text style={styles.heroDescription}> Entre em contato</Text>

                <View style={styles.action}>
                    <TouchableOpacity styles={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}> Whatsapp</Text>
                        <Text style={styles.actionText}> E-mail</Text>

                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}