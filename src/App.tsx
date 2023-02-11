import * as React from "react"
import {
  ChakraProvider,
  VStack,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Textarea,
  extendTheme,
  type ThemeConfig
} from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

export const App = () => {

  const [calculated, setCalculated] = React.useState<boolean>();

  return (
    <ChakraProvider theme={theme}>
      <Center textAlign="center" fontSize="xl">
        <VStack mt={'4'}>
          <Heading>EDH Power Level Calculator</Heading>
          <Container maxW={'container.md'}>
            <Textarea placeholder='Enter your decklist here...' h={['calc(40vh)', 'calc(50vh)']} />
            <Container pl={'0'} mt={'2'} textAlign={'left'}>
              <Button onClick={() => setCalculated(true)}>Calculate</Button>
              <Button ml={'2'} onClick={() => setCalculated(false)}>Reset</Button>
            </Container>
            {calculated &&
              <Card mt={'2'}>
                <CardBody>
                  <Stat>
                    <StatLabel>Your deck is calculated to be power level</StatLabel>
                    <StatNumber>7</StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            }
          </Container>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}