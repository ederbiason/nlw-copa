import { FlatList, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

import { Game, GameProps } from './Game';

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [games, setGames] = useState<GameProps[]>([])
  const [firstTeamPoints, setFirstTeamPoints] = useState('')
  const [secondTeamPoints, setSecondTeamPoints] = useState('')

  const toast = useToast()

  async function fetchGames() {
    try { 
      setIsLoading(true)
      
      const response = await api.get(`/pools/${poolId}/games`)
      
      setGames(response.data.games)

    } catch (error) {
        console.log(error)

        toast.show({
            title: 'Não foi possível carregar os jogos',
            placement: 'top',
            bgColor: 'red.500'
        })
    } finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [poolId])

  return (
    <FlatList 
      data={games}
      keyExtractor={item => item.id} 
      renderItem={( { item } ) => (
        <Game
          key={item.id}
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => {}}
        />
      )}
    />
  );
}
