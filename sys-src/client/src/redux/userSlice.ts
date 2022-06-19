import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import Axios from 'axios';
import ApiRouter from '../api/ApiRouter';

export interface userState {
    admin: boolean;
    isLoggedIn: boolean;
    username: string;
    email: string;
    status: 'idle' | 'loading' | 'failed';
    profile: string;
}

const initialState: userState = {
    admin: false,
    isLoggedIn: false,
    username: '',
    email: '',
    status: 'idle',
    profile: '',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        const response = await Axios.post(
            ApiRouter.FetchUserData,
            null,
            ApiRouter.createHeaders()
        );
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setImageProfile: (state, action) => {
            state.profile = action.payload;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.isLoggedIn = true;

                const { username, email, admin, profile } = action.payload;
                state.username = username;
                state.email = email;
                state.admin = admin;
                state.profile = profile;
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.status = 'failed';
                state.isLoggedIn = false;
            });
    },
});

export const { setIsLoggedIn, setImageProfile } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUsername = (state: RootState) => state.user.username;
export const selectEmail = (state: RootState) => state.user.email;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectIsAdmin = (state: RootState) => state.user.admin;
export const selectImageProfile = (state: RootState) => state.user.profile;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//     (amount: number): AppThunk =>
//     (dispatch, getState) => {
//         const currentValue = selectCount(getState());
//         if (currentValue % 2 === 1) {
//             dispatch(incrementByAmount(amount));
//         }
//     };

export default userSlice.reducer;
