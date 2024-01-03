import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres &&
          genres.map((genre) => (
            <ListItem key={genre.id}>
              <HStack paddingY="5px" key={genre.id}>
                <Image
                  src={genre.image_background}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "Bold" : "normab"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
