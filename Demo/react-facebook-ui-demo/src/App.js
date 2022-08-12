import React, { useState } from 'react';
import {
  Navbar,
  NavLarge,
  Button,
  NavItem,
  NavSmall,
  ButtonIcon,
  Card,
  Image,
  useAppTheme,
} from 'react-facebook-ui';
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as ListIcon } from "./assets/list.svg";

import FormStepperExample from './FormStepperExample';

export default function App() {
  const { theme, changeTheme } = useAppTheme();

  const toggleTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const [smallNavOpen, set_smallNavOpen] = useState(false);
  const closeMobileMenu = () => {
    set_smallNavOpen(false);
  };

  //
  return (
    <>
      <Navbar fixed={true}>
        <NavLarge>
          <li className="flex-grow-1">
            <img
              className="py-2"
              src="https://raw.githubusercontent.com/samikhammar/react-facebook-ui/main/react-facebook-ui-logo.svg"
              alt="logo"
              style={{ height: '100%' }}
            />
          </li>
          <li className="d-flex align-items-center">
            <Button active="primary">Home</Button>
          </li>
          <NavItem>About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <NavItem>Friend List</NavItem>
        </NavLarge>
        <NavSmall
          toggleState={[smallNavOpen, set_smallNavOpen]}
          toggle={
            <ButtonIcon
              icon={<ListIcon />}
              color={smallNavOpen ? undefined : 'transparent'}
              active={smallNavOpen ? 'primary' : undefined}
              onClick={() => set_smallNavOpen((o) => !o)}
            />
          }
          logo={
            <img
              className="py-2 ps-2"
              src="https://raw.githubusercontent.com/samikhammar/react-facebook-ui/main/react-facebook-ui-logo.svg"
              alt="logo"
            />
          }
        >
          <NavItem onClick={closeMobileMenu}>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem onClick={closeMobileMenu}>About</NavItem>
          <NavItem onClick={closeMobileMenu}>Contact</NavItem>
          <NavItem onClick={closeMobileMenu}>Friend List</NavItem>
        </NavSmall>
      </Navbar>
      <Card>
        <div>
          <FormStepperExample />
          <Button onClick={toggleTheme} color="adaptive">
            Switch Theme
          </Button>
        </div>
      </Card>
      <Card
        style={{ maxWidth: 400 }}
        fit={true}
        color={'primary'}
        stickHeaderToBody={true}
        headerBorder={false}
        header={
          <div>
            <h3 className="d-flex flex-fill">Card Title</h3>
            <ButtonIcon color={'primary'} icon={<SearchIcon />} />
          </div>
        }
        imageTop={
          <Image
            src={`https://i.pravatar.cc/300?img=${11}`}
            width={'100%'}
            height={200}
          />
        }
        footer={
          <div className="d-flex flex-fill justify-content-end">
            <Button>cancel </Button>
            <Button color="orange">Done</Button>
          </div>
        }
      >
        <>
          <div className="bg-primary-active-light text-white p-2 border-radius-default">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            culpa dignissimos harum labore laborum nemo nostrum, tempora! Dolor
            doloribus fuga illo illum iure laborum magni maxime nihil obcaecati
            rem! Tempora?
          </div>
        </>
      </Card>
    </>
  );
}
