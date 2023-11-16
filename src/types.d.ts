import * as z from 'zod';

export const ColorSchema = z.enum(['neutral', 'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'white', 'black']);
export type Color = z.infer<typeof ColorSchema>;

export const twColorUtils = {
    neutral: { bg: 'bg-neutral-50', bgDark: 'bg-neutral-600', text: 'text-white', textDark: 'text-neutral-800' },
    red: { bg: 'bg-red-50', bgDark: 'bg-red-600',           text: 'text-white', textDark: 'text-red-800' },
    blue: { bg: 'bg-blue-50', bgDark: 'bg-blue-600',        text: 'text-white', textDark: 'text-blue-800' },
    green: { bg: 'bg-green-50', bgDark: 'bg-green-600',     text: 'text-white', textDark: 'text-green-800' },
    yellow: { bg: 'bg-yellow-50', bgDark: 'bg-yellow-600', text: 'text-white', textDark: 'text-yellow-800' },
    orange: { bg: 'bg-orange-50', bgDark: 'bg-orange-600', text: 'text-white', textDark: 'text-orange-800' },
    pink: { bg: 'bg-pink-50', bgDark: 'bg-pink-600',    text: 'text-white', textDark: 'text-pink-800' },
    white: { bg: 'bg-white', bgDark: 'bg-white',        text: 'text-black', textDark: 'text-black' },
    black: { bg: 'bg-black', bgDark: 'bg-black',        text: 'text-white', textDark: 'text-white' }
}

export const hexColors = {
    neutral:    { '50': '#fafafa', '600': '#525252' },
    red:        { '50': '#fef2f2', '600': '#dc2626' },
    blue:       { '50': '#eff6ff', '600': '#2563eb' },
    green:      { '50': '#f0fdf4', '600': '#16a34a' },
    yellow:     { '50': '#fefce8', '600': '#ca8a04' },
    orange:     { '50': '#fff7ed', '600': '#ea580c' },
    pink:       { '50': '#FDF2F8', '600': '#db2777' },
    white:      { '50': '#FFFFFF', '600': '#FFFFFF' },
    black:      { '50': '#000000', '600': '#000000' }
}

/*
type Event = {
	title: string
	image: string
	link: string
    location: string
    geo: {
        lat: number
        lng: number
    }
    date: {
        from: Date
        to: Date
    }
}
*/