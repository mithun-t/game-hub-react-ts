import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List>
      {genres &&
        genres.map((genre) => (
          <HStack paddingY="5px">
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <ListItem key={genre.id}>{genre.name}</ListItem>
          </HStack>
        ))}
    </List>
  );
};

export default GenreList;
