import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    headings: [
        { highlight: 'halper', normal: 'runs' },
        { highlight: 'your', normal: 'business' },
    ],
    subtext: {
        bold: 'AI bussiness manager',
        normal: 'for Solopreneurs',
    },
    buttonText: 'Try For Free Now',
    infoBlocks: [
        { icon: 'calendar', text: 'Free 14-day trial' },
        { icon: 'creditCard', text: 'No credit card required' },
    ],
    footer: {
        leftDescription: 'Connect. Automate .Dominate',
        rightTitle: 'Halper AI',
        rightDescription: 'syncs with the tools that run your bussiness.',
        socialIcons: [
            { src: 'meta', alt: 'meta' },
            { src: 'instagram', alt: 'instagram' },
            { src: 'telegram', alt: 'telegram' },
            { src: 'tiktok', alt: 'tiktok' },
            { src: 'whatsapp', alt: 'whatsapp' },
            { src: 'calendar', alt: 'calendar' },
        ],
    },
    status: 'idle',
    error: null,
};

export const fetchMainData = createAsyncThunk('main/fetchMainData', async () => {
    return new Promise(resolve => setTimeout(() => resolve({
        headings: [
            { highlight: 'halper', normal: 'runs' },
            { highlight: 'your', normal: 'business' },
        ],
        subtext: {
            bold: 'AI bussiness manager',
            normal: 'for Solopreneurs',
        },
        buttonText: 'Try For Free Now',
        infoBlocks: [
            { icon: 'calendar', text: 'Free 14-day trial' },
            { icon: 'creditCard', text: 'No credit card required' },
        ],
        footer: {
            leftDescription: 'Connect. Automate .Dominate',
            rightTitle: 'Halper AI',
            rightDescription: 'syncs with the tools that run your bussiness.',
            socialIcons: [
                { src: 'meta', alt: 'meta' },
                { src: 'instagram', alt: 'instagram' },
                { src: 'telegram', alt: 'telegram' },
                { src: 'tiktok', alt: 'tiktok' },
                { src: 'whatsapp', alt: 'whatsapp' },
                { src: 'calendar', alt: 'calendar' },
            ],
        },
    }), 500));
});


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMainData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMainData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                Object.assign(state, action.payload);
            })
            .addCase(fetchMainData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default mainSlice.reducer;
