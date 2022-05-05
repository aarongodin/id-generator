# @aarongodin/id-generator

An even simpler APi for this module.

```sh
yarn add aarongodin/id-generator#main
```

Usage:

```typescript
import * as idg from "@aarongodin/id-generator"

idg.get() // => "o48nrbFLtaoP993jVaDX" (20 character alphanum string, no prefix)
idg.get('evt') // => "evt_g11phA1mrnhSnZ2g0TMY" (24 characters)
idg.get('evt', '-', 8) // => "evt-CKZ36usq" (12 characters)
```

## Author

Forked from the friends at [Auth0](auth0.com).

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
