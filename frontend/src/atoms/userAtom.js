import {atom} from 'recoil';

export const usernameAtom = atom({
    key: 'usernameAtom',
    default: "",
});
export const firstNameAtom = atom({
    key: 'firstNameAtom',
    default: "",
});
export const lastNameAtom = atom({
    key: 'lastNameAtom',
    default: "",
});

export const tousernameAtom = atom({
    key: 'tousernameAtom',
    default: "",
}); 