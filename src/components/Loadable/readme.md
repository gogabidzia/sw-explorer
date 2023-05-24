# Component `Loadable`
The Component shows loading spinner if `isLoading` is set to `true`, otherwise shows `children` itself

### Properties
| property  | type      |
|-----------|-----------|
| isLoading | `boolean`   |
| children  | `ReactNode` |

### Usage
```tsx
<Loadable isLoading={isLoading}>
  <CharacterList characters={characters} />
</Loadable>
```
