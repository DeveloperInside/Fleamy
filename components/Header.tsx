import { View } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
export default function Header() {
    return (
        <Layout style={{ paddingHorizontal: 12, paddingTop: 32, paddingBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '900', fontSize: 18 }}>Fleamy</Text>
            <TouchableOpacity>
                <MaterialIcons name="people-alt" size={24} color="black" />
            </TouchableOpacity>
        </Layout>
    )
}