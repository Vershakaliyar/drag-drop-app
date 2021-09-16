import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";

function App() {
  const [players, setPlayer] = useState([
    { name: "#123455" },
    { name: "#543211" },
     { name: "#543221" },
    { name: "#123455" },
    { name: "#123455" },
    { name: "#123455" },
     { name: "#123455" },
    { name: "#123455" },
    { name: "#123455" },
    { name: "#123455" },
     { name: "#123455" },
    { name: "#123455" },
    { name: "#123455" },
    { name: "#123455" },
     { name: "#123455" },
    { name: "#123455" },
  ]);

  const [team, setTeam] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    console.log(item);
    setPlayer((prev) => prev.filter((_, i) => item.index !== i));
    setTeam((prev) => [...prev, item]);
  };
  const removePlayerFromTeam = (item) => {
    setTeam((prev) => prev.filter((_, i) => item.index !== i));
    setPlayer((prev) => [...prev, item]);
  };

  return (
    <Container maxW="100%">
      

      <Flex justify="space-between" >
        <Stack width="30%">
          <Heading fontSize="xl" color="yellow.800" textAlign="center">
            PO Number
          </Heading>
          <List
            bgGradient={
              isPlayerOver
                ? "linear(to-b, white, white)"
                : "linear(to-b, white, white)"
            }
            ref={removeFromTeamRef}
            p="4"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
          >
            {players.map((p, i) => (
              <Player
                item={p}
                key={i}
                playerType="player"
                onDropPlayer={movePlayerToTeam}
                index={i}
              />
            ))}
          </List>
        </Stack>
        <Stack width="80%">
          <Heading fontSize="xl" color="teal.800" textAlign="center">
            Container 1
          </Heading>
          <List
            bgGradient={
              isOver
                ? "linear(to-b, white, white)"
                : "linear(to-b, white, white)"
            }
            ref={addToTeamRef}
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            p="4"
          >
            {team.map((p, i) => (
              <Player
                item={p}
                key={i}
                index={i}
                playerType="team"
                onDropPlayer={removePlayerFromTeam}
              />
            ))}
          </List>
        </Stack>
        <Stack width="80%">
          <Heading fontSize="xl" color="teal.800" textAlign="center">
            Container 2
          </Heading>
          <List
            bgGradient={
              isOver
                ? "linear(to-b, white, white)"
                : "linear(to-b, white, white)"
            }
            ref={addToTeamRef}
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            p="4"
          >
            {team.map((p, i) => (
              <Player
                item={p}
                key={i}
                index={i}
                playerType="team"
                onDropPlayer={removePlayerFromTeam}
              />
            ))}
          </List>
        </Stack>
        <Stack width="80%">
          <Heading fontSize="xl" color="teal.800" textAlign="center">
            Container 3
          </Heading>
          <List
            bgGradient={
              isOver
                ? "linear(to-b, white, white)"
                : "linear(to-b, white, white)"
            }
            ref={addToTeamRef}
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            p="4"
          >
            {team.map((p, i) => (
              <Player
                item={p}
                key={i}
                index={i}
                playerType="team"
                onDropPlayer={removePlayerFromTeam}
              />
            ))}
          </List>
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;
