# react-new-features-modal

Show a modal to communicate new added features. The last shown version is stored in localStorage, so each user sees the message only once.

![screen](docs/screen.png)

### Only new features

Only the features the user hasn't seen yet will be displayed in the pop-up. E.g. if the user has seen version 4 of your application before and the current version is 6, only a features for versions 5 and 6 will be displayed in the New Features modal.


## Usage

```javascript
import NewFeatures from 'react-new-features-modal'

...
render() {
  return <NewFeatures notes={notes} limit="2"/>
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
        },
        {
            "title": "Baz",
            "description": "Baz has been just added for your convenience"
        }]
    }]
}
```

**limit** *(optional)* - maximum number of last versions to display. Otherwise no limit.


## Example

See the `example` folder. To run the example:

1. `npm install`
2. `npm start`
3. Open http://localhost:8080 in the browser
