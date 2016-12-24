# crud-scaffolder

A very minute library to create a basic scaffold for a given Crud Folder


### Installation
> npm install crud-scaffolder -g

### Usage

> $ scaffold user

The above command would create a folder structure in the current folder like mentioned below:

* user   
    * create.js
    * get.js
    * list.js
    * update.js
    * remove.js
    * user.js

The content of user.js file will be:
```javascript
    module.exports = {
        create: (require('./create)),
        get: (require('./get)),
        list: (require('./list)),
        update: (require('./update)),
        remove: (require('./remove)),
    }
```

The content in the rest of the files will be:

```javascript
    module.exports = function (req, res) {

    }
```

if you input is user-account, then the user.js file would be rename to userAccount.js
i.e, it camelizes the given input for the  main file.