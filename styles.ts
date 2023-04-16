import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: Constants.statusBarHeight,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#fff',
	},
	albumArtContainer: {
		width: '90%',
		height: '45%',
		borderRadius: 20,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
		marginBottom: 20,
	},
	albumArt: {
		width: '100%',
		height: '100%',
	},
	songInfoContainer: {
		alignItems: 'center',
	},
	songTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#fff',
		marginTop: 20,
	},
	songArtist: {
		fontSize: 18,
		color: '#fff',
		marginTop: 5,
	},
	controlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		marginBottom: 40,
	},
	playButton: {
		width: 90,
		height: 90,
		borderRadius: 50,
		backgroundColor: '#1DB954',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
