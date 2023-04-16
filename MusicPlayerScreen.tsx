import { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Alert, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';

import { styles } from './styles';

export function MusicPlayerScreen() {
	const [recording, setRecording] = useState<Audio.Recording | null>(null);
	const [recordingsFileURI, setRecordingsFileURI] = useState<string | null>(
		null
	);

	async function handleRecordingStart() {
		const { granted } = await Audio.getPermissionsAsync();

		if (granted) {
			try {
				const { recording } = await Audio.Recording.createAsync();
				setRecording(recording);
			} catch (error) {
				console.log('error', error);
				Alert.alert(
					'Erro ao gravar',
					'Não foi possível iniciar a gravação do áudio.'
				);
			}
		}
	}

	async function handleRecordingStop() {
		try {
			if (recording) {
				await recording.stopAndUnloadAsync();
				const fileUri = recording.getURI();
				setRecordingsFileURI(fileUri);
				setRecording(null);
			}
		} catch (error) {
			console.log('error', error);
			Alert.alert(
				'Erro ao pausar',
				'Não foi possível parar a gravação do áudio.'
			);
		}
	}

	async function handleAudioPlay() {
		if (recordingsFileURI) {
			const { sound } = await Audio.Sound.createAsync(
				{ uri: recordingsFileURI },
				{
					shouldPlay: true,
				}
			);

			await sound.setPositionAsync(0);
			await sound.playAsync();
		}
	}

	useEffect(() => {
		Audio.requestPermissionsAsync().then(({ granted }) => {
			if (granted) {
				Audio.setAudioModeAsync({
					allowsRecordingIOS: true,
					interruptionModeIOS: InterruptionModeIOS.DoNotMix,
					playsInSilentModeIOS: true,
					shouldDuckAndroid: true,
					interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
					playThroughEarpieceAndroid: true,
				});
			}
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MaterialIcons name='keyboard-arrow-down' size={40} color='#fff' />
				<Text style={styles.title}>Now Playing</Text>
				<MaterialIcons name='more-horiz' size={40} color='#fff' />
			</View>
			<View style={styles.albumArtContainer}>
				<Image
					style={styles.albumArt}
					source={{
						uri: 'https://images.unsplash.com/photo-1569788371809-d476d74fa7aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljJTIwbm93JTIwYXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
					}}
				/>
			</View>
			<View style={styles.songInfoContainer}>
				<Text style={styles.songTitle}>Song Title</Text>
				<Text style={styles.songArtist}>Song Artist</Text>
			</View>
			<View style={styles.controlsContainer}>
				<MaterialIcons name='shuffle' size={35} color='#fff' />
				<MaterialIcons name='skip-previous' size={50} color='#fff' />
				<Pressable
					style={styles.playButton}
					onPress={handleAudioPlay}
					disabled={!recordingsFileURI}
				>
					<MaterialIcons
						name={!recording ? 'play-arrow' : 'pause'}
						size={70}
						color='#fff'
					/>
				</Pressable>
				<MaterialIcons name='skip-next' size={50} color='#fff' />
				<MaterialIcons name='repeat' size={35} color='#fff' />
			</View>
			<StatusBar style='auto' />
		</View>
	);
}
