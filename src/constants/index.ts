import {Dimensions} from 'react-native'
import {Category} from '../interfaces'

export const WIDTH = Dimensions.get('window').width
export const RECENT = 'recent'
export const SEARCH = 'search'

export const categories: Category[] = [
	{key: RECENT, emoji: 'π', name: 'Recently used'},
	{key: 'emotion', emoji: 'π€ͺ', name: 'Smileys & Emotion'},
	{key: 'people', emoji: 'πββ', name: 'People & Body'},
	{key: 'nature', emoji: 'π¦', name: 'Animals & Nature'},
	{key: 'food', emoji: 'π', name: 'Food & Drink'},
	{key: 'activities', emoji: 'βΎοΈ', name: 'Activities'},
	{key: 'places', emoji: 'βοΈ', name: 'Travel & Places'},
	{key: 'objects', emoji: 'π‘', name: 'Objects'},
	{key: 'emojis', emoji: 'β', name: 'Symbols'},
	{key: 'flags', emoji: 'π³οΈβπ', name: 'Flags'}
]