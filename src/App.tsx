import { MantineProvider, Text, Center, Button, Drawer, useMantineColorScheme, AppShell, Burger, Skeleton, NavLink, CheckIcon} from '@mantine/core';
import '@mantine/core/styles.css';

import { Slider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return <Slider defaultValue={40} marks={marks} />;
}



export default function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedBurger, { toggle }] = useDisclosure();




  return (
    <MantineProvider  defaultColorScheme="auto" withCssVariables={true} withGlobalClasses={true}>
          <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !openedBurger },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md"><AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<CheckIcon size="1rem"  />}
      />
          ))}
      </AppShell.Navbar></AppShell.Navbar>

      <AppShell.Main>
        <Text>Hello Guiudhf</Text>

        <Demo></Demo>
        <Drawer opened={opened} onClose={close} title="Authentication">
          {/* Drawer content */}
        </Drawer>

        <ThemeManage/>

        <Center>
          <Button onClick={open}>Hi</Button>
        </Center>
        
      </AppShell.Main>
    </AppShell>


  
    </MantineProvider>
  );
}


function ThemeManage() {
     const { setColorScheme, clearColorScheme, colorScheme } = useMantineColorScheme();

     return  <>
      {
      colorScheme == 'auto' ? <Button onClick={()=>setColorScheme('light')}>AUTO THEME, Set light</Button> :
      colorScheme == 'dark'  ? <Button onClick={()=>setColorScheme('light')}>Reset</Button> : <Button onClick={()=>setColorScheme('dark')}>Set Dark</Button> }

     </>

}