# React โ๏ธ Native โ๏ธ Emoji ๐ Picker โ๏ธ

### Super light weight ๐ชถ

**6.45 kB** if using an asset loader for the emoji json (recommended)

### Zer0 dependencies ๐ซ ๐ถ

Aside from React Native peer obvs

### Dark/light mode ๐โ๏ธ

To be or not to be, that is the question

<img width="100%" src="https://raw.githubusercontent.com/WoodburyShortridge/rn-emoji-picker/master/screenshot/screenshot.png" />


### Un-opinionated ๐ค
- Use any storage framework (e.g. [Async Storage](https://reactnative.directory/?search=storage) vs. new JSI [Mmkv Stoage](https://github.com/ammarahm-ed/react-native-mmkv-storage))
- Load emoji json any way you please (e.g. import from package, [Expo Assets](https://docs.expo.dev/versions/latest/sdk/asset/), over network)

### Install ๐ ๏ธ

`npm i rn-emoji-picker` or `yarn rn-emoji-picker` you know what to do!

### Example usage ๐จโ๐ป

```javascript
import {StyleSheet, View} from 'react-native'
import EmojiPicker, {emojiFromUtf16} from "rn-emoji-picker"
import {emojis} from "rn-emoji-picker/dist/data"
// recommend using an asset loader for emojis
// or fetching over network for decreased bundle size
import {useState} from "react"
import {StatusBar} from 'expo-status-bar'

console.log(emojiFromUtf16('1F9E8')) // "๐งจ" helper to decode unified

export default function App() {
    const [recent, setRecent] = useState([])
    // replace w/ your preferred device storage library

    return ( // try in a navigation modal!
        <View style={styles.container}>
            <EmojiPicker
                emojis={emojis} // emojis data source see data/emojis
                recent={recent} // store of recently used emojis
                autoFocus={true} // autofocus search input
                loading={false} // spinner for if your emoji data or recent store is async
                darkMode={true} // to be or not to be, that is the question
                perLine={7} // # of emoji's per line
                onSelect={console.log} // callback when user selects emoji - returns emoji obj
                onChangeRecent={setRecent} // callback to update recent storage - arr of emoji objs
	            // backgroundColor={'#000'} // optional custom bg color
            />
            <StatusBar style="light"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50
    },
})
```

### Data structure ๐

Example emoji obj ๐

```json
{
  "category":"smileys & emotion",
  "keywords":[
    "happy",
    "smile",
    "smiley",
    "smiley face",
    "so happy",
    "thatโs great",
    "so great",
    "yay",
    "hooray",
    "hurrah",
    "cheerful",
    "delighted",
    "joyful",
    "pleased",
    "grinning face",
    "face",
    "joy",
    ":d",
    "grin",
    "grinning"
  ],
  "name":"grinning face",
  "order":1,
  "unified":"1F600",
  "emoji":"๐"
}
```
