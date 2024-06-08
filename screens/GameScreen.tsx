// GameScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Vibration, FlatList, ScrollView } from 'react-native';
import PlayerProfile from '../components/features/GameScreen/PlayerProfile';
import ActionButton from '../components/features/GameScreen/ActionButton';
import ValueDisplay from '../components/features/GameScreen/ValueDisplay';
import TotalSumDisplay from '../components/features/GameScreen/TotalSumDisplay';
import CountdownTimer from '../components/features/GameScreen/CountdownTimer';
import RoundDisplay from '../components/features/GameScreen/RoundDisplay';
import { getPosition } from '../components/features/GameScreen/utils/layoutUtils';

interface Player {
    id: number;
    name: string;
    imageUrl: any;
    choice: number;
    active: boolean;
    predictor: boolean;
}

interface Prediction {
    playerId: number;
    value: number;
}

const GameScreen: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([
        { id: 1, name: 'Alice', imageUrl: require('../assets/defaultProfile.jpg'), choice: 0, active: true, predictor: false },
        { id: 2, name: 'Bob', imageUrl: require('../assets/defaultProfile.jpg'), choice: 0, active: true, predictor: false },
        { id: 3, name: 'Joe', imageUrl: require('../assets/defaultProfile.jpg'), choice: 0, active: true, predictor: false },
        { id: 4, name: 'David', imageUrl: require('../assets/defaultProfile.jpg'), choice: 0, active: true, predictor: false },
        { id: 5, name: 'Moi', imageUrl: require('../assets/defaultProfile.jpg'), choice: 0, active: true, predictor: true }
    ]);
    const [totalSum, setTotalSum] = useState<number>(0);
    const [showTotal, setShowTotal] = useState<boolean>(false);
    const [currentRound, setCurrentRound] = useState<number>(1);
    const [timeLeft, setTimeLeft] = useState<number>(20);
    const [prediction, setPrediction] = useState<Prediction | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                Vibration.vibrate();
                calculateTotalSum();
                rotatePredictionRights();
                setCurrentRound(currentRound + 1);
                setTimeLeft(20);
                simulateBotChoices();
            } else {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    
    const calculateTotalSum = () => {
        const sum = players.filter(p => p.active).reduce((acc, player) => acc + player.choice, 0);
        setTotalSum(sum);
        setShowTotal(true);
    };

    const rotatePredictionRights = () => {
        const activePlayers = players.filter(p => p.active);
        const newPredictorIndex = (activePlayers.findIndex(p => p.predictor) + 1) % activePlayers.length;
        setPlayers(currentPlayers => currentPlayers.map(player => ({
            ...player,
            predictor: player.id === activePlayers[newPredictorIndex].id
        })));
    };

    const simulateBotChoices = () => {
        setPlayers(currentPlayers => currentPlayers.map(player =>
            player.active && player.id !== 5 ? { ...player, choice: Math.floor(Math.random() * 2) * 5 } : player
        ));
        console.log(players.map(player => player.choice));
    };

    const handlePlayerChoice = (choice: number) => {
        setPlayers(currentPlayers => currentPlayers.map(player => 
            player.id === 5 ? { ...player, choice } : player
        ));
        setShowTotal(false);
    };

    const handlePrediction = (predictedSum: number) => {
        setPrediction({ playerId: 5, value: predictedSum });
    };

    const renderPredictionItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePrediction(item)} style={styles.predictionItem}>
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <RoundDisplay currentRound={currentRound} />
            <CountdownTimer timeLeft={timeLeft} />
            <View style={styles.circle}>
                {players.map((player, index) => (
                    <View key={player.id} style={{ ...styles.profileContainer, ...getPosition(index, players.length) }}>
                        <PlayerProfile name={player.name} imageUrl={player.imageUrl} />
                        {(showTotal || player.name === 'Moi') && <ValueDisplay value={player.choice} />}
                        <Text style={styles.predictorIndicator}>{player.predictor ? 'Predictor' : ''}</Text>
                    </View>
                ))}
                {showTotal && <TotalSumDisplay sum={totalSum} />}
            </View>
            <View style={styles.actionContainer}>
                <ActionButton title="0" onPress={() => handlePlayerChoice(0)} />
                <ActionButton title="5" onPress={() => handlePlayerChoice(5)} />
                {players.find(p => p.id === 5 && p.active && p.predictor) && (
                    <FlatList
                        data={new Array(Math.ceil(players.filter(p => p.active).length * 5 / 5)).fill(0).map((_, idx) => idx * 5)}
                        renderItem={renderPredictionItem}
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        style={styles.flatList}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#606C38',
    },
    circle: {
        width: 300,
        height: 300,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileContainer: {
        position: 'absolute',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateX: -30 }, { translateY: -30 }]
    },
    actionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    predictorIndicator: {
        position: 'absolute',
        bottom: -20,
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 12
    },
    predictionItem: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 5
    },
    flatList: {
        flexDirection: 'column',
        maxHeight: 100,
        marginTop: 10
    }
});

export default GameScreen;
