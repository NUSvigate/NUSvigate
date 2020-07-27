import firebaseDb, { db } from '../firebaseDb';
import { Alert } from 'react-native';

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AVATAR = 'UPDATE_AVATAR'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export const updateAvatar = avatar => {
    return {
        type: UPDATE_AVATAR,
        payload: avatar
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await firebaseDb.auth().signInWithEmailAndPassword(email, password)

            response.user.emailVerified === true ?
            dispatch(getUser(response.user.uid)) :
            Alert.alert( "Please verify your email!", null,
                [
                    {
                        text: "Okay"
                    },
                    {
                        text: "Send verification email",
                        onPress: () => response.user.sendEmailVerification()
                    }
                ],
                { cancelable: false }
            )
        } catch (e) {
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, name, avatar } = getState().user

            const response = await firebaseDb.auth().createUserWithEmailAndPassword(email, password)

            if (response.user.uid) {
                response.user.sendEmailVerification();

                const user = {
                    uid: response.user.uid,
                    email: email,
                    name: name,
                    avatar: avatar
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user });
                Alert.alert('Sign Up Successful!');
            }
        } catch (e) {
            alert(e)
        }
    }
}