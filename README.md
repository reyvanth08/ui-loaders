# React UI Loaders

A collection of customizable loading animations for React applications.

## Installation

Using npm:

    npm install react-ui-loaders

Using yarn:

    yarn add react-ui-loaders

## Available Loaders

1. CircleLoader
2. PulseLoader
3. SpinnerLoader
4. DotLoader
5. RingLoader
6. FullScreenLoader

## Usage

### Basic Loaders

Import the desired loader component and use it in your React component:

1. Import the loader

```jsx
import {
    CircleLoader,
    PulseLoader,
    SpinnerLoader,
    DotLoader,
	RingLoader
} from "react-ui-loaders";
```

2. Add the loader to your JSX

### CircleLoader

```jsx
<CircleLoader size={80} color="#cba6f7" thickness={4} speed={1} />
```

### PulseLoader

```jsx
<PulseLoader size={80} color="#cba6f7" />
```

### SpinnerLoader

```jsx
<SpinnerLoader size={80} color="#cba6f7" />
```

### DotLoader

```jsx
<DotLoader size={80} color="#cba6f7" />
```

### RingLoader

```jsx
<RingLoader size={80} color="#cba6f7" />
```
### WaveLoader

```jsx
<WaveLoader size={80} color="#cba6f7" />
```

3. Customize with props as needed

### FullScreenLoader

The FullScreenLoader component creates a full-screen overlay with the selected loader centered on the screen:

1. Import the FullScreenLoader

```jsx
import { FullScreenLoader } from "react-ui-loaders";
```

2. Use state to control the loader's visibility
3. Add the FullScreenLoader to your JSX, conditionally rendered based on the loading state

```jsx
function MyComponent() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            {isLoading && (
                <FullScreenLoader
                    loaderType="spinner"
                    size={80}
                    color="#ffffff"
                    backgroundColor="rgba(0, 0, 0, 0.7)"
                    isLoading={isLoading}
                />
            )}
            <button onClick={() => setIsLoading(!isLoading)}>
                Toggle Loader
            </button>
        </div>
    );
}
```

4. Customize with props as needed

## API

### CircleLoader

| Prop      | Type   | Default   | Description                                       |
| --------- | ------ | --------- | ------------------------------------------------- |
| size      | number | 40        | Size of the loader in pixels                      |
| color     | string | '#61dafb' | Color of the loader                               |
| thickness | number | 4         | Thickness of the circle                           |
| speed     | number | 1         | Animation speed (1 is normal, 2 is twice as fast) |

### PulseLoader

| Prop  | Type   | Default   | Description                  |
| ----- | ------ | --------- | ---------------------------- |
| size  | number | 40        | Size of the loader in pixels |
| color | string | '#61dafb' | Color of the loader          |

### SpinnerLoader

| Prop  | Type   | Default   | Description                  |
| ----- | ------ | --------- | ---------------------------- |
| size  | number | 40        | Size of the loader in pixels |
| color | string | '#61dafb' | Color of the loader          |

### DotLoader

| Prop  | Type   | Default   | Description                  |
| ----- | ------ | --------- | ---------------------------- |
| size  | number | 40        | Size of the loader in pixels |
| color | string | '#61dafb' | Color of the loader          |

### FullScreenLoader

| Prop            | Type    | Default              | Description                                                     |
| --------------- | ------- | -------------------- | --------------------------------------------------------------- |
| loaderType      | string  | 'circle'             | Type of loader to display ('circle', 'pulse', 'spinner', 'dot') |
| size            | number  | 60                   | Size of the loader in pixels                                    |
| color           | string  | '#61dafb'            | Color of the loader                                             |
| thickness       | number  | -                    | Thickness of the loader (for applicable types)                  |
| speed           | number  | -                    | Animation speed (for applicable types)                          |
| backgroundColor | string  | 'rgba(0, 0, 0, 0.5)' | Background color of the full-screen overlay                     |
| isLoading       | boolean | true                 | Whether to display the loader                                   |

## License

ISC License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
