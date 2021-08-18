import tw, { styled } from 'twin.macro';

export const GridBoard = styled.div`
  ${tw`grid grid-cols-8 p-2`}
`;
export const GridItem = styled.div`
  ${tw`p-4 -mt-px -ml-px text-center border border-gray-200`}
`;
