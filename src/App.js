import { createContext } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { DefaultLayout } from './Layout';
import Modal from './components/Modal/Modal';
import Menu4 from './components/Menu4/Menu4';
import KeyboardShotcuts from './components/KeyboardShortcuts/KeyboardShortcuts';
import { useCustomState } from './components/WraperLogic/State';
import { useCustomEffect1, useCustomEffect2, useCustomEffect3 } from './components/WraperLogic/Logic';

export const Valiable = createContext();

function App() {
    const {
        clickMenu2Item,
        setClickMenu2Item,
        clickMenu3Item,
        setClickMenu3Item,
        clickIconCloseInMenu3,
        setClickIconCloseInMenu3,
        clickButtonDone,
        setClickButtonDone,
        checkClickKeyboardShotcut,
        setCheckClickKeyboardShotcut,
        iconClose,
        setIconClose,
    } = useCustomState();

    console.log(checkClickKeyboardShotcut);

    useCustomEffect1(clickIconCloseInMenu3, setClickMenu2Item, setClickIconCloseInMenu3);
    useCustomEffect2(clickButtonDone, setClickMenu2Item, setClickButtonDone, setClickMenu3Item);
    useCustomEffect3(iconClose, setCheckClickKeyboardShotcut, setIconClose);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Valiable.Provider
                                        value={{
                                            clickMenu2Item,
                                            setClickMenu2Item,
                                            clickMenu3Item,
                                            setClickMenu3Item,
                                            checkClickKeyboardShotcut,
                                            setCheckClickKeyboardShotcut,
                                            iconClose,
                                            setIconClose,
                                        }}
                                    >
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                        <div className="block top-0 left-0 w-full h-full">
                                            {clickMenu2Item && !clickMenu3Item && (
                                                <Modal
                                                    setClickIconCloseInMenu3={setClickIconCloseInMenu3}
                                                    clickMenu2={clickMenu2Item}
                                                    clickMenu3Item={clickMenu3Item}
                                                />
                                            )}
                                            {clickMenu3Item && (
                                                <Menu4
                                                    clickMenu3Item={clickMenu3Item}
                                                    setClickButtonDone={setClickButtonDone}
                                                    clickButtonDone={clickButtonDone}
                                                />
                                            )}
                                            {checkClickKeyboardShotcut && (
                                                <KeyboardShotcuts
                                                    checkClickKeyboardShotcut={checkClickKeyboardShotcut}
                                                />
                                            )}
                                        </div>
                                    </Valiable.Provider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
