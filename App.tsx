import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MusicPlayerScreen } from './MusicPlayerScreen';
import { SoundListScreen } from './SoundListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'SoundListScreen') {
							iconName = focused
								? 'ios-musical-notes'
								: 'ios-musical-notes-outline';
						} else if (route.name === 'MusicPlayerScreen') {
							iconName = focused
								? 'ios-information-circle'
								: 'ios-information-circle-outline';
						}

						return (
							<View style={styles.bottomMenuItem}>
								<Ionicons
									name={iconName}
									size={size}
									color={color}
									style={styles.icon}
								/>
							</View>
						);
					},
				})}
			>
				<Tab.Screen name='SoundListScreen' component={SoundListScreen} />
				<Tab.Screen name='MusicPlayerScreen' component={MusicPlayerScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	bottomMenu: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
		height: 56,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -3,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4.65,
		elevation: 6,
	},
	bottomMenuItem: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		height: '100%',
		paddingHorizontal: 16,
	},
	bottomMenuItemText: {
		fontSize: 12,
		fontWeight: '600',
		marginTop: 4,
		textAlign: 'center',
	},
	activeMenuItem: {
		borderBottomWidth: 2,
		borderBottomColor: '#333',
	},
	icon: {
		marginBottom: 2,
	},
});
