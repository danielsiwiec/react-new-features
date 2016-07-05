# react-new-features-modal

Show a modal to communicate new added features. The last shown version is stored in localStorage, so each user sees the message only once.

![screen](docs/screen.png)


## Usage

```javascript
import NewFeatures from 'react-new-features-modal'

...
render() {
  return <NewFeatures notes={notes} storageKey={STORAGE_KEY} />
}
```

## Configuration

**notes** - a JSON structure with release notes for consecutive versions:

```json
{
    "releases": [{
        "version": 1,
        "features": [{
            "title": "Foo",
            "description": "This new foo feature is so ready!"
        }]
    }, {
        "version": 2,
        "features": [{
            "title": "Bar",
            "description": "Now you can do foo with this new bar"
        }]
    },
    {
        "version": 3,
        "features": [{
            "title": "Baz",
            "description": "Baz has been just added for your convenience"
        }]
    }]
}
```

**storageKey** - the key used to save the last seen version number in users' localStorage


## Example

See the `example` folder. To run the example:

1. `npm install`
2. `npm start`
3. Open http://localhost:8080 in the browser
