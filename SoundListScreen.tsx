import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = [
	{
		id: 1,
		name: 'Song 1',
		artist: 'Artist 1',
		duration: '4:20',
		image: require('./assets/icon.png'),
		liked: 1,
	},
	{
		id: 2,
		name: 'Song 2',
		artist: 'Artist 2',
		duration: '3:45',
		image: require('./assets/icon.png'),
		liked: 0,
	},
	// add more songs here...
];

export function SoundListScreen() {
	const renderItem = ({ item }: any) => (
		<TouchableOpacity style={styles.songContainer}>
			<Image style={styles.songImage} source={item.image} />
			<View style={styles.songDetails}>
				<Text style={styles.songName}>{item.name}</Text>
				<Text style={styles.songArtist}>{item.artist}</Text>
			</View>
			<Text style={styles.songDuration}>{item.duration}</Text>
			<TouchableOpacity style={styles.likeButton}>
				<MaterialCommunityIcons
					name={item.liked > 0 ? 'heart' : 'heart-outline'}
					size={24}
					color={item.liked >= 0 ? '#ff2d55' : '#ffffff'}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.listContainer}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	listContainer: {
		padding: 16,
	},
	songContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 8,
	},
	songImage: {
		width: 64,
		height: 64,
		borderRadius: 4,
	},
	songDetails: {
		marginLeft: 16,
	},
	songName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#1B1D1E',
	},
	songArtist: {
		fontSize: 14,
		color: '#B3B3B3',
	},
	songDuration: {
		position: 'absolute',
		right: 0,
		fontSize: 14,
		color: '#B3B3B3',
	},
	likeButton: {
		position: 'absolute',
		right: 16,
		width: 32,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 32,
	},
	likeIcon: {
		width: 20,
		height: 20,
	},
});
