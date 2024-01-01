import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge
        borderRadius="4px"
        fontSize="14px"
        colorScheme={color}
        paddingX={2}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
